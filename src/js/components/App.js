import Todos from "./Todos.js";
import Tips from "./Tips.js";
import TodoWindow from "./TodoWindow.js";
import Notification from "./Notification.js";

const { ref } = Vue;

export default {
  components: {
    Todos,
    Tips,
    Notification,
    TodoWindow,
  },
  setup(props) {
    const todo = ref("");
    const todos = ref([]);
    const tipsPopUp = ref(false);
    const todosContainer = ref(true);
    const writeTodo = ref(false);
    const msgBox = ref(false);
    const msg = ref({});

    const showMsg = (state, msgText) => {
      closeMsg();
      msgBox.value = true;
      msg.value = {
        text: msgText,
        type: state,
      };
      setTimeout(() => {
        closeMsg();
        clearTimeout();
      }, 5000);
    };
    const closeMsg = () => {
      msg.value = {};
      msgBox.value = false;
    };

    const create = () => {
      todosContainer.value = false;
      writeTodo.value = true;
    };
    const saveTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos.value));
    };
    const save = (text) => {
      if (text.trim().length < 3) {
        showMsg(
          "fail",
          "Invalid text entered. Please, enter 3 normal characters at least"
        );
        todo.value = "";
        return;
      }
      const task = {
        todoText: text.trim(),
        completed: false,
      };
      todos.value.push(task);
      saveTodos();
      writeTodo.value = false;
      todosContainer.value = true;
      showMsg("success", "New todo created Successfully.");
    };
    const deleteTask = (index) => {
      todos.value.splice(index, 1);
      if (todos.value.length === 0) {
        showMsg("success", "Todos List cleared successfully.");
        localStorage.clear();
      } else {
        saveTodos();
      }
    };
    const setCompleted = (index) => {
      todos.value[index].completed = !todos.value[index].completed;
      saveTodos();
    };
    const loadeditems = JSON.parse(localStorage.getItem("todos")) || [];
    if (loadeditems.length !== 0) {
      todos.value = loadeditems;
    }

    return {
      props,
      showMsg,
      msg,
      closeMsg,
      todosContainer,
      loadeditems,
      create,
      save,
      deleteTask,
      saveTodos,
      setCompleted,
      todo,
      todos,
      tipsPopUp,
      writeTodo,
      msgBox,
    };
  },
  template: `<h1>Todo List</h1><Notification :msg="msg.text" :state="msg.type" v-show="msgBox" :s='closeMsg' />
  <Tips v-show="todos.length === 0 "/>
  <Todos :list="todos" :f="{create,deleteTask,setCompleted}" v-show="todosContainer" />
  <TodoWindow :todoTextContent="todo" :f="save" :state="writeTodo" />`,
};
/*
















*/
