<template>
  <button class="rounded" @click="counter++">{{ counter }}</button>
</template>
<script>
export default {
    data: () => ({
            counter: 0
    })
}
</script>
<style>
    .rounded{
        border-radius: 50%;
        padding: 25px;
    }
</style>