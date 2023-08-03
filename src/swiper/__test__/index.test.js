import { mount } from '@vue/test-utils';
import { triggerDrag, next } from '../../../test';
import VSwiper from '../swiper.vue';
import VSwiperItem from '../../swiper-item';

// offsetWidth mock
const originalOffsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth');
beforeAll(() => {
  Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, value: 343 });
});

afterAll(() => {
  Object.defineProperty(HTMLElement.prototype, 'offsetWidth', originalOffsetWidth);
});

describe('Swiper', () => {
  test('渲染', async () => {
    const fn = jest.fn();
    const wrapper = mount({
      template: `
        <v-swiper @change="change" :show-indicators="false">
          <v-swiper-item style="height: 150px;" v-for="n in 4" :key="n">{{n}}</v-swiper-item>
        </v-swiper>
      `,
      methods: {
        change: fn
      }
    }, {
      global: {
        components: { VSwiper, VSwiperItem }
      }
    });
    const el = wrapper.find('.v-swiper__list');
    triggerDrag(el, -100, 0);
    await next();
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.find('.v-swiper__indicator').exists()).toBe(false);
    expect(el.element.style.transform).toMatch(/-686px/);

    el.trigger('transitionend');
    expect(fn).toHaveBeenCalledWith(1);
  });

  test('自动轮播', async () => {
    const wrapper = mount({
      template: `
        <v-swiper auto-play :interval="100">
          <v-swiper-item style="height: 150px;" v-for="n in 4" :key="n">{{n}}</v-swiper-item>
        </v-swiper>
      `
    }, {
      global: {
        components: { VSwiper, VSwiperItem }
      }
    });
    const el = wrapper.find('.v-swiper__list');
    triggerDrag(el, -5, 0);
    el.trigger('transitionend');
    await next(300);
    expect(el.element.style.transform).toMatch(/-686px/);
  });

  test('向右滑动后展示最后一个', async () => {
    const fn = jest.fn();
    const wrapper = mount({
      template: `
        <v-swiper @change="change">
          <v-swiper-item style="height: 150px;" v-for="n in 4" :key="n">{{n}}</v-swiper-item>
        </v-swiper>
      `,
      methods: {
        change: fn
      }
    }, {
      global: {
        components: { VSwiper, VSwiperItem }
      }
    });
    const el = wrapper.find('.v-swiper__list');
    triggerDrag(el, 100, 0);
    expect(fn).toHaveBeenCalledWith(1);
    expect(fn).toHaveBeenCalledWith(4);
  });
});
