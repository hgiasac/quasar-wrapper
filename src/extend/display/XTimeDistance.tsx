import { formatDistance, isDate } from "date-fns/esm";
import vi from "date-fns/locale/vi";
import { computed, defineComponent, PropType } from "vue";
import { useI18n } from "vue-i18n";

import { styleProps } from "../../mixins/props";

export default defineComponent({
  name: "XText",
  props: {
    ...styleProps,
    from: {
      type: [String, Array, Object] as PropType<string | Date | number>,
      required: true,
    },
    to: {
      type: [String, Array, Object] as PropType<string | Date | number>,
      default: () => new Date(),
    },
    includeSeconds: Boolean,
    addSuffix: Boolean,
  },
  setup(props, ctx) {
    const i18n = useI18n();
    const distance = computed(() => {
      if (!props.from || !props.to) {
        return "N/A";
      }
      const from = isDate(props.from)
        ? (props.from as Date)
        : new Date(props.from);
      const to = isDate(props.to) ? (props.to as Date) : new Date(props.to);
      return formatDistance(from, to, {
        includeSeconds: props.includeSeconds,
        addSuffix: props.addSuffix,
        locale: i18n.locale.value === "vi" ? vi : undefined,
      });
    });

    return () => (
      <span class={props.class} style={props.style} {...ctx.attrs}>
        {distance.value}
      </span>
    );
  },
});
