<template>
    <div class="block">
        <Navbar activeIndex="4"></Navbar>
        <div class="radio">
            Order: 
            <el-radio-group v-model="reverse">
            <el-radio :label="true">descending</el-radio>
            <el-radio :label="false">ascending</el-radio>
            </el-radio-group>
        </div>

        <el-timeline :reverse="reverse">
            <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp">
            {{activity.content}}
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  export default {
    name: 'AcompTimeLine',
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