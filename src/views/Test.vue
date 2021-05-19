<template>
  <div>
    {{state.count}}
    测试：{{count1}}

  </div>
</template>

<script lang="ts">
// reactive 相当于 Vue 2.x 中的 Vue.observable()
import { defineComponent, reactive, onMounted } from "vue";
// ref 是 vue 3.0 的一个重大变化，其作用为创建响应式的值
import { ref } from "vue";

// 导出依然是个对象，不过对象中只有一个 setup 函数
export default defineComponent({
  name: "Test",
  components: {},
  setup() {
    const state = reactive({
      count: 2,
    });
    const count1 = ref(0);
    onMounted(() => {
      state.count++;
    });
    return {
      state,
      count1,
    };
  },
});
</script>

<style>
</style>