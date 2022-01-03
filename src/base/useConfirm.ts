import { Dialog, DialogChainObject, QDialogOptions, QBtnProps } from "quasar";

export type DialogOptions = QDialogOptions & {
  ok?: boolean | string | Partial<QBtnProps>;
  cancel?: boolean | string | Partial<QBtnProps>;
};

export const useConfirm = (opts: DialogOptions): DialogChainObject => {
  return Dialog.create(opts);
};
