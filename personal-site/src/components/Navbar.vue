<template>
  <div class="root">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <el-menu
      class="fullscreen"
      mode="horizontal"
      @select="handleSelect"
      text-color="#050505"
      active-text-color="#ff9100"
      :default-active="activeIndex"
    >
      <el-menu-item index="1">
        <img alt="Logo" src="@/assets/me.png" />
      </el-menu-item>
      
      <el-menu-item index="2">About Me</el-menu-item>
      <el-menu-item index="3">Blog</el-menu-item>
      <el-menu-item index="4">Acomplishments</el-menu-item>
      <el-menu-item index="5">Publications</el-menu-item>
      <el-menu-item index="6">Contact Me</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['activeIndex'],
  data() {
    return {
    };
  },
  methods: {
      handleSelect(key) {

        var notImpl = function(current_comp,tab) {
          current_comp.$notify.error({
              title: tab,
              message: 'is not yet implemented!'
              });
        }

        switch(parseInt(key)) {
          case 1:
            notImpl(this, "Profile View");
            break;
          case 2:
            this.$router.push('/')
            break;
          case 3:
            notImpl(this, "Blog");
            break;
          case 4:
            this.$router.push('/acomplishments')
            break;
          case 5:
            notImpl(this, "Publications");
            break;
          case 6:
            notImpl(this, "Contact Page");
            break;
          default:            
        }
    },
  },
};
</script>

<style>
.root {
  display: flex;
}
img {
  width: auto;
  height: 50%;
  object-fit: cover;
}
.fullscreen {
  width: 100%;
}
.drop-down{
  font-family: Arial, Helvetica, sans-serif;
}
</style>