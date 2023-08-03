import { mount } from '@vue/test-utils';
import VRow from '..';
import VCol from '../../col';

describe('Row', () => {
  test('渲染', () => {
    const wrapper = mount({
      template: `
        <v-row justify="center" align="center" gutter="8">
          <v-col span="6">span: 6</v-col>
          <v-col span="6" offset="16">span: 6</v-col>
          <v-col span="6">span: 6</v-col>
        </v-row>
      `,
    }, {
      global: {
        components: { VRow, VCol }
      }
    });
    expect(wrapper.element).toMatchSnapshot();
    const { classList } = wrapper.find('.v-row').element;
    expect(classList).toContain('v-row_justify-center');
    expect(classList).toContain('v-row_align-center');
    expect(classList).toContain('v-row_justify-center');

    const cols = wrapper.findAll('.v-col');
    for (let i = 0; i < cols.length; i++) {
      expect(cols[i].element.classList).toContain('v-col_span-6');
      if (i === 0) {
        expect(cols[i].element.style.paddingLeft).not.toBe('8px');
      } else {
        expect(cols[i].element.style.paddingLeft).toBe('8px');
      }
    }
  });
});
