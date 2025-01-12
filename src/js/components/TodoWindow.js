const { ref } = Vue;
export default {
  components: {},
  props: {
    todoTextContent: String,
    f: Function,
    state: Boolean,
  },
  setup(props) {
    return {
      props,
    };
  },
  template: `<div class="WriteTodoWindow" v-show="props.state" >
  <form class="frm" method="get">
  <label for="todoContent">To do</label>
  <textarea name="todoContent" id="todoContent" placeholder="Type a to-do here ..." v-model="props.todoTextContent"></textarea>
  <button class="button SaveBtn" type="button" @click="props.f(props.todoTextContent)">
  <span>Save To-Do</span>
  </button>
  </form>
  </div>`,
};

/*





















*/
