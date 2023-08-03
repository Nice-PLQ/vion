import { mount } from '@vue/test-utils';
import Tooltips from '../tooltips.vue';
import { next } from '../../../test/index';

describe('Tooltips', () => {
  test('渲染', async () => {
    const wrapper = mount(Tooltips, {
      slots: {
        default: '<button>按钮</button>',
      },
      props: {
        visible: false,
        text: '气泡提示的内容',
        placement: 'top-center'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('显示与隐藏', async () => {
    const wrapper = mount(Tooltips, {
      slots: {
        default: '<button>按钮</button>',
      },
      props: {
        visible: false,
        text: '气泡提示的内容',
        placement: 'top-center'
      }
    });
    expect(wrapper.find('.v-tooltips__inner').isVisible()).toBe(false);
    wrapper.setProps({
      visible: true,
    });
    await next();
    expect(wrapper.find('.v-tooltips__inner').isVisible()).toBe(true);
  });

  test('改变位置', async () => {
    const wrapper = mount(Tooltips, {
      slots: {
        default: '<button>按钮</button>',
      },
      props: {
        visible: true,
        text: '气泡提示的内容',
        placement: 'top-left'
      }
    });
    const wrapper1 = mount(Tooltips, {
      slots: {
        default: '<button>按钮</button>',
      },
      props: {
        visible: true,
        text: '气泡提示的内容',
        placement: 'top-right'
      }
    });
    const wrapper2 = mount(Tooltips, {
      slots: {
        default: '<button>按钮</button>',
      },
      props: {
        visible: true,
        text: '气泡提示的内容',
        placement: 'bottom-center'
      }
    });
    const wrapper3 = mount(Tooltips, {
      slots: {
        default: '<button>按钮</button>',
      },
      props: {
        visible: true,
        text: '气泡提示的内容',
        placement: 'bottom-left'
      }
    });
    const wrapper4 = mount(Tooltips, {
      slots: {
        default: '<button>按钮</button>',
      },
      props: {
        visible: true,
        text: '气泡提示的内容',
        placement: 'bottom-right'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper1.element).toMatchSnapshot();
    expect(wrapper2.element).toMatchSnapshot();
    expect(wrapper3.element).toMatchSnapshot();
    expect(wrapper4.element).toMatchSnapshot();
  });
});
