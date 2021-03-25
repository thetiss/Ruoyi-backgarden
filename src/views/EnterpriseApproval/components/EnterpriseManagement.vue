<template>
  <div>
      <el-card :body-style="{ width: '85%', background: '#e3e3e3' }" >
        <div slot="header" class="card-title">
            <span>企业经营状况</span>
        </div>
        <el-row type="flex" justify="middle" align="top" :gutter="10">
          <el-form-item label="企业规模" prop="enterpriseScale">
            <el-radio-group v-model="formData.enterpriseScale" size="medium">
              <el-radio v-for="(item, index) in enterpriseScaleEnum" :key="index" :label="item.value"
                :disabled="item.disabled">{{item.label}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-row>
        <el-row type="flex" justify="start" align="top" :gutter="10">
          <el-form-item label="成立时间" prop="createdTime">
            <el-date-picker v-model="formData.createdTime" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
              :style="{width: '100%'}" placeholder="请选择成立时间" clearable>
            </el-date-picker>
          </el-form-item>
          <el-form-item label="注册资金" prop="registeredCapital">
            <el-input v-model="formData.registeredCapital" placeholder="请输入注册资金" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-row>
        <el-row type="flex" justify="start" align="top" :gutter="10">
          <el-form-item label="经营范围" prop="businessScope">
            <el-input v-model="formData.businessScope" placeholder="请输入经营范围" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-row>
        <el-row type="flex" justify="start" align="top" :gutter="10">
          <el-form-item label="产品检测报告上传" prop="reportUpload" required>
            <el-upload ref="reportUpload" :file-list="reportUploadfileList" :action="reportUploadAction"
              :before-upload="reportUploadBeforeUpload">
              <el-button size="small" type="primary" icon="el-icon-upload">点击上传</el-button>
            </el-upload>
          </el-form-item>
        </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        enterpriseScale: 1,
        createdTime: null,
        registeredCapital: undefined,
        businessScope: undefined,
        reportUpload: undefined
      },
      rules: {
        enterpriseScale: [{
          required: true,
          message: '企业规模不能为空',
          trigger: 'change'
        }],
        createdTime: [],
        registeredCapital: [],
        businessScope: [{
          required: true,
          message: '请输入经营范围',
          trigger: 'blur'
        }],
        reportUpload: []
      },
      reportUploadAction: 'https://jsonplaceholder.typicode.com/posts/',
      reportUploadfileList: [],
      enterpriseScaleEnum: [{
        "label": "大型企业",
        "value": 1
      }, {
        "label": "中型企业",
        "value": 2
      }, {
        "label": "小型企业",
        "value": 3
      }, {
        "label": "微型企业",
        "value": 4
      }]
    };
  },
  computed: {},
  watch: {},
  methods: {
    submitForm() {
      this.$refs.elForm.validate((valid) => {
        // eslint-disable-next-line no-useless-return
        if (!valid) return;
        // TODO 提交表单
      });
    },
    resetForm() {
      this.$refs.elForm.resetFields();
    },
    reportUploadBeforeUpload(file) {
      const isRightSize = file.size / 1024 / 1024 < 2;
      if (!isRightSize) {
        this.$message.error('文件大小超过 2MB');
      }
      return isRightSize;
    }
  }
};

</script>
<style>
.el-upload__tip {
  line-height: 1.2;
}
.card-title {
    text-align: left;
    font-weight: bold;
}

</style>
