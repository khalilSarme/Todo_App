const { ref } = Vue;

export default {
  components: {},
  props: {
    state: String,
    msg: String,
    s: Function,
  },
  setup(props) {
    return {
      props,
    };
  },
  template: `<div class="notification" :state="props.state">
  <button class="button closeBtn" type="button" @click="props.s">
  <span class="sp sp1"></span>
  <span class="sp sp2"></span>
  </button>
  <p>
  {{ props.msg }}
  </p>
  </div>`,
};

/*








*/
