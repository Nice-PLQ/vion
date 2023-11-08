import { mount } from '@vue/test-utils';
import VButton from '../../button/button.vue';
import VButtonGroup from '../button-group.vue';

describe('ButtonGroup', () => {
  const Component = {
    template: `
      <v-button-group>
        <v-button type="primary" size="large">主按钮</v-button>
        <v-button size="large">默认按钮</v-button>
      </v-button-group>
    `
  };
  test('按钮组', () => {
    const wrapper = mount(Component, {
      global: {
        components: { VButton, VButtonGroup }
      }
    });
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.findAllComponents('.v-button').length).toBe(2);
  });
});
