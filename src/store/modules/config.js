export default {
  namespaced: true,
  state: {
    isCollapse: false,
    alert401: false,
    dataItem:[],//数据字典
  },
  mutations: {
    m_setCollapse(state, val) {
      state.isCollapse = val;
    }
  },

  actions: {

  }
}
