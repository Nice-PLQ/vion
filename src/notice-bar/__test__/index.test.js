import { mount } from '@vue/test-utils';
import NoticeBar from '../notice-bar.vue';
import i18n from '../../locale';

describe('NoticeBar', () => {
  test('渲染', () => {
    const wrapper = mount({
      template: `
        <div>
          <v-notice-bar type="warning" right-icon-type="right">网络出现异常，请检查。</v-notice-bar>
          <v-notice-bar type="info" right-text="去设置">这是一段超长的提示文本，超长的部分将会自动隐藏</v-notice-bar>
          <v-notice-bar type="black" right-icon-type="close">你有新的邮件，请及时查阅。</v-notice-bar>
          <v-notice-bar type="gray" right-icon-type="close">你有新的邮件，请及时查阅。</v-notice-bar>
        </div>
      `
    }, {
      global: {
        components: { VNoticeBar: NoticeBar },
        config: {
          globalProperties: {
            $locale: i18n
          }
        }
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('事件触发', async () => {
    const wrapper = mount(NoticeBar, {
      props: {
        rightText: '去设置',
        rightIconType: 'close'
      },
      global: {
        config: {
          globalProperties: {
            $locale: i18n
          }
        }
      }
    });

    await wrapper.find('.v-notice__setting').trigger('click');
    await wrapper.find('.v-notice__right-icon').trigger('click');
    expect(wrapper.emitted('right-text-click')).toBeTruthy();
    expect(wrapper.emitted('right-icon-click')).toBeTruthy();
  });
});
