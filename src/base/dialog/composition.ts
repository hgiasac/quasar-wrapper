import { Dialog, DialogChainObject, QDialogOptions } from "quasar";

import { XButtonProps } from "../button/XBtn";

export type XDialogOptions = QDialogOptions & {
  ok?: boolean | string | Partial<XButtonProps>;
  cancel?: boolean | string | Partial<XButtonProps>;
};

export const useConfirm = (opts: XDialogOptions): DialogChainObject => {
  return Dialog.create(opts);
};
