const {
  ref
} = Vue;

export default {
  components: {},
  props: {
    todoCompo: Object,
    k: Number,
    fe: Object,
  },
  setup(props) {
    return {
      props,
    };
  },
  template: `<div class="todo" >
  <input type="checkbox" name="completed" @change="props.fe.setCompleted(k)" :checked="props.todoCompo.completed" />
  <span>{{props.todoCompo.completed ? 'Completed' : 'Not Completed'}}</span>
  <p class="text">
  {{ props.todoCompo.todoText }}
  </p>
  <button class="button delBtn" type="button" @click="props.fe.deleteTask(k)">
  <span>Delete</span>
  </button>
  </div>`,
};