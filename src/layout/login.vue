<template>
  <div class="layout-login">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'LayoutLogin'
}
</script>
<style lang="scss" scoped>
.layout-login {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
//   opacity: 0.3;
  background: radial-gradient(rgb(210, 241, 223), rgb(211, 215, 250), rgb(186, 216, 244)) 0% 0% / 400% 400%;
}
</style>
