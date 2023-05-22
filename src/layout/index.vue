<template>
  <div>layout</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
//获取路由器
let $router = useRouter();

onMounted(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    $router.push("/login");
  }
});
</script>

<style lang="scss" scoped></style>
