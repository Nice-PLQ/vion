type Action = 'confirm' | 'cancel';
type Done = () => void;
type Buttons = {
  text: string,
  color?: string,
};

type Options = {
  visible?: boolean,
  title?: string,
  content: string,
  buttons?: Array<Buttons | string>,
  showConfirmBtn?: boolean,
  showCancelBtn?: boolean,
  confirmBtnText?: string,
  cancelBtnText?: string,
  confirmBtnTextColor?: string,
  cancelBtnTextColor?: string,
  dangerouslyUseHTMLString?: boolean,
  callback?: (action: Action) => void,
  beforeClose?: (action: Action, done: Done) => void,
};

interface Dialog {
  show(options: Options): void;
  alert(options: Options): void;
  confirm(options: Options): void;
  close(): void;
  install(): void;
}

declare module 'vue/types/vue' {
  interface Vue {
    $dialog: Dialog;
  }
}

export const Dialog: Dialog;
