<script>
export default {
  functional: true,
  props: {
    title: {
      type: String,
      required: true
    },
    light: {
      type: Boolean,
      default: false
    },
    lineSpace: {
      type: String,
      default: ''
    }
  },
  render(h, { props, data, children }) {
    const { title, light, lineSpace } = props;
    const textColor = light ? 'white--text' : 'dark--text';

    return h(
      'div',
      { class: `flex xs12 ${data.staticClass || ''}` },
      [
        h(
          'h1',
          {
            class: `display-2 text-uppercase letter-spacing ${textColor}`,
            style: 'line-height: 35px !important'
          },
          title
        ),
        h('div', { class: `line ${lineSpace}` })
      ],
      data,
      children
    );
  }
};
</script>

<style scoped>
.line {
  width: 2rem;
  background: #41b883;
  height: 4px;
  margin: 12px 0;
}
</style>
