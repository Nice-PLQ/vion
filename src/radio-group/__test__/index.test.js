import { mount } from '@vue/test-utils';
import VRadioGroup from '../radio-group.vue';
import VRadio from '../../radio/radio.vue';

describe('RadioGroup', () => {
  test('单选框组渲染', async () => {
    const wrapper = mount({
      template: `
        <v-radio-group>
          <v-radio value="a">单选A</v-radio>
          <v-radio value="b">单选B</v-radio>
        </v-radio-group>
      `
    }, {
      global: {
        components: { VRadioGroup, VRadio }
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('单选', async () => {
    const wrapper = mount({
      template: `
          <v-radio-group v-model="checked" vertical>
            <v-radio value="a">单选A</v-radio>
            <v-radio value="b">单选B</v-radio>
            <v-radio value="c">单选C</v-radio>
          </v-radio-group>
        `,
      data() {
        return {
          checked: ''
        };
      }
    }, {
      global: {
        components: { VRadioGroup, VRadio }
      }
    });
    const radio = wrapper.findAll('.v-radio');
    await radio[0].trigger('click');
    expect(wrapper.vm.checked).toBe('a');
    await radio[1].trigger('click');
    expect(wrapper.vm.checked).toBe('b');

    expect(wrapper.classes()).toContain('v-radio-group_vertical');
  });

  test('禁用', async () => {
    const wrapper = mount({
      template: `
          <v-radio-group v-model="checked" disabled>
            <v-radio value="a">单选A</v-radio>
            <v-radio value="b">单选B</v-radio>
            <v-radio value="c">单选C</v-radio>
          </v-radio-group>
        `,
      data() {
        return {
          checked: ''
        };
      }
    }, {
      global: {
        components: { VRadioGroup, VRadio }
      }
    });
    const radio = wrapper.findAll('.v-radio');
    await radio[1].trigger('click');
    expect(wrapper.vm.checked).toBe('');
  });
});
