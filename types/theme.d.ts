export interface Theme {
  use(mode: string): void;
  auto(): void;
}

export const Theme: Theme;
