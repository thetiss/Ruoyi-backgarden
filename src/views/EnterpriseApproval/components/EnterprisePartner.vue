<template>
  <div>
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
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        partners: undefined
      },
      rules: {
        partners: []
      }
    };
  },
  computed: {},
  watch: {},
  methods: {}
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
.partner-info-input {
  /* background: lightseagreen; */
}

</style>
