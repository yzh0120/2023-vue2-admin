<template>
    <el-header :height="heigth" class="default_header_2_el-header">
      <navbar></navbar>
    <tagsView></tagsView>
    </el-header>
</template>

<script>
import navbar from "./navbar";
import tagsView from "./tagsView";
export default {
  components: {
    navbar,
    tagsView,
  },
  data() {
    return {
      heigth: "84px",
    };
  },
}
</script>

<style lang="scss" scoped>
</style>
