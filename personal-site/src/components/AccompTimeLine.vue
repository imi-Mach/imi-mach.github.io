<template>
    <div class="block">
        <div>
            <Navbar activeIndex="4"></Navbar>
        </div>
        <div class="timeline"> 
            <el-timeline>
                <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card class="card">
                    <h4>Update Github template</h4>
                    <p>Max committed 2022/23/12 20:46</p>
                </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card class="card">
                    <h4>Update Github template</h4>
                    <p>Max committed 2022/23/12 20:46</p>
                </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card class="card">
                    <h4>Update Github template</h4>
                    <p>Max committed 2022/23/12 20:46</p>
                </el-card>
                </el-timeline-item>
            </el-timeline>
            
        </div>
    </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  export default {
    name: 'AccompTimeLine',
    data() {
      return {
        reverse: true,
        activities: [{
          content: 'Event start',
          timestamp: '2018-04-15'
        }, {
          content: 'Approved',
          timestamp: '2018-04-13'
        }, {
          content: 'Success',
          timestamp: '2018-04-11'
        }]
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
.card{
  margin: 10px 50px;
}
</style>