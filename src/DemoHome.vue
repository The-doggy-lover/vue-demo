<template>
  <div class="demo-home">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
    <button @click="clickMe">Click Me!</button>
  </div>
</template>

<script>
export default {
  name: "DemoHome",
  data() {
    return {
      title: "Welcome to Vue Demo!",
      subtitle: "This is a separate project from PetMyPet."
    };
  },
  methods: {
    clickMe() {
      this.subtitle = "You clicked the button! 🎉";
    }
  }
};
</script>

<style scoped>
.demo-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f9f9f9;
}

h1 {
  color: #3b82f6;
  margin-bottom: 10px;
}

p {
  margin-bottom: 20px;
  font-size: 18px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #2563eb;
}
</style>
