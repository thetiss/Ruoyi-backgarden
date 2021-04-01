<template>
  <div>
    <el-dialog title="产品检测报告上传" :modal="false" :visible.sync="isDialogTableVisible" :before-close="handleClose" class='dialog-container'>
      <div slot="title" class="dialog-header-title">产品检测报告上传</div>
      <!-- 产品报告列表Table -->
      <el-card class="box-card" shadow="never">
        <div slot="header" class="card-title">
          <span>已经上传的产品检测报告</span>
        </div>
        <el-table
          :data="reportsList"
          row-key="id"
          stripe
          :default-sort = "{prop: 'create_time', order: 'descending'}"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="序号" :show-overflow-tooltip="true" width="160"></el-table-column>
          <el-table-column prop="name" label="报告名称"></el-table-column>
          <el-table-column prop="create_time" label="上传时间" sortable :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="email" label="产品名称" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="status" label="产品类型" width="80"></el-table-column>
          <!-- <el-table-column prop="status" label="产品类型" :formatter="statusFormat" width="80"></el-table-column> -->
          <el-table-column prop="id" label="产品编号" :show-overflow-tooltip="true">
            <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.id }}</p>
                  <p>住址: {{ scope.row.name }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.id }}</el-tag>
                  </div>
                </el-popover>
            </template>
          </el-table-column>
        </el-table>
          <pagination
            v-show="total>0"
            :total="total"
            :page.sync="queryParams.pageNum"
            :limit.sync="queryParams.pageSize"
            @pagination="getRemoteUserList"
          />
      </el-card>
      <!-- 产品报告上传Form -->
        <el-form  slot="footer" ref="elForm" :model="formData" :rules="rules" size="medium" label-width="180px"
          label-position="right">
          <el-row type="flex" justify="start" align="right" :gutter="1">
            <el-form-item prop="productType">
              <span slot="label" class="input-label">产品类型</span>
              <el-input v-model="formData.field105" placeholder="请输入产品类型" clearable :style="{width: '100%'}">
              </el-input>
            </el-form-item>
            <el-form-item prop="productNo">
              <span slot="label" class="input-label">产品编号</span>
              <el-input v-model="formData.field107" placeholder="请输入产品编号" clearable :style="{width: '100%'}">
              </el-input>
            </el-form-item>
          </el-row>
          <el-row type="flex" justify="start" align="left" :gutter="1">
            <el-form-item prop="productName">
              <span slot="label" class="input-label">产品名称</span>
              <el-input v-model="formData.field109" placeholder="请输入产品名称" clearable :style="{width: '100%'}">
              </el-input>
            </el-form-item>
            <el-form-item prop="productReport">
              <span slot="label" class="input-label">产品检测报告</span>
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList" >
                <el-button size="small" type="success" plain icon="el-icon-document-add">点击上传</el-button>
                <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
              </el-upload>
            </el-form-item>
          </el-row>
          <el-form-item size="large">
            <el-button type="primary" @click="submitForm" icon="el-icon-upload2">上传</el-button>
            <el-button type="danger" :disabled='isDisableDeleteReportBtn' @click="resetForm" icon="el-icon-delete">删除</el-button>
          </el-form-item>
        </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { listUsers, listUsersWithParams } from '@/api/enterprise/report';

export default {
  name: "Menu",
  data() {
    return {
      isDialogTableVisible: false,
      isDisableDeleteReportBtn: true,
      multipleSelection: [],
      // Table 数据源
      reportsList: [],
      // Table Pagination 总数
      total: 0,
      // Table Pagination 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10
      },
      formData: {
        productType: undefined,
        productNo: undefined,
        productName: undefined,
        productReport: null
      },
      fileList: [],
      // 遮罩层
      loading: true,
      // 显示搜索条件
      showSearch: true,
      // 菜单表格树数据
      menuList: [],
      // 菜单树选项
      menuOptions: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 显示状态数据字典
      visibleOptions: [],
      // 菜单状态数据字典
      statusOptions: [],
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        productType: [{
          required: false,
          message: '请输入产品类型',
          trigger: 'blur'
        }],
        productNo: [{
          required: false,
          message: '请输入产品编号',
          trigger: 'blur'
        }],
        productName: [{
          required: false,
          message: '请输入产品名称',
          trigger: 'blur'
        }]
      }
    };
  },
  created() {
    this.getRemoteUserList();
    this.getUserList();
    // eslint-disable-next-line func-names
    this.$on('open', function () {
      this.isDialogTableVisible = true;
    });
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClose(done) {
      // this.isDialogTableVisible = true;
      this.$confirm('确认关闭？')
        .then((_) => {
          done();
          // this.$emit('update:dialogVisible', false);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      this.isDisableDeleteReportBtn = false;
      // debugger;
    },
    submitForm() {
      this.$refs.elForm.validate((valid) => {
        // if (!valid) { return 'a'; }
        const testInfo = 'h';
        return testInfo;
        // TODO 提交表单
      });
    },
    resetForm() {
      this.$refs.elForm.resetFields();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 $ { file.name }？`);
    },
    // 选择图标
    selected(name) {
      this.form.icon = name;
    },
    getUserList() {
      this.loading = true;
      listUsers().then((response) => {
        this.menuList = response.data.data;
        this.loading = false;
      });
    },
    getRemoteUserList() {
      this.loading = true;
      listUsersWithParams(this.queryParams).then((response) => {
        this.reportsList = response.data.data;
        this.total = response.data.meta.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        menuId: undefined,
        parentId: 0,
        menuName: undefined,
        icon: undefined,
        menuType: "M",
        orderNum: undefined,
        isFrame: "1",
        isCache: "0",
        visible: "0",
        status: "0"
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
    //   this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
    //   this.resetForm("queryForm");
    //   this.handleQuery();
    },
    /** 新增按钮操作 */
    handleAdd(row) {
    //   this.reset();
    //   this.getTreeselect();
    //   if (row != null && row.menuId) {
    //     this.form.parentId = row.menuId;
    //   } else {
    //     this.form.parentId = 0;
    //   }
    //   this.open = true;
    //   this.title = "添加菜单";
    }
  }
};

</script>
<style >

.dialog-header-title {
  background-color: #e3e3e3;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}

/* dialog card table 获取页面滚动条，card里有 table和pagination */
.dialog-container .el-dialog  {
    margin: 0 auto !important;
    height: 90%;
    overflow: hidden;
}
.dialog-container .el-dialog .el-dialog__body {
    height: 65%;
    overflow: hidden;
}

.dialog-container .el-dialog .el-dialog__body .el-card {
            height: 95%;
            overflow: hidden;
}
.dialog-container .el-dialog .el-dialog__body .el-card .el-card__body {
            height: 80%;
            overflow: hidden;
}
.dialog-container .el-dialog .el-dialog__body .el-card .el-card__body .el-table {
            height: 80%;
            overflow: hidden;
            overflow-y: auto;
}

/* dialog form container 高度 */
.dialog-container .el-dialog .el-dialog__footer {
    height: 30%;
    justify-content: center;
    align-items: Center;
}

/* dialog form row 左边距 */
.dialog-container .el-dialog .el-dialog__footer .el-row {
  left: -8%;
}
/* .dialog-container .el-dialog .el-dialog__body .el-card {
    overflow: hidden;
}
.dialog-container .el-dialog .el-dialog__body .el-card .el-table {
    overflow: hidden;
    overflow-y: auto;
} */
/*
.dialog-container .el-dialog .el-dialog__body {
    margin: 0 auto !important;
    height: 100%;
    overflow: hidden;
}
.dialog-container .el-dialog .el-dialog__body .el-card {
    margin: 0 auto !important;
    height: 70%;
    overflow: hidden;
}
.dialog-container .el-dialog .el-dialog__body .el-card .el-table {
    position: absolute;
    left: 0;
    top: 54px;
    right: 0;
    height: 90%;
    z-index: 1;
    overflow: hidden;
    overflow-y: auto;
}
.dialog-container .el-dialog .el-dialog__body .el-card .pagination {
    position: absolute;
    left: 0;
    right: 0;
    height: 10%;
    z-index: 1;
}

.dialog-container .el-dialog .el-dialog__body .el-form {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 30%;
    z-index: 1;
} */
</style>
