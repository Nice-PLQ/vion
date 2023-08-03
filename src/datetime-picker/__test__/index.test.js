import { mount } from '@vue/test-utils';
import DatetimePicker from '..';
import { triggerDrag, next } from '../../../test';
import i18n from '../../locale';

describe('DatetimePicker', () => {
  test('年', async () => {
    const wrapper = mount(DatetimePicker, {
      props: {
        type: 'year',
        minYear: 2019,
        maxYear: 2040,
        teleportDisabled: true,
        value: new Date(2020, 1, 1)
      },
      global: {
        config: {
          globalProperties: {
            $locale: i18n
          }
        }
      }
    });
    await next(0);
    expect(wrapper.find('.v-datetime-picker').element).toMatchSnapshot();

    const el = wrapper.find('.v-picker-column');
    triggerDrag(el, 0, -100);
    el.trigger('transitionend');
    expect(wrapper.emitted('change')[0][0].getFullYear()).toBe(2024);
  });

  test('设置选中时间', async () => {
    const wrapper = mount(DatetimePicker, {
      props: {
        type: 'year',
        teleportDisabled: true,
        value: new Date(2025, 1, 1)
      },
      global: {
        config: {
          globalProperties: {
            $locale: i18n
          }
        }
      }
    });
    await next(0);
    wrapper.findAll('.v-picker__btn')[1]
      .trigger('click');
    expect(wrapper.emitted('ok')[0][0].getFullYear()).toBe(2025);

    const wrapper2 = mount(DatetimePicker, {
      props: {
        teleportDisabled: true,
        type: 'time'
      },
      global: {
        config: {
          globalProperties: {
            $locale: i18n
          }
        }
      }
    });
    await next(0);
    await wrapper2.setProps({
      value: new Date(2025, 1, 1, 20, 30)
    });
    wrapper2.findAll('.v-picker__btn')[1]
      .trigger('click');
    expect(wrapper2.emitted('ok')[0][0].getHours()).toBe(20);
  });

  test('年-月', async () => {
    const wrapper = mount(DatetimePicker, {
      props: {
        teleportDisabled: true,
        type: 'year-month',
        value: new Date(2020, 11, 11)
      },
      global: {
        config: {
          globalProperties: {
            $locale: i18n
          }
        }
      }
    });
    await next(0);
    expect(wrapper.findAll('.v-picker-list')).toHaveLength(2);
    expect(wrapper.find('.v-datetime-picker').element).toMatchSnapshot();
  });

  test('年-月-日', async () => {
    const wrapper = mount(DatetimePicker, {
      props: {
        teleportDisabled: true,
        type: 'date',
        value: new Date(2020, 11, 11)
      },
      global: {
        config: {
          globalProperties: {
            $locale: i18n
          }
        }
      }
    });
    await next(0);

    const el = wrapper.find('.v-picker-column');
    triggerDrag(el, 0, -100);
    el.trigger('transitionend');

    expect(wrapper.findAll('.v-picker-list')).toHaveLength(3);
    expect(wrapper.find('.v-datetime-picker').element).toMatchSnapshot();
  });

  test('年-月-日-时-分', async () => {
    const wrapper = mount(DatetimePicker, {
      props: {
        teleportDisabled: true,
        type: 'date-time',
        value: new Date(2025, 10, 11, 11, 11)
      },
      global: {
        config: {
          globalProperties: {
            $locale: i18n
          }
        }
      }
    });
    await next(0);
    expect(wrapper.findAll('.v-picker-list')).toHaveLength(5);
    expect(wrapper.element).toMatchSnapshot();
    const column = wrapper.findAll('.v-picker-list');
    const yearColunm = column[0].find('.v-picker-column');
    const monthColunm = column[1].find('.v-picker-column');
    triggerDrag(yearColunm, 0, -100);
    yearColunm.trigger('transitionend');
    await next();
    triggerDrag(monthColunm, 0, 100);
    monthColunm.trigger('transitionend');
    await next();
    wrapper.findAll('.v-picker__btn')[1]
      .trigger('click');
    await next();
    const data = wrapper.emitted('ok')[0][0];
    expect([data.getFullYear(), data.getMonth()]).toEqual([2029, 6]);
  });

  test('时-分', async () => {
    const wrapper = mount(DatetimePicker, {
      props: {
        teleportDisabled: true,
        type: 'time'
      },
      global: {
        config: {
          globalProperties: {
            $locale: i18n
          }
        }
      }
    });
    await next(0);
    expect(wrapper.findAll('.v-picker-list')).toHaveLength(2);
    wrapper.findAll('.v-picker__btn')[1]
      .trigger('click');

    const today = new Date();
    const data = wrapper.emitted('ok')[0][0];
    expect([
      data.getFullYear(),
      data.getMonth(),
      data.getDate(),
      data.getHours(),
      data.getMinutes()
    ]).toEqual([
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      today.getHours(),
      today.getMinutes()
    ]);
  });
});
