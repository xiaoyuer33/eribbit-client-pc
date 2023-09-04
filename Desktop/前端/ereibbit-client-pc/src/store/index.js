import { createStore } from 'vuex'

//  A模块
const moduleA = {
    state : {
      username : 'moduleA'
    },
    getters : {
      newName (state) {
        return state.username + '!!!'
      }
    }
}
//  B模块
const moduleB = {
  namespaced : true,
  state : {
    username : 'moduleB'
  },
  getters : {
    newName (state) {
      return state.username + '!!!'
    }
  },
  mutations: {
    updateName (state) {
      return state.username = '五更琉璃'
    }
  },
  actions: {
    updateName (ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  },
}


export default createStore({
  modules : {
    moduleA,
    moduleB
  }
})




//  vue2.0 创建仓库 new Vuex.store（{}）
//  vue3.0 创建仓库 createStore（{}）
/* export default createStore({
  state: {
    username : '康纳'
  },
  getters: {
    newName (state) {
      return state.username + '真可爱'
    }
  },
  mutations: {
    updateName (state) {
      return state.username = '五更琉璃'
    }
  },
  actions: {
    updateName (ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  },
  modules: {
  },
}) */
