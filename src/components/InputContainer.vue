<template>
  <div class="container">

    <div v-if="!isEditing">
      <input type="text" v-model="todo">
      <input type="submit" value="add" @click="storeTodo">
    </div>  

    <div v-else>
      <input type="text" v-model="todo">
      <input type="submit" value="update" @click="updateTodo">
    </div>
    
    <ul>
      <li
       v-for="(todo, index) in todos"
       :key="todo.id"
       class="listItem">{{ todo }}

      <button @click="editTodo(index, todo)">Edit</button>
      <button @click="deleteTodo(index)">Delet</button>

       </li>

    </ul>
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
      todo: "",
      todos: ["wash", "cook", "sing", "swimm"],
      selectedIndex: null,
      isEditing: false,
      

      
    }
  },


  methods: {

    storeTodo() {
      this.todos.push(this.todo)
      this.todo = ""
    },

    editTodo(index, todo) {
      this.todo = todo
      this.selectedIndex = index
      this.isEditing = true
    },

    updateTodo() {
      this.todos.splice(this.selectedIndex, 1, this.todo)
      this.todo = ""
      this.isEditing = false
    },

    deleteTodo(index) {
      this.todos.splice(index, 1)
    }

  }
};



</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
-->
<style scoped></style>
