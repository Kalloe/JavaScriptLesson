<template>
  <div class="container">
    <div class="form-field">
      <label for="og-object">Original Object</label>
      <textarea id="og-object" v-model="originalObject">
    </textarea>
    </div>
    <div class="form-field">
      <label for="new-object">Updated Object</label>
      <textarea id="new-object" v-model="updatedObject">
    </textarea>
    </div>
  </div>
</template>

<script>
import customerData from '@/data/segmentMess';

export default {
  name: 'HelloWorld',
  data() {
    return {
      customerData,
    };
  },
  computed: {
    originalObject() {
      return JSON.stringify(this.customerData, null, 1);
    },
    updatedObject() {
      const copyOfOriginalObject = { ...this.customerData };
      const newObject = copyOfOriginalObject.customers.map((customer) => ({
        name: `${customer.firstName} ${customer.lastName}`,
      }));
      return JSON.stringify(newObject, null, 1);
    },
  },
};
</script>

<style scoped>
textarea {
  height: 100vh;
  font-size: x-large;
}
.form-field {
  display: flex;
  flex-direction: column;
  width: 40%;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
label {
  font-size: x-large;
  font-weight: bold;
}
</style>
