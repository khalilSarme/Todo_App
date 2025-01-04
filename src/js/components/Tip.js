const {
  ref
} = Vue;

export default {
  components: {},
  props: {
    tipNumber: Number,
    tipText: String
  },
  setup(props) {
    return {
      props
    }
  },
  template: `
  <div class="Tip">
  <b>Tip {{props.tipNumber}} : </b>
  <small> {{props.tipText}} </small>
  </div>`
};

  /*











*/