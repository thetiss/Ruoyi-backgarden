<template>
  <a-modal
    ref="createModal"
    :title="visible ? '详情' : (visible ? '用户编辑' : '新增操作')"
    :width="840"
    :visible="visible"
    @cancel="close"
    @ok="confirm"
    :confirmLoading="confirmLoading"
  >
    <div class="content-container">
      <div style="height: 30%" class="content-item meta-form">
        <a-form-model :model="metaForm" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
          <a-col :span="12">
            <a-form-model-item label="企业名称">
              <a-input v-model="metaForm.companyName" />
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="企业编码">
              <a-input v-model="metaForm.companyCode" />
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="开始日期">
              <a-input v-model="metaForm.beginDate" />
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="结束日期">
              <a-input v-model="metaForm.endDate" />
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="类型">
              <a-tag color="#ffc93b">
                {{ metaForm.monitorType === '1' ? '温度' : '无' }}
              </a-tag>
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="温度预警次数">
              <a-tag color="#f50">
                {{ metaForm.alarmCn }}
              </a-tag>
            </a-form-model-item>
          </a-col>
        </a-form-model>
      </div>
      <!-- 表格 -->
      <div style="height: 60%" class="content-item table-list">
        <a-table
          class="table-content-wrapper"
          ref="table"
          :columns="columns"
          :data-source="detailListDataSource"
          :row-key="record => record.reportId"
          :pagination="false"
          :scroll="{ y: 240 }"
        >
          <!-- 温度范围 -->
          <span slot="alarmTempratureRange" slot-scope="text, record">
            <a-tag color="green">
              {{ '['+record.alarmLow + ', ' + record.alarmHigh + ']' }}
            </a-tag>
          </span>
        </a-table>
      </div>
      <!-- 底部分页按钮 -->
      <div style="height: 5%" class="content-item self-pagination">
        <a-pagination
          v-if="total !== 0"
          class="ant-table-pagination"
          v-model="current"
          :page-size-options="pageSizeOptions"
          :total="total"
          :show-total="total => `共${total}条`"
          show-size-changer
          :page-size="pageSize"
          @showSizeChange="onShowSizeChange"
          @change="currentPageChange"
        >
          <template slot="buildOptionText" slot-scope="props">
            <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
            <span v-if="props.value === '50'">全部</span>
          </template>
        </a-pagination>
      </div>
    </div>
    <template slot="footer">
      <a-button key="submit" type="primary" :loading="loading" @click="handleExport">
        下载报表
      </a-button>
      <a-button key="back" @click="close">
        取消
      </a-button>
    </template>
  </a-modal>
</template>

<script>
// import moment from 'moment';
// import { listDetailReportsByParams } from '../api';
// 车辆 Table-column
const carTableColumns = [
  {
    title: '企业名称',
    dataIndex: 'companyName',
    align: 'center',
    ellipsis: true
  },
  {
    title: '车牌号码',
    dataIndex: 'vehicleCode',
    align: 'center',
    width: '15%'
  },
  {
    title: '实时温度',
    dataIndex: 'temperature',
    align: 'center',
    width: '10%'
  },
  {
    title: '正常温度范围',
    key: 'alarmTempratureRange',
    align: 'center',
    width: '15%',
    scopedSlots: { customRender: 'alarmTempratureRange' }
  },
  {
    title: '同步时间',
    dataIndex: 'syncTime',
    align: 'center',
    width: '20%'
  }
];

// 仓库 Table-column
const storageTableColumns = [
  {
    title: '仓库名称',
    dataIndex: 'storeName',
    align: 'center',
    ellipsis: true,
    width: '20%'
  },
  {
    title: '所属企业',
    dataIndex: 'companyName',
    align: 'center',
    ellipsis: true,
    width: '25%'
  },
  {
    title: '实时温度',
    dataIndex: 'temperature',
    align: 'center',
    width: '15%'
  },
  {
    title: '正常温度范围',
    key: 'alarmTempratureRange',
    align: 'center',
    width: '15%',
    scopedSlots: { customRender: 'alarmTempratureRange' }
  },
  {
    title: '同步时间',
    dataIndex: 'syncTime',
    align: 'center',
    width: '25%'
  }
];
// 表单字段
export default {
  data() {
    return {
      visible: false,
      confirmLoading: false,
      loading: false,
      // 明细列表表格
      detailListDataSource: [],
      // tableLoading: true,
      // 分页数据(默认第一页):
      pageSizeOptions: ['1', '5', '10', '12'],
      total: 0,
      current: 1,
      pageSize: 10,
      queryParams: {
        companyCode: '',
        storeType: '',
        beginDate: null,
        pageSize: 10,
        pageNum: 1
      },
      metaForm: {},
      columns: null
    };
  },
  created() {
    // this.getList()
  },
  methods: {
    // 由于要用传进来的值做判断,将显示和隐藏放在内部做处理
    show(data) {
      if (data) {
        this.metaForm = ({ ...data }) || {};
        // table column 根据storeType不同
        this.columns = data.storeType === '1' ? carTableColumns : storageTableColumns;
        this.queryParams = {
          companyCode: data.companyCode,
          storeType: data.storeType,
          beginDate: data.beginDate
        };
        this.getList();
      }
      this.visible = true;
    },
    // 关闭模态框
    close() {
      this.queryParams = {
        companyCode: undefined,
        storeType: undefined,
        beginDate: undefined,
        pageSize: 10,
        pageNum: 1
      };
      this.visible = false;
    },
    confirm() {
      this.confirmLoading = true;
      // 调用外部刷新列表方法
      // this.$emit('handle-success')
    },
    /** pageSize 变化的回调 */
    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize;
      this.current = current;
      this.getList();
    },
    /** 页码改变的回调 */
    currentPageChange(current, pageSize) {
      this.pageSize = pageSize;
      this.current = current;
      this.getList();
    },
    /** 查询用户列表 */
    getList() {
      this.tableLoading = true;
      const params = { ...this.queryParams };
      console.log(929, this.queryParams);
      // 与分页绑定
      params.pageNum = this.current;
      params.pageSize = this.pageSize;
      // listDetailReportsByParams(Object.assign(params))
      //   .then((res) => {
      //     this.detailListDataSource = res.rows.map((item) => ({
      //       ...item,
      //       companyName: item.companyName + Date.now()
      //     }));
      //     this.total = res.total;
      //     this.tableLoading = false;
      //   });
    },
    // 下载报表
    /**
     * 明细列表导出按钮操作
     * query: {
     *     companyCode: '',
     *     storeType: '',
     *     beginDate: ,
     * }
     * @param query
     * @returns xlsx
     */
    handleExport() {
      const { storeType } = this.metaForm;
      const params = {
        companyCode: this.metaForm.companyCode,
        storeType: this.metaForm.storeType,
        beginDate: this.metaForm.beginDate
      };
      const fileTypePrefix = storeType === '1' ? '车辆' : '仓库';
      // const fileDateSuffix = moment().format('YYYYMMDDHHmm');
      const exportReportRequestUrl = '/coldchain-valueadd/monitorReport/export';
      // const fileName = `定期报表_${fileTypePrefix}_${fileDateSuffix}.xlsx`;
      const fileName = `定期报表_${fileTypePrefix}.xlsx`;
      this.download(exportReportRequestUrl, params, fileName);
    }
  }
};
</script>

<style scoped>
div.content-container {
  display: flex;
  flex-direction: column;
  counter-reset: list-number;
}
.content-item:before {
  counter-increment: list-number;
  content: counter(list-number);
  margin-right: 10px;
  margin-bottom:10px;
  width:25px;
  height:25px;
  display:inline-flex;
  align-items:center;
  justify-content: center;
  font-size:16px;
  background-color:#d7385e;
  border-radius:50%;
  color:#fff;
}
/* .meta-form {
  position: relative;
  z-index: 30;
}
.table-list {
  position: absolute;
  z-index: 40;
}
.self-pagination {
  position: relative;
  z-index: 50;
} */
</style>
