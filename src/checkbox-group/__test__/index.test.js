import { mount } from '@vue/test-utils';
import VCheckboxGroup from '../checkbox-group.vue';
import VCheckbox from '../../checkbox/checkbox.vue';

describe('CheckboxGroup', () => {
  test('多选组渲染', async () => {
    const wrapper = mount({
      template: `
        <v-checkbox-group>
          <v-checkbox value="a">多选A</v-checkbox>
          <v-checkbox value="b">多选B</v-checkbox>
        </v-checkbox-group>
      `
    }, {
      global: {
        components: { VCheckboxGroup, VCheckbox }
      }
    });
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.findAllComponents('.v-checkbox').length).toBe(2);
  });

  test('多选', async () => {
    const wrapper = mount({
      template: `
        <v-checkbox-group v-model="checked" vertical>
          <v-checkbox value="a">多选A</v-checkbox>
          <v-checkbox value="b">多选B</v-checkbox>
          <v-checkbox value="c">多选C</v-checkbox>
        </v-checkbox-group>
      `,
      data() {
        return {
          checked: []
        };
      }
    }, {
      global: {
        components: { VCheckboxGroup, VCheckbox }
      }
    });
    const checkbox = wrapper.findAll('.v-checkbox');
    await checkbox[0].trigger('click');
    await checkbox[1].trigger('click');
    expect(wrapper.vm.checked).toEqual(['a', 'b']);
    await checkbox[1].trigger('click');
    expect(wrapper.vm.checked).toEqual(['a']);

    expect(wrapper.classes()).toContain('v-checkbox-group_vertical');
  });

  test('禁用', async () => {
    const wrapper = mount({
      template: `
        <v-checkbox-group v-model="checked" disabled>
          <v-checkbox value="a">多选A</v-checkbox>
          <v-checkbox value="b">多选B</v-checkbox>
          <v-checkbox value="c">多选C</v-checkbox>
        </v-checkbox-group>
      `,
      data() {
        return {
          checked: []
        };
      }
    }, {
      global: {
        components: { VCheckboxGroup, VCheckbox }
      }
    });
    const checkbox = wrapper.findAll('.v-checkbox');
    await checkbox[0].trigger('click');
    await checkbox[1].trigger('click');
    expect(wrapper.vm.checked.length).toBe(0);
  });
});
