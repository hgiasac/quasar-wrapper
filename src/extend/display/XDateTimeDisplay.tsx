import { defineComponent, PropType } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  props: {
    value: {
      type: [String, Object] as PropType<string | Date>,
      required: true,
    },
    format: {
      type: String,
      default: "short",
    },
  },
  setup(props) {
    const i18n = useI18n();
    return () => (
      <span>{props.value ? i18n.d(props.value, props.format) : null}</span>
    );
  },
});
