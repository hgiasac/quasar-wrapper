import { QTree } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import { useDarkProps } from "../compositions/props";

export type TreeFilterMethod<T = unknown> = (
  node: T,
  filter: string
) => boolean;

export type TreeSlotScope<T = unknown, K = string> = {
  expanded: boolean;
  ticked: boolean;
  tree: T;
  node: T;
  key: K;
  color: string;
  dark: boolean;
};

export type TreeLazyLoadPayload<T = unknown> = {
  node: T;
  key: string;
  done: (children: T[]) => void;
  fail: () => void;
};

export type TreeNodeProps<M = unknown> = {
  id?: string | number;
  nodeKey: string;
  label: string;
  icon?: string;
  iconColor?: string;
  img?: string;
  avatar?: string;
  children?: TreeNodeProps<M>[];
  disabled?: boolean;
  expandable?: boolean;
  selectable?: boolean;
  handler?: (node: TreeNodeProps<M>) => void;
  tickable?: boolean;
  noTick?: boolean;
  tickStrategy?: string;
  lazy?: boolean;
  header?: string;
  body?: string;
  model?: M;
};

const xTreeProps = {
  ...useDarkProps,
  nodes: {
    type: Array,
    required: true,
  },
  nodeKey: {
    type: String,
    required: true,
  },
  labelKey: {
    type: String,
    default: "label",
  },
  childrenKey: {
    type: String,
    default: "children",
  },

  color: String,
  controlColor: String,
  textColor: String,
  selectedColor: String,
  icon: String,
  tickStrategy: {
    type: String as PropType<"none" | "strict" | "leaf" | "leaf-filtered">,
    default: "none",
  },
  ticked: Array, // sync
  expanded: Array, // sync
  selected: {}, // sync

  defaultExpandAll: Boolean,
  accordion: Boolean,

  filter: String,
  filterMethod: {
    type: Function as PropType<TreeFilterMethod>,
  },

  duration: Number,
  noConnectors: Boolean,

  noNodesLabel: String,
  noResultsLabel: String,
  onLazyLoad: Function as PropType<(details: TreeLazyLoadPayload) => void>,
  onAfterShow: Function as PropType<() => void>,
  onAfterHide: Function as PropType<() => void>,
};

export default QTree as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof xTreeProps>>
>;
