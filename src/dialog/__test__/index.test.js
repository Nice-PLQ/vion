import { mount } from '@vue/test-utils';
import { next } from '../../../test';
import Dialog from '../dialog.vue';
import i18n from '../../locale';

describe('Dialog', () => {
  test('弹窗渲染', async () => {
    const wrapper = mount(Dialog, {
      props: {
        title: '标题',
        content: '内容',
        teleportDisabled: true,
      },
      global: {
        config: {
          globalProperties: {
            $dialog: Dialog,
            $locale: i18n,
          }
        }
      }
    });

    expect(wrapper.find('.v-dialog__title').text()).toBe('标题');
    expect(wrapper.find('.v-dialog__description').text()).toBe('内容');

    wrapper.setProps({ visible: true });
    await next();
    expect(wrapper.find('.v-popup__content').isVisible()).toBe(true);
    expect(wrapper.find('.v-dialog').element).toMatchSnapshot();
  });

  test('slot:default', () => {
    const wrapper = mount(Dialog, {
      slots: {
        default: '<span>内容</span>'
      },
      props: {
        visible: true,
        teleportDisabled: true,
      },
      global: {
        config: {
          globalProperties: {
            $dialog: Dialog,
            $locale: i18n,
          }
        }
      }
    });

    expect(wrapper.find('.v-dialog__description span').html()).toBe('<span>内容</span>');
  });

  test('弹窗按钮操作', () => {
    const fn = jest.fn();
    const wrapper = mount(Dialog, {
      props: {
        title: '标题',
        content: '内容',
        visible: true,
        callback: fn,
        teleportDisabled: true,
      },
      global: {
        config: {
          globalProperties: {
            $dialog: Dialog,
            $locale: i18n,
          }
        }
      }
    });

    wrapper.findAll('.v-dialog__btn')[0].trigger('click');
    expect(wrapper.emitted('cancel')).toBeTruthy();
    expect(fn).toHaveBeenCalled();
  });

  test('beforeClose: 关闭前的回调', () => {
    const fn = jest.fn();
    const wrapper = mount(Dialog, {
      props: {
        title: '标题',
        content: '内容',
        visible: true,
        beforeClose: fn,
        teleportDisabled: true,
      },
      global: {
        config: {
          globalProperties: {
            $dialog: Dialog,
            $locale: i18n,
          }
        }
      }
    });

    wrapper.findAll('.v-dialog__btn')[0].trigger('click');
    expect(wrapper.emitted('cancel')).toBeTruthy();
    expect(fn).toHaveBeenCalled();
  });

  test('自定义选择按钮', () => {
    const wrapper = mount(Dialog, {
      props: {
        title: '标题',
        content: '内容',
        visible: true,
        buttons: ['使用', '不使用', { text: '取消', color: '#FF596A' }],
        teleportDisabled: true,
      },
      global: {
        config: {
          globalProperties: {
            $dialog: Dialog,
            $locale: i18n,
          }
        }
      }
    });

    wrapper.find('.v-dialog__btn').trigger('click');
    expect(wrapper.emitted('click')[0][0]).toBe(0);
  });
});
