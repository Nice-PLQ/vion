import { mount } from '@vue/test-utils';
import Avatar from '../avatar.vue';

describe('Avatar', () => {
  const wrapper = mount(Avatar, {
    props: {
      url: 'https://path/to/avatar/image.jpg',
      size: '36px'
    }
  });

  test('单一头像', () => {
    expect(wrapper.classes()).not.toContain('v-avatar_2');
    expect(wrapper.element.style.fontSize).toBe('36px');
    expect(wrapper.find('img').attributes('src')).toBe('https://path/to/avatar/image.jpg');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('头像组合', async () => {
    await wrapper.setProps({
      url: [
        'https://path/to/avatar/image_1.jpg',
        'https://path/to/avatar/image_2.jpg',
        'https://path/to/avatar/image_3.jpg',
      ]
    });
    expect(wrapper.classes()).toContain('v-avatar_3');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('click事件触发', async () => {
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  test('轮播头像', async () => {
    const wrapper = mount(Avatar, {
      props: {
        url: [
          'https://path/to/avatar/image_1.jpg',
          'https://path/to/avatar/image_2.jpg',
          'https://path/to/avatar/image_3.jpg',
        ],
        size: '36px',
        carousel: true,
      },
    });
    expect(wrapper.classes()).toContain('v-avatar_carousel');
    expect(wrapper.element).toMatchSnapshot();
  });
});
