export default {
  namespaced: true,
  state: {
    isCollapse: false,
  },
  mutations: {
    m_setCollapse(state, val) {
      state.isCollapse = val;
    }
  },

  actions: {

  }
}
