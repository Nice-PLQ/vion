export function kebabCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1).replace(/([A-Z])/g, '-$1').toLowerCase();
}

export const isMobile = /ios|iphone|ipod|ipad|android/.test(window.navigator.userAgent.toLowerCase());

export const isWin = /windows|win32|win64/i.test(window.navigator.userAgent.toLowerCase());
