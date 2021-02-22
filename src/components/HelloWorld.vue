<template>
  <div>
    <label for="og-object">Original Object</label>
    <textarea id="og-object" v-model="prettyJson">
    </textarea>
  </div>
</template>

<script>
import segment from '@/data/segmentMess';

export default {
  name: 'HelloWorld',
  data() {
    return {
      segmentMess: segment,
    };
  },
  computed: {
    prettyJson() {
      return JSON.stringify(this.segmentMess, null, 1);
    },
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 100vh;
}
</style>
