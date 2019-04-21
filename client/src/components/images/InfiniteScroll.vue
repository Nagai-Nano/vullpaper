<script>
export default {
  props: {
    hasMore: {
      type: Boolean,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    scrollHandler() {
      if (
        this.hasMore &&
        !this.loading &&
        window.innerHeight + window.pageYOffset >=
          document.body.offsetHeight - 200
      ) {
        this.$emit('loadmore');
      }
    }
  },
  render() {
    return this.$slots.default;
  },
  created() {
    window.addEventListener('scroll', this.scrollHandler);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler);
  }
};
</script>
