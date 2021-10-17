<template>
  <div class="container">
    <div class="notification is-primary">
      This container is <strong>centered</strong> on desktop and larger
      viewports.
    </div>
  </div>
</template>

<script>
export default {
  name: "InputContainer",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
-->
<style scoped></style>
