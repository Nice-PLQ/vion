import { mount } from '@vue/test-utils';
import ActionSheet from '../action-sheet.vue';
import VPopup from '../../popup/popup.vue';

describe('ActionSheet', () => {
  const wrapper = mount(ActionSheet, {
    props: {
      items: ['选项一', '选项二', { text: '删除', color: 'red' }],
      title: '标题',
      showCancel: true,
      cancelText: 'cancel',
      showSelectIcon: true,
      teleportDisabled: true
    },
    global: {
      components: {
        VPopup
      }
    }
  });

  test('选项数量', () => {
    expect(wrapper.find('.v-action-sheet').element).toMatchSnapshot();
    expect(wrapper.findAll('.v-action-sheet__menu').length).toBe(3);
  });

  test('显示与隐藏', async () => {
    await wrapper.setProps({ visible: true });
    expect(wrapper.find('.v-popup__mask').isVisible()).toBe(true);
    expect(wrapper.find('.v-popup__content').isVisible()).toBe(true);
  });

  test('标题', () => {
    expect(wrapper.find('.v-action-sheet__title').text()).toBe('标题');
  });

  test('显示取消', async () => {
    const cancel = wrapper.find('.v-action-sheet__action');
    expect(cancel.text()).toBe('cancel');
    await cancel.trigger('click');
    expect(wrapper.emitted('cancel')).toBeTruthy();
  });

  test('关闭', async () => {
    await wrapper.find('.v-popup__mask').trigger('click');
    expect(wrapper.emitted('close')).toBeTruthy();
  });
});
