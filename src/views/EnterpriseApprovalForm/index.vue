<template>
  <div id="app">
    <form-wizard @on-complete="onComplete"
        validate-on-back
        ref="wizard"
        :start-index.sync="activeTabIndex"
        shape="circle" color="#20a0ff" error-color="#ff4949"
        :title="null"
        :subtitle="null"
        nextButtonText="下一步"
        backButtonText="上一步"
        finishButtonText="完成"
    >
            <tab-content title="企业基本信息" icon="ti-user"
                :before-change="() => validate('firstStep')">
                <enterprise-base-info ref="firstStep" @on-validate='onStepValidate'></enterprise-base-info>
            </tab-content>
            <tab-content title="企业经营状况" icon="fas fa-map-marker-alt"
                :before-change="() => validate('secondStep')">
                <enterprise-management ref="secondStep" @on-validate='onStepValidate'></enterprise-management>
            </tab-content>
            <tab-content title="企业用户信息"
                :before-change="() => validate('thirdStep')">
                <enterprise-partner ref="thirdStep" @on-validate='onStepValidate'></enterprise-partner>
            </tab-content>
    </form-wizard>
  </div>
</template>

<script>
// import { FormWizard, TabContent } from 'vue-form-wizard';
// import 'vue-form-wizard/dist/vue-form-wizard.min.css';
import EnterpriseBaseInfo from './components/EnterpriseBaseInfo.vue';
import EnterpriseManagement from './components/EnterpriseManagement.vue';
import EnterprisePartner from './components/EnterprisePartner.vue';

export default {
  components: {
    EnterpriseBaseInfo,
    EnterpriseManagement,
    EnterprisePartner
    // FormWizard,
    // TabContent
  },
  data() {
    return {
      combinedFormData: {},
      activeTabIndex: 0
    };
  },
  methods: {
    onComplete() {
      /* TODO 后端交互
      将收集到的数据上传
      */
      alert('Yep, Well Done');
    },
    validate(ref) {
      return this.$refs[ref].validate();
    },
    onStepValidate(valid, stepFormData) {
      if (valid) {
        this.combinedFormData = { ...this.combinedFormData, ...stepFormData };
      }
    }
  }
};

</script>

<style scoped>

</style>
