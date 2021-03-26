<template>
  <div>
    <el-form :model="formData" :rules="rules" ref="form" :label-position="labelPosition" label-width="80px">
        <el-row type="flex" justify="start" align="right" class="partner-info-input">
            <el-form-item  prop="partners" label-width='140px'>
              <span slot="label">主要合作伙伴</span>
              <el-input type="textarea" v-model="formData.partners" placeholder="请输入" clearable :style="{width: '90%'}">
              </el-input>
            </el-form-item>
        </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      labelPosition: 'right',
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
  methods: {
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate((valid) => {
          this.$emit('on-validate', valid, this.formData);
          resolve(valid);
        });
      });
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
.partner-info-input {
  /* background: lightseagreen; */
}

</style>
