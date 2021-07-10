import { QVideo } from "quasar";
import {
  DefineComponent,
  ComponentObjectPropsOptions,
  ExtractPropTypes,
} from "vue";

import { useRatioProps } from "../../compositions/props";

const props = {
  ...useRatioProps,

  src: {
    type: String,
    required: true,
  },
};

export default QVideo as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
