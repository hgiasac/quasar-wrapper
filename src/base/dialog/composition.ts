import { Dialog, DialogChainObject, QDialogOptions } from "quasar";

import { XBtnProps } from "../button/XBtn";

export type XDialogOptions = QDialogOptions & {
  ok?: boolean | string | Partial<XBtnProps>;
  cancel?: boolean | string | Partial<XBtnProps>;
};

export const useConfirm = (opts: XDialogOptions): DialogChainObject => {
  return Dialog.create(opts);
};
