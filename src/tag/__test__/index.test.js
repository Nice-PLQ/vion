import { mount } from '@vue/test-utils';
import Tag from '../tag.vue';

describe('Tag', () => {
  test('渲染', async () => {
    const wrapper = mount(Tag, {
      slots: {
        default: '标签'
      },
      props: {
        backgroundColor: '#07C160',
        textColor: '#000',
      }
    });

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.text()).toBe('标签');

    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });
});
