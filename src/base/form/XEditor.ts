import { QEditor } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import {
  ClassProp,
  useDarkProps,
  useFullScreenProps,
  StyleProp,
} from "../../compositions/props";

// https://next.quasar.dev/vue-components/editor
export type XEditorDefinition = {
  label?: string;
  tip?: string;
  htmlTip?: string;
  icon?: string;
  key?: number;
  handler?: () => void;
  cmd?: string;
  param?: string;
  disable?: boolean | (() => boolean);
  type?: "null" | "no-state";
  fixedLabel?: string;
  fixedIcon?: string;
  highlight?: string;
};
export type XEditorDefinitions = Record<string, XEditorDefinition>;

export type XEditorToolbarItem =
  | string
  | (XEditorDefinition & {
      list: "no-icons" | "only-icons";
      options?: string[];
    });

export type XEditorRef = {
  toggleFullscreen: () => void;
  setFullscreen: () => void;
  exitFullscreen: () => void;
  runCmd: (cmd: string, param?: string, update?: boolean) => void;
  refreshToolbar: () => void;
  focus: () => void;
  getContentEl: () => Element;
};

export const useEditorProps = {
  ...useDarkProps,
  ...useFullScreenProps,
  modelValue: String,
  readonly: Boolean,
  disable: Boolean,
  minHeight: String,
  maxHeight: String,
  height: String,
  definitions: Object as PropType<XEditorDefinitions>,
  fonts: Object as PropType<Record<string, string>>,
  placeholder: String,
  toolbar: {
    type: Array as PropType<string[][]>,
  },
  toolbarColor: String,
  toolbarBg: String,
  toolbarTextColor: String,
  toolbarToggleColor: {
    type: String,
    default: "primary",
  },
  toolbarOutline: Boolean,
  toolbarPush: Boolean,
  toolbarRounded: Boolean,
  paragraphTag: {
    type: String as PropType<"p" | "div">,
  },
  contentStyle: Object as PropType<StyleProp>,
  contentClass: [Object, Array, String] as PropType<ClassProp>,

  square: Boolean,
  flat: Boolean,
  dense: Boolean,
};
export default QEditor as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof useEditorProps>>
>;
