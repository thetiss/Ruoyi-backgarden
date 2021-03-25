<template>
  <div>
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
  </div>
</template>
<script>
export default {
  components: {},
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
        enterpriseType: undefined
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
        }]
      }
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
.el-upload__tip {
  line-height: 1.2;
}
.card-title {
    text-align: left;
    font-weight: bold;
}

</style>
