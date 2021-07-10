import { QField } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
} from "vue";

import { useFieldProps } from "../../compositions/form";

export default QField as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof useFieldProps>>
>;
