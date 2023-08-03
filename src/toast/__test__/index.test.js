
import Toast from '..';
import { next } from '../../../test';

describe('Toast', () => {
  test('info', async () => {
    const wrapper = Toast({
      type: 'info',
      message: 'info',
      duration: 100
    });
    await next();
    expect(wrapper.$el).toMatchSnapshot();
  });

  test('success', async () => {
    const wrapper = Toast({
      type: 'success',
      message: 'success',
      duration: 100
    });
    await next();
    expect(wrapper.$el).toMatchSnapshot();
  });

  test('error', async () => {
    const wrapper = Toast({
      type: 'error',
      message: 'error',
      duration: 100
    });
    await next();
    expect(wrapper.$el).toMatchSnapshot();
  });
});
