export const province = [
  { id: 0, text: '北京市' },
  { id: 1, text: '天津市' },
  { id: 2, text: '河北省' },
  { id: 3, text: '山西省' },
  { id: 4, text: '辽宁省' },
  { id: 5, text: '广东省' },
  { id: 6, text: '浙江省' },
  { id: 7, text: '江苏省' },
  { id: 8, text: '福建省' },
  { id: 9, text: '四川省' },
  { id: 10, text: '安徽省' },
  { id: 11, text: '甘肃省' },
  { id: 12, text: '海南省' },
  { id: 13, text: '湖北省' },
  { id: 14, text: '湖南省' },
  { id: 15, text: '吉林省' },
  { id: 16, text: '江西省' },
  { id: 17, text: '青海省' },
  { id: 18, text: '山东省' },
  { id: 19, text: '陕西省' }
];

export const years = new Array(10)
  .fill(1)
  .map((item, index) => ({ label: `${2020 + index}年` }));
export const months = new Array(12)
  .fill(1)
  .map((item, index) => ({ label: `${index + 1}月` }));
export const days = new Array(30)
  .fill(1)
  .map((item, index) => ({ label: `${index + 1}日` }));
