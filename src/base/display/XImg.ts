import { QImg } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { nativeEventProps, useRatioProps } from "../../compositions/props";

export const imgProps = {
  ...useRatioProps,
  ...nativeEventProps,
  src: String,
  srcset: String,
  sizes: String,
  alt: String,
  width: String,
  height: String,
  placeholderSrc: String,
  basic: Boolean,
  contain: Boolean,
  position: {
    type: String,
    default: "50% 50%",
  },
  noTransition: Boolean,
  fit: String as PropType<"cover" | "fill" | "contain" | "none" | "scale-down">,
  loading: String as PropType<"lazy" | "eager">,
  crossorigin: String as PropType<"anonymous" | "use-credentials">,
  imgClass: [Array, String, Object],
  imgStyle: Object,
  noSpinner: Boolean,
  noNativeMenu: Boolean,
  spinnerColor: String,
  spinnerSize: String,
  onLoad: Function as PropType<(currentSrc: string) => void>,
  onError: Function as PropType<(err: Error) => void>,
};

export default QImg as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof imgProps>>
>;
