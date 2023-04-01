import { VComponent } from './component';

type Options = {
  text?: string;
  duration?: number;
};

interface Loading {
  show(options?: string | Options): void;
  hide(): void;
  install(): void;
  Component: VComponent;
}

declare module 'vue/types/vue' {
  interface Vue {
    $loading: Loading;
  }
}

export const Loading: Loading;
