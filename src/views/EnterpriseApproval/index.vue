<template>
  <div>
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px" >
      <!-- <EnterpriseBaseInfoCard />
      <EnterpriseManagement />
      <EnterprisePartner /> -->
            <el-card :body-style="{ width: '85%', background: '#e3e3e3' }" >
        <div slot="header" class="card-title">
            <span>企业基本信息</span>
        </div>
        <el-row type="flex" justify="start" align="top" :gutter="10">
            <el-form-item label="企业名称" prop="enterpriseName">
                <el-input v-model="formData.enterpriseName" placeholder="请输入企业名称" clearable :style="{width: '100%'}">
                </el-input>
            </el-form-item>
            <el-form-item label="统一社会代码证号" prop="enterpriseId">
                <el-input v-model="formData.enterpriseId" placeholder="请输入统一社会代码证号" clearable :style="{width: '100%'}">
                </el-input>
            </el-form-item>
        </el-row>
        <el-row type="flex" justify="start" align="top" :gutter="10">
            <el-form-item label="企业简写" prop="enterpriseshortName">
                <el-input v-model="formData.enterpriseshortName" placeholder="请输入企业简写" clearable :style="{width: '100%'}">
                </el-input>
            </el-form-item>
            <el-form-item label="企业英文名称" prop="enterpriseenglishName">
                <el-input v-model="formData.enterpriseenglishName" placeholder="请输入企业英文名称" clearable :style="{width: '100%'}">
                </el-input>
            </el-form-item>
        </el-row>
        <el-row type="flex" justify="start" align="top" :gutter="10">
            <el-form-item label="注册地址" prop="registeredAddress">
                <el-input v-model="formData.registeredAddress" placeholder="请输入注册地址" clearable :style="{width: '100%'}">
                </el-input>
            </el-form-item>
            <el-form-item label="企业法人" prop="enterpriseCorporation">
                <el-input v-model="formData.enterpriseCorporation" placeholder="请输入企业法人" clearable :style="{width: '100%'}">
                </el-input>
            </el-form-item>
        </el-row>
        <el-row type="flex" justify="start" align="top" :gutter="10">
            <el-form-item label="联系人电话" prop="enterpriseCallNO">
                <el-input v-model="formData.enterpriseCallNO" placeholder="请输入联系电话" clearable :style="{width: '100%'}">
                </el-input>
            </el-form-item>
            <el-form-item label="联系人邮箱" prop="enterpriseMail">
                <el-input v-model="formData.enterpriseMail" placeholder="请输入联系人" clearable :style="{width: '100%'}">
                </el-input>
            </el-form-item>
        </el-row>
        <el-row type="flex" justify="start" align="top" :gutter="10">
            <el-form-item label="所属区域" prop="enterpriseBelongInArea">
                <el-input v-model="formData.enterpriseBelongInArea" placeholder="请输入所属区域" clearable :style="{width: '100%'}">
                </el-input>
            </el-form-item>
            <el-form-item label="登录账号" prop="enterpriseLoginAccount">
                <el-input v-model="formData.enterpriseLoginAccount" placeholder="请输入登录账号" clearable :style="{width: '100%'}">
                </el-input>
            </el-form-item>
        </el-row>
        <el-row type="flex" justify="start" align="top" :gutter="10">
            <el-form-item label="企业代码" prop="enterpriseCode">
                <el-input v-model="formData.enterpriseCode" placeholder="请输入企业代码" clearable :style="{width: '100%'}">
                </el-input>
            </el-form-item>
            <el-form-item label="企业类型" prop="enterpriseType">
                <el-input v-model="formData.enterpriseType" placeholder="请输入企业类型" clearable :style="{width: '100%'}">
                </el-input>
            </el-form-item>
        </el-row>
    </el-card>
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
          <el-card :body-style="{ width: '85%', background: '#e3e3e3' }" >
        <div slot="header" class="card-title">
            <span>企业用户信息</span>
        </div>
        <el-row type="flex" justify="start" align="right" class="partner-info-input">
          <el-form-item label="主要合作伙伴" prop="partners" label-width='140px'>
            <el-input type="textarea" v-model="formData.partners" placeholder="请输入" clearable :style="{width: '90%'}">
            </el-input>
          </el-form-item>
        </el-row>
    </el-card>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import EnterpriseBaseInfoCard from './components/EnterpriseBaseInfoCard.vue';
// import EnterpriseManagement from './components/EnterpriseManagement.vue';
// import EnterprisePartner from './components/EnterprisePartner.vue';

export default {
  components: {
    // EnterpriseBaseInfoCard,
    // EnterpriseManagement,
    // EnterprisePartner
  },
  props: [],
  data() {
    return {
      formData: {
        enterpriseName: undefined,
        enterpriseId: undefined,
        enterpriseshortName: undefined,
        enterpriseenglishName: undefined,
        registeredAddress: undefined,
        enterpriseCorporation: undefined,
        enterpriseCallNO: undefined,
        enterpriseMail: undefined,
        enterpriseBelongInArea: undefined,
        enterpriseLoginAccount: undefined,
        enterpriseCode: undefined,
        enterpriseType: undefined,
        enterpriseScale: 1,
        createdTime: null,
        registeredCapital: undefined,
        businessScope: undefined,
        reportUpload: undefined,
        partners: undefined
      },
      rules: {
        enterpriseName: [{
          required: true,
          message: '请输入企业名称',
          trigger: 'blur'
        }],
        enterpriseId: [{
          required: true,
          message: '请输入统一社会代码证号',
          trigger: 'blur'
        }],
        enterpriseshortName: [{
          required: true,
          message: '请输入企业简写',
          trigger: 'blur'
        }],
        enterpriseenglishName: [{
          required: true,
          message: '请输入英文名称',
          trigger: 'blur'
        }],
        registeredAddress: [{
          required: true,
          message: '请输入注册地址',
          trigger: 'blur'
        }],
        enterpriseCorporation: [{
          required: true,
          message: '请输入企业法人',
          trigger: 'blur'
        }],
        enterpriseCallNO: [{
          required: true,
          message: '请输入联系人电话',
          trigger: 'blur'
        }],
        enterpriseMail: [{
          required: true,
          message: '请输入联系人邮箱',
          trigger: 'blur'
        }],
        enterpriseBelongInArea: [{
          required: true,
          message: '请输入所属区域',
          trigger: 'change'
        }],
        enterpriseLoginAccount: [{
          required: true,
          message: '请输入登录账号',
          trigger: 'blur'
        }],
        enterpriseCode: [{
          required: true,
          message: '请输入企业代码',
          trigger: 'blur'
        }],
        enterpriseType: [{
          required: true,
          message: '请输入企业类型',
          trigger: 'blur'
        }],
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
        reportUpload: [],
        partners: []
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
