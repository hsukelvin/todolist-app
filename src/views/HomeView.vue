<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-12">
        <div class="d-flex align-items-center mb-2">
          <span class="ms-auto fs-3">user : {{ userInfo.email }}</span>
          <button type="button" class="btn btn-primary rounded-0 ms-3" @click="signOut()">
            登出
          </button>
        </div>
        <div class="bg-light border-0 mb-2 p-3">
          <h1 class="text-center">Todo List</h1>
          <div class="d-flex">
            <input
              class="form-control rounded-0 border-0"
              type="text"
              placeholder="輸入待辦事項...."
              aria-label="default input example"
              ref="inputTodo"
              v-model="todo"
              @keyup.enter="addTodo()"
            >
            <button type="button" class="btn btn-primary rounded-0" @click="addTodo()">
              ADD
            </button>
          </div>
        </div>
        <ul class="list-group rounded-0">
          <li
            class="list-group-item bg-light border-0 mb-2 py-3 d-flex align-items-center"
            v-for="(todo, index) in todos"
            :key="index"
          >
            <label class="form-check-label" :for="`Checked_${index}`">
              <input
                class="form-check-input rounded-0 fs-4 mt-0"
                type="checkbox"
                :id="`Checked_${index}`"
                v-model="todo.completed"
              >
            </label>
            <span
              :class="{
                'text-decoration-line-through':todo.completed,
                'text-secondary':todo.completed
              }"
              class="fs-5 mx-5"
              v-if="!todo.isEdit"
            >
              {{ todo.name }}
            </span>
            <input
              class="form-control rounded-0 border-0 fs-5 mx-5"
              type="text"
              placeholder="編輯待辦事項...."
              aria-label="default input example"
              v-model="todo.name"
              v-if="todo.isEdit"
            >
            <button
              type="button" class="btn btn-success rounded-0 ms-auto" @click="editTodo(index)"
            >
              {{ todo.isEdit?'OK':'EDIT' }}
            </button>
            <button
              type="button" class="btn btn-danger rounded-0 ms-3" @click="deleteTodo(todo.id)"
            >
              DELETE
            </button>
          </li>
        </ul>
        <div class="bg-light p-3 d-flex align-items-center">
          <p class="fs-3 mb-0" v-if="todos.length > 0">目前有{{ todos.length }}項待辦事項</p>
          <p class="fs-3 mb-0" v-else>請新增待辦事項...</p>
          <button
            type="button"
            class="btn btn-danger rounded-0 ms-auto"
            @click="deleteAllTodo()"
            :disabled="todos.length === 0? true: false"
          >
            DELETE ALL
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth';

export default {
  data() {
    return {
      todo: '',
      todos: [],
    };
  },
  emits: ['check-login'],
  props: ['userInfo'],
  methods: {
    // get
    getTodos() {
      this.$http.get(`http://localhost:3000/v1/api/${this.$route.params.id}/todos`)
        .then((response) => {
          const { todos } = response.data;
          this.todos = todos;
          console.log(this.todos);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // post
    addTodo() {
      if (!this.todo.trim()) {
        this.$refs.inputTodo.focus();
        return;
      }

      const data = {
        data: {
          name: this.todo,
          completed: false,
        },
      };
      console.log(this.$route.params.id);
      this.$http.post(`http://localhost:3000/v1/api/${this.$route.params.id}/todo`, data)
        .then((response) => {
          console.log(response);
          this.todo = '';
          this.getTodos();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // delete
    deleteTodo(id) {
      this.$http.delete(`http://localhost:3000/v1/api/${this.$route.params.id}/todo/${id}`)
        .then((response) => {
          console.log(response);
          this.getTodos();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // deleteAll
    deleteAllTodo() {
      this.$http.delete(`http://localhost:3000/v1/api/${this.$route.params.id}/todos`)
        .then((response) => {
          console.log(response);
          this.getTodos();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // put
    editTodo(index) {
      if (!this.todos[index].name.trim()) return;
      this.todos[index].isEdit = !this.todos[index].isEdit;
    },
    // signout
    signOut() {
      const auth = getAuth();
      signOut(auth).then((res) => {
        // Sign-out successful.
        console.log(res);
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
    },
  },
  created() {
    // 判斷是否登入
    this.$emit('check-login');
  },
  mounted() {
    this.getTodos();
  },
};
</script>
