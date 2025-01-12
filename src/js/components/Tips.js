import Tip from "./Tip.js";
const { ref } = Vue;
const tips = ref([
  {
    tipNumber: 1,
    tipText: "Press add button to create a new task .",
  },
  {
    tipNumber: 2,
    tipText: "Toggle check box to mark the task completed or not .",
  },
]);
export default {
  components: {
    Tip,
  },
  setup(props) {
    return {
      props,
      tips,
    };
  },
  template: `<div class="tips" ><Tip v-for="(tip,index) in tips" :key="index" :tipNumber="tip.tipNumber" :tipText="tip.tipText"/></div>`,
};

/*











*/
