<script>
export default {
  functional: true,
  props: {
    size: {
      type: String,
      default: 'small'
    }
  },
  render(h, { props, data, children }) {
    const { size } = props;
    const numSize = size === 'large' ? 100 : size === 'medium' ? 80 : 60;
    const spinnerSize = numSize / 14 + 'rem';

    return h(
      'div',
      {
        class: 'p-relative',
        style: { 'min-height': '10.7rem', ...data.staticStyle }
      },
      [
        h(
          'div',
          {
            class: 'p-absolute atom-spinner overflow-hidden',
            style: { width: spinnerSize, height: spinnerSize }
          },
          [
            h('div', { class: 'p-relative d-block fill-width fill-height' }, [
              Array.from({ length: 3 }).map((_, i) =>
                h('div', {
                  class: 'spinner-line p-absolute fill-width fill-height',
                  style: {
                    'border-left-width': `calc(${numSize}px / 25)`,
                    'border-top-width': `calc(${numSize}px / 25)`
                  }
                })
              ),
              h(
                'div',
                {
                  class: 'spinner-circle d-block p-absolute',
                  style: `font-size': calc(${numSize}px * 0.24)`
                },
                '●'
              )
            ])
          ]
        )
      ]
    );
  }
};
</script>

<style scoped>
.atom-spinner,
.atom-spinner * {
  box-sizing: border-box;
}

.atom-spinner,
.atom-spinner .spinner-circle {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.atom-spinner .spinner-circle {
  color: #41b883;
}

.atom-spinner .spinner-line {
  border-radius: 50%;
  animation-duration: 1s;
  border-left-color: #41b883;
  border-left-style: solid;
  border-top-style: solid;
  border-top-color: transparent;
}

.atom-spinner .spinner-line:nth-child(1) {
  animation: atom-spinner-animation-1 1s linear infinite;
  transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
}

.atom-spinner .spinner-line:nth-child(2) {
  animation: atom-spinner-animation-2 1s linear infinite;
  transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
}

.atom-spinner .spinner-line:nth-child(3) {
  animation: atom-spinner-animation-3 1s linear infinite;
  transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
}

@keyframes atom-spinner-animation-1 {
  100% {
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
  }
}

@keyframes atom-spinner-animation-2 {
  100% {
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
  }
}

@keyframes atom-spinner-animation-3 {
  100% {
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
  }
}
</style>
