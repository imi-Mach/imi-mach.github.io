<template>
    <div class="block">
        <div>
            <Navbar activeIndex="6"></Navbar>
        </div>
    </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  export default {
    name: 'Contact',
    data() {
      return {
        reverse: true,
      };
    },
    components: {
        Navbar
    }
  };
</script>

<style>
.timeline{
    margin-top: 10px;
}
</style>