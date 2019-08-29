<template>
  <div class="tekst">
      <p>Test Vue.js</p>
      <button class="rounded" @click="counter++">{{ counter }}</button>
  </div>
</template>
<script>
export default {
    data: () => ({
            counter: 0
    })
}
</script>
<style lang="scss">
    .tekst {
        outline: 1px solid red;
        p {
            font-size: 50px;
        }
    }
    .rounded{
        border-radius: 50%;
        padding: 25px;
    }
</style>