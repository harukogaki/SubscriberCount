<template>
    <div id='subscriber-count'>
         Live Subscriber Count
        <div> {{count}} </div>
    </div>
</template>

<script>
export default {
    name: 'subscriber-count',
    props: {
       count: String
   }
}
</script>

<style scoped>

</style>
