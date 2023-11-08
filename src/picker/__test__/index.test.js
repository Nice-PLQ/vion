import { mount } from '@vue/test-utils';
import Picker from '..';
import { years, months, days } from '../demo/data';
import { triggerDrag, next } from '../../../test';
import i18n from '../../locale';
import VPopup from '../../popup';

describe('Picker', () => {
  test('列的数量', async () => {
    const wrapper = mount(Picker, {
      props: {
        columns: [years, months, days],
        teleportDisabled: true,
      },
      global: {
        config: {
          globalProperties: {
            $locale: i18n,
          }
        },
        components: {
          VPopup
        },
      }
    });
    expect(wrapper.findAll('.v-picker-list')).toHaveLength(3);
    expect(wrapper.find('.v-picker').element).toMatchSnapshot();

    wrapper.setProps({ columns: [[{ label: '2019年' }, ...years], months] });
    await next();
    expect(wrapper.findAll('.v-picker-list')).toHaveLength(2);
  });

  test('列显示的个数', async () => {
    const wrapper = mount(Picker, {
      props: {
        teleportDisabled: true,
        columns: years,
        showItemCount: 7
      },
      global: {
        config: {
          globalProperties: {
            $locale: i18n,
          }
        },
        components: {
          VPopup
        },
      }
    });
    await next();
    expect(wrapper.find('.v-picker__content').element.style.height).toBe(`${7 * 46}px`);
  });

  test('隐藏取消按钮', () => {
    const wrapper = mount(Picker, {
      props: {
        teleportDisabled: true,
        columns: years,
        showCancel: false
      },
      global: {
        config: {
          globalProperties: {
            $locale: i18n,
          }
        },
        components: {
          VPopup
        }
      }
    });
    expect(wrapper.findAll('.v-picker__btn')).toHaveLength(1);
    expect(wrapper.findAll('.v-picker__btn')[0].text()).toBe('确定');
  });

  test('默认选中', async () => {
    const wrapper = mount(Picker, {
      props: {
        teleportDisabled: true,
        columns: years
      },
      global: {
        config: {
          globalProperties: {
            $locale: i18n,
          }
        },
        components: {
          VPopup
        },
      }
    });
    const selectedValue = { label: '2025年' };
    wrapper.setProps({ selectedValue });
    await next();
    expect(wrapper.vm.getValues()).toEqual(selectedValue);
  });

  test('拖动列', async () => {
    const wrapper = mount(Picker, {
      props: {
        teleportDisabled: true,
        columns: years,
        immediateChange: true
      },
      global: {
        config: {
          globalProperties: {
            $locale: i18n,
          }
        },
        components: {
          VPopup
        },
      }
    });
    const el = wrapper.find('.v-picker-column');
    triggerDrag(el, 0, -500);
    el.trigger('transitionend');
    expect(wrapper.emitted('change')[0][1]).toEqual({ label: '2029年' });
  });

  test('change && cancel && ok事件的触发', async () => {
    const wrapper = mount(Picker, {
      props: {
        teleportDisabled: true,
        columns: years,
        visible: true
      },
      global: {
        config: {
          globalProperties: {
            $locale: i18n,
          }
        },
        components: {
          VPopup
        },
      }
    });
    wrapper.findAll('.v-picker-column__item')[1].trigger('click');
    await next();
    expect(wrapper.emitted('change')).toBeTruthy();

    const btn = wrapper.findAll('.v-picker__btn');
    btn[0].trigger('click');
    expect(wrapper.emitted('cancel')).toBeTruthy();
    expect(wrapper.emitted('close')).toBeTruthy();

    wrapper.setProps({ visible: true });
    await next();
    btn[1].trigger('click');
    expect(wrapper.emitted('ok')).toBeTruthy();
  });

  test('setValues方法', async () => {
    const wrapper = mount(Picker, {
      props: {
        teleportDisabled: true,
        columns: years
      },
      global: {
        config: {
          globalProperties: {
            $locale: i18n,
          }
        },
        components: {
          VPopup
        },
      }
    });
    // 单列
    const val = { label: '2025年' };
    wrapper.vm.setValues(val);
    await next();
    expect(wrapper.vm.getValues()).toEqual(val);
    expect(wrapper.vm.getColumnSelectValue(0)).toEqual(val);

    // 多列
    const val2 = [{ label: '2025年' }, { label: '2月' }];
    wrapper.setProps({ columns: [years, months] });
    await next();
    wrapper.vm.setValues(val2);
    expect(wrapper.vm.getValues()).toEqual(val2);
  });

  test('setColumnValues方法', async () => {
    const wrapper = mount(Picker, {
      props: {
        teleportDisabled: true,
        columns: years
      },
      global: {
        config: {
          globalProperties: {
            $locale: i18n,
          }
        },
        components: {
          VPopup
        },
      }
    });
    wrapper.vm.setColumnValues(0, months);
    await next();
    expect(wrapper.findAll('.v-picker-column__item')).toHaveLength(12);
  });
});
