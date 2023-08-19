<template>
    <el-main class="default_2_el-main">
      <el-scrollbar class="default_main_2_shu_el-scrollbar" ref="layoutScrollbarRef">
        <div ref="keepAliveContainer" class="app_main" id="app_main">
          <transition name="fade-transform" mode="out-in">
            <keep-alive>
              <router-view :key="key" />
            </keep-alive>
            <!-- <router-view v-else></router-view> -->
          </transition>
        </div>
      </el-scrollbar>
    </el-main>
</template>

<script>
export default {
  data() { 
    return {}
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
