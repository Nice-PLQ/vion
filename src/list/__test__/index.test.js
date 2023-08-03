import { mount } from '@vue/test-utils';
import List from '../list.vue';

describe('List', () => {
  const fn = jest.fn();
  const wrapper = mount(List, {
    props: {
      title: '标题',
      help: '辅助标题',
      desc: '详细说明',
      arrowDirection: 'right'
    },
    attrs: {
      onClick: fn
    }
  });

  test('渲染', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('slots', () => {
    const left = '<span>left</span>';
    const right = '<span>right</span>';
    const title = '<span>title</span>';
    const wrapper = mount(List, {
      slots: { left, right, title }
    });
    expect(wrapper.find('.v-list__title-wrap').html()).toContain(left);
    expect(wrapper.find('.v-list__title-wrap').html()).toContain(title);
    expect(wrapper.find('.v-list__content').html()).toContain(right);
  });
});
