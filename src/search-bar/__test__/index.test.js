import { mount } from '@vue/test-utils';
import { next } from '../../../test';
import SearchBar from '..';
import i18n from '../../locale';

describe('SearchBar', () => {
  const wrapper = mount(SearchBar, {
    props: {
      type: 'capsule',
      cancelBtnVisible: true,
    },
    global: {
      config: {
        globalProperties: {
          $locale: i18n
        }
      }
    }
  });
  test('渲染', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('focus & blur事件触发', async () => {
    wrapper.find('.v-search-bar_unfocus').trigger('click');
    await next();
    expect(wrapper.element).toMatchSnapshot();

    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);
    expect(wrapper.emitted('focus')).toBeTruthy();
    input.trigger('blur');
    expect(wrapper.emitted('blur')).toBeTruthy();
  });

  test('change & search事件触发', async () => {
    wrapper.find('.v-search-bar_unfocus').trigger('click');
    await next();
    const input = wrapper.find('input');
    input.element.value = 'test';
    input.trigger('input');
    expect(wrapper.emitted('change')[0][0]).toBe('test');

    input.trigger('keyup.enter');
    expect(wrapper.emitted('search')[0][0]).toBe('test');
  });

  test('clear & back-btn-click事件触发', async () => {
    const wrapper = mount(SearchBar, {
      props: {
        backBtnVisible: true,
        value: 'test'
      },
      global: {
        config: {
          globalProperties: {
            $locale: i18n
          }
        }
      }
    });
    wrapper.find('.v-search-bar_focus input').trigger('click');
    await next();
    wrapper.find('.v-search-bar__clear-icon').trigger('click');
    wrapper.find('.v-search-bar__back-icon').trigger('click');
    expect(wrapper.emitted('clear')).toBeTruthy();
    expect(wrapper.emitted('back-btn-click')).toBeTruthy();
  });

  test('cancel事件触发', async () => {
    const wrapper = mount(SearchBar, {
      props: {
        cancelBtnVisible: true,
        value: 'test'
      },
      global: {
        config: {
          globalProperties: {
            $locale: i18n,
          }
        }
      }
    });
    wrapper.find('.v-search-bar_unfocus').trigger('click');
    await next();
    wrapper.find('.v-search-bar__cancel').trigger('click');
    expect(wrapper.emitted('cancel')).toBeTruthy();
  });
});
