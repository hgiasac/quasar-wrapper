import { XBtnProps } from "base/button";
import { QCarousel } from "quasar";
import {
  ComponentObjectPropsOptions,
  DefineComponent,
  ExtractPropTypes,
  PropType,
} from "vue";

import {
  useDarkProps,
  useFullScreenProps,
  usePanelProps,
} from "../../compositions";
import { Position, TransitionType } from "../../types";

export type XCarouselRef = {
  toggleFullscreen: () => void;
  setFullscreen: () => void;
  exitFullscreen: () => void;
  next: () => void;
  previous: () => void;
  goTo: (panelName: string | number) => void;
};

export type XCarouselNavigationIconScope = {
  index: number;
  maxIndex: number;
  name: string | number;
  active: boolean;
  btnProps: XBtnProps;
  onClick: (evt?: MouseEvent) => void;
};
export type XCarouselSlots = {
  default?: () => JSX.Element;
  control?: () => JSX.Element;
  "navigation-icon"?: (scope: XCarouselNavigationIconScope) => JSX.Element;
};

const props = {
  ...useDarkProps,
  ...usePanelProps,
  ...useFullScreenProps,
  transitionPrev: String as PropType<TransitionType>,
  transitionNext: String as PropType<TransitionType>,

  height: String,
  padding: Boolean,

  controlColor: String,
  controlTextColor: String,
  controlType: {
    type: String as PropType<
      "regular" | "flat" | "outline" | "push" | "unelevated"
    >,
  },

  autoplay: [Number, Boolean],

  arrows: Boolean,
  prevIcon: String,
  nextIcon: String,

  navigation: Boolean,
  navigationPosition: String as PropType<Position>,
  navigationIcon: String,
  navigationActiveIcon: String,

  thumbnails: Boolean,
  onBeforeTransition: Function as PropType<
    (newVal: string | number, oldVal: string | number) => void
  >,
  onTransition: Function as PropType<
    (newVal: string | number, oldVal: string | number) => void
  >,
};

export default QCarousel as DefineComponent<
  ComponentObjectPropsOptions<ExtractPropTypes<typeof props>>
>;
