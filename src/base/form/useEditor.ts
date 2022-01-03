// https://next.quasar.dev/vue-components/editor
export type QEditorDefinition = {
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
export type QEditorDefinitions = Record<string, QEditorDefinition>;

export type QEditorToolbarItem =
  | string
  | (QEditorDefinition & {
      list: "no-icons" | "only-icons";
      options?: string[];
    });

export type QEditorRef = {
  toggleFullscreen: () => void;
  setFullscreen: () => void;
  exitFullscreen: () => void;
  runCmd: (cmd: string, param?: string, update?: boolean) => void;
  refreshToolbar: () => void;
  focus: () => void;
  getContentEl: () => Element;
};
