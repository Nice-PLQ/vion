import { Fragment } from 'vue';

export function simpleClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function getChildFromSlot(vnode, name, slots = []) {
  vnode.forEach((node) => {
    let { type } = node;
    type = type.name || type;
    if (type === name) {
      slots.push(node);
    } else if (type === Fragment) {
      getChildFromSlot(node.children, name, slots);
    }
  });
  return slots;
}
