import { mount } from '@vue/test-utils';
import VListGroup from '../list-group.vue';
import VList from '../../list/list.vue';

describe('ListGroup', () => {
  test('渲染', () => {
    const wrapper = mount({
      template: `
        <v-list-group :border="false">
          <v-list title="列表标题" help="辅助标题" desc="详细说明"></v-list>
          <v-list title="列表标题" help="辅助标题" desc="详细说明"></v-list>
        </v-list-group>
      `
    }, {
      global: {
        components: { VListGroup, VList }
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
