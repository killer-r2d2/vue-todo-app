<template>
  <div class="container">
    <img  :src="image" alt="">
    <form>
      <label for="fname">Todo</label>
      <input @keypress.enter="addToList" type="text" id="todo" name="todo" />
    </form>
    <div>Message is: {{ message }}</div>
    <ul>
      <li
       v-for="todo in todos"
       :key="todo.id"
       class="listItem">{{ todo }}
       </li>

    </ul>
    <div class="cart">Todo's({{ cart }})</div>
    <button class="button" v-on:click="addToList">Add to list</button>
  </div>
</template>

<script>
export default {
  name: "InputContainer",
  props: {
    msg: String,
  },
  data() {
    return {
      image: './assets/logo.png',
      todoItem: "",
      cart: 0,
      todos: ["wash", "cook", "sing", "swimm"],
      message: "",
    }
  },
  methods: {
    addToList: function () {
      alert("addToList works");
    }
  }
};



</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
-->
<style scoped></style>
