<template>
  <!-- vue2.0需要根元素，vue3.0可以是代码片段 Fragment -->
  <div>
    <!-- 1、使用根模块 state 的数据 -->
    <p>{{ $store.state.username }}</p>
    <!-- 2、使用根模块 getters 的数据 -->
    <p>{{ $store.getters['newName'] }}</p>
    <!-- 3、修改mutations -->
    <button @click="mutationsFn">萌王</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name : 'app',
  setup () {
    //  使用vuex仓库
    const store = useStore()
    //  1、使用根模块 state 的数据
    console.log(store.state.username)
    //  2、使用根模块 getters 的数据
    console.log(store.getters['newName'])
    
    const mutationsFn = () => {
      //  3、提交mutations方法
      //  store.commit('updateName')
      //  4、提交actions方法
      store.dispatch('updateName')
    }

    return { mutationsFn }
  }
}
</script>

<style>

</style>