import Todo from "./Todo.js";

const { ref } = Vue;

export default {
  components: {
    Todo,
  },
  props: {
    list: Object,
    f: Object,
  },
  setup(props) {
    return {
      props,
    };
  },
  template: `<div class="container" >
  <Todo v-for="(todo, index) in props.list" :key="index" :k="index" :todoCompo="todo" :fe="props.f" />
  <button class="button addBtn" type="button" @click="props.f.create()">
  <span class="sp sp1"></span>
  <span class="sp sp2"></span>
  </button>
  </div>`,
};

/*



























*/
