import { nextTick } from 'vue';

function getTouch(el, x, y) {
  return {
    identifier: Date.now(),
    target: el,
    pageX: x,
    pageY: y,
    clientX: x,
    clientY: y,
    radiusX: 2.5,
    radiusY: 2.5,
    rotationAngle: 10,
    force: 0.5
  };
}

// Trigger pointer/touch event
export function trigger(
  wrapper,
  eventName,
  x = 0,
  y = 0,
  options = {}
) {
  const el = 'element' in wrapper ? wrapper.element : wrapper;
  const touchList = options.touchList || [getTouch(el, x, y)];

  if (options.x || options.y) {
    touchList.push(getTouch(el, options.x, options.y));
  }

  const event = document.createEvent('CustomEvent');
  event.initCustomEvent(eventName, true, true, {});

  Object.assign(event, {
    clientX: x,
    clientY: y,
    touches: touchList,
    targetTouches: touchList,
    changedTouches: touchList
  });

  el.dispatchEvent(event);
}

// simulate drag gesture
export function triggerDrag(el, x = 0, y = 0) {
  trigger(el, 'touchstart', 0, 0);
  trigger(el, 'touchmove', x / 4, y / 4);
  trigger(el, 'touchmove', x / 3, y / 3);
  trigger(el, 'touchmove', x / 2, y / 2);
  trigger(el, 'touchmove', x, y);
  trigger(el, 'touchend', x, y);
}

export function next(time) {
  if (time !== undefined) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }
  return nextTick();
}
