import { VComponent } from './component';

export class Picker extends VComponent {
  getValues(): any;
  setValues(values: any): void;
  getColumnSelectValue(columnIndex: number): any;
  setColumnSelectValue(columnIndex: number, value: any): void;
  setColumnValues(columnIndex: number, values: any, resetOffset: boolean): void;
}
