interface Locale {
  use(lang: string, messages?: object): void;
  add(messages: object): void;
  change(lang: string): void;
  translate(key: string): string;
}

declare module 'vue/types/vue' {
  interface Vue {
    $locale: Locale;
  }
}

export const Locale: Locale;
