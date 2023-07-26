<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: '',
    };
  },
  async created() {
    const response = await axios.get('http://localhost:3000/hello/world');
    this.message = response.data.message;
  },
};
</script>