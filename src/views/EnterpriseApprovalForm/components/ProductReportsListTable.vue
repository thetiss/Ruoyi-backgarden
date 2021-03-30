<template>
  <div class="app-container">
    <el-dialog title="产品检测报告上传" :modal="false" :visible.sync="isDialogTableVisible" :before-close="handleClose" >
      <!-- 产品报告列表Table -->
      <el-card class="box-card" shadow="never">
        <div slot="header" class="card-title">
          <span>已经上传的产品检测报告</span>
        </div>
        <el-table
          :data="menuList"
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
      </el-card>

      <!-- 产品报告上传Form -->
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="180px"
        label-position="right">
        <el-row type="flex" justify="start" align="right" :gutter="1" style="margin-left: 20%">
          <el-form-item label="产品类型" prop="productType">
            <el-input v-model="formData.field105" placeholder="请输入产品类型" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
          <el-form-item label="产品编号" prop="productNo">
            <el-input v-model="formData.field107" placeholder="请输入产品编号" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-row>
        <el-row type="flex" justify="start" align="left" :gutter="1" style="margin-left: 20%">
          <el-form-item label="产品名称" prop="productName">
            <el-input v-model="formData.field109" placeholder="请输入产品名称" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
          <el-form-item label="产品检测报告" prop="productReport">
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
              <el-button size="small" type="success" plain icon="el-icon-document-add" style="margin-left: -100%">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
import { listUsers } from '@/api/enterprise/report';

export default {
  name: "Menu",
  data() {
    return {
      isDialogTableVisible: false,
      isDisableDeleteReportBtn: true,
      multipleSelection: [],
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
      // 查询参数
      queryParams: {
        menuName: undefined,
        visible: undefined
      },
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
    this.getUserList();
    // eslint-disable-next-line func-names
    this.$on('open', function () {
      this.isDialogTableVisible = true;
    });
    // this.getList();
    // this.getDicts("sys_show_hide").then((response) => {
    //   this.visibleOptions = response.data;
    // });
    // this.getDicts("sys_normal_disable").then((response) => {
    //   this.statusOptions = response.data;
    // });
  },
  methods: {
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
    /** 查询菜单列表 */
    // getList() {
    //   this.loading = true;
    //   listMenu(this.queryParams).then((response) => {
    //     this.menuList = this.handleTree(response.data, "menuId");
    //     this.loading = false;
    //   });
    // },
    /** 转换菜单数据结构 */
    // normalizer(node) {
    //   if (node.children && !node.children.length) {
    //     // eslint-disable-next-line no-param-reassign
    //     delete node.children;
    //   }
    //   return {
    //     id: node.menuId,
    //     label: node.menuName,
    //     children: node.children
    //   };
    // },
    /** 查询菜单下拉树结构 */
    // 显示状态字典翻译
    // visibleFormat(row, column) {
    //   if (row.menuType === "F") {
    //     return "";
    //   }
    //   return this.selectDictLabel(this.visibleOptions, row.visible);
    // },
    // 菜单状态字典翻译
    // statusFormat(row, column) {
    //   if (row.menuType === "F") {
    //     return "";
    //   }
    //   return this.selectDictLabel(this.statusOptions, row.status);
    // },
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
<style>

.card-title {
    text-align: left;
    font-weight: bold;
}

</style>
