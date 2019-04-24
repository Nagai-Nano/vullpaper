<script>
export default {
  functional: true,
  props: {
    title: {
      type: String,
      required: true
    },
    font: {
      type: String,
      default: 'display-2'
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
    let dynamicClasses = '';

    if (data.class) {
      const classes = Object.entries(data.class);
      dynamicClasses = classes.length
        ? classes
            .filter(e => e[1])
            .map(e => e[0])
            .join(' ')
        : '';
    }

    const { title, light, lineSpace, font } = props;
    const textColor = light ? 'white--text' : 'dark--text';

    return h(
      'div',
      {
        class: `flex xs12 ${data.staticClass || ''} ${dynamicClasses}`,
        style: data.staticStyle
      },
      [
        h(
          'h1',
          {
            class: `${font} text-uppercase letter-spacing ${textColor}`,
            style: 'line-height: 1!important'
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
  margin: 8px 0;
}
</style>
