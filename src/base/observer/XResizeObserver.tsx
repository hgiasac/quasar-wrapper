import { QResizeObserver } from "quasar";
import { ComponentObjectPropsOptions, DefineComponent } from "vue";

export type ContainerSize = {
  height: number;
  width: number;
};

type XResizeObserverProps = {
  debounce: string | number;
  onResize: (size: ContainerSize) => void;
};

export default QResizeObserver as DefineComponent<
  ComponentObjectPropsOptions<XResizeObserverProps>
>;
