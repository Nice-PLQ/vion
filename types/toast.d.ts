type Options = {
  message: string;
  type?: string;
  duration?: number;
  safe?: boolean
};

interface Toast {
  (options: Options): void;
  success(options: string | Options): void;
  info(options: string | Options): void;
  error(options: string | Options): void;
  install(): void;
}

declare module 'vue/types/vue' {
  interface Vue {
    $toast: Toast;
  }
}

export const Toast: Toast;
