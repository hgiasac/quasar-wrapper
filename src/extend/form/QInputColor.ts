import {
  QColor,
  QIcon,
  QInput,
  QPopupProxy,
  QInputProps,
  QColorProps,
} from "quasar";
import { defineComponent, h } from "vue";

import {
  StyleProps,
  TransactionProps,
  useTransitionProps,
} from "../../base/props";

export type QInputColorProps = Partial<QInputProps> &
  QColorProps &
  StyleProps &
  TransactionProps & {
    iconName?: string;
    placeholder?: string;
  };

export const useInputColorProps = {
  ...QInput.props,
  ...QColor.props,
  ...useTransitionProps,
  placeholder: String,
  iconName: {
    type: String,
    default: "colorize",
  },
};

export default defineComponent<QInputColorProps>({
  name: "QInputColor",
  props: useInputColorProps,
  setup(props, ctx) {
    props.iconName;
    const updateValue = (newValue: string) => {
      ctx.emit("update:modelValue", newValue);
    };

    return () => {
      const { transitionShow, transitionHide, iconName, ...remainProps } =
        props;
      return h(
        QInput,
        {
          ...remainProps,
          "onUpdate:modelValue": updateValue,
        },
        {
          append: () =>
            h(
              QIcon,
              {
                name: iconName,
                class: "cursor-pointer",
              },
              {
                default: () => [
                  h(
                    QPopupProxy,
                    {
                      transitionShow,
                      transitionHide,
                    },
                    {
                      default: () => [
                        h(QColor, {
                          ...remainProps,
                          "onUpdate:modelValue": updateValue,
                        }),
                      ],
                    }
                  ),
                ],
              }
            ),
        }
      );
    };
  },
});
