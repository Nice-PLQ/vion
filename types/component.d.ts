import Vue from 'vue';

export class VComponent {
  static name: string;
  static install(vue: typeof Vue): void;
}
