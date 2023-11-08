import { mount } from '@vue/test-utils';
import VInputGroup from '../input-group.vue';
import VInput from '../../input/input.vue';

describe('InputGroup', () => {
  test('渲染', () => {
    const wrapper = mount({
      template: `
        <v-input-group space="16px" label-align="center" label-width="70px">
          <v-input label="公司" placeholder="请输入公司" />
          <v-input label="职业" placeholder="请输入职业" />
          <v-input label="邮箱" placeholder="请输入邮箱" />
      </v-input-group>
      `
    }, {
      global: {
        components: { VInputGroup, VInput }
      }
    });
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.findAllComponents('.v-input').length).toBe(3);
  });
});
