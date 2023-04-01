const fs = require('fs');
const path = require('path');
const extract = require('extract-comments');
const Components = require('./get-components')();

const REG = /^@(?<key>.+?)(?:\s+)(?<value>.+)$/;
const SCRIPT_REG = /<script>([\s\S]*)<\/script>/;

const tags = {};
const attribute = {};
const filter = comp => !['locale'].includes(comp);

function buildVetur() {
  Components.filter(filter).forEach((name) => {
    const compName = `q-${name}`;
    tags[compName] = {};

    const content = fs.readFileSync(path.resolve(__dirname, `../src/${name}/src/index.vue`), 'utf-8');
    const code = content.match(SCRIPT_REG)[1];
    const comments = extract.block(code).map((item) => {
      const res = {};
      item.value.split('\n').forEach((attr) => {
        if (attr && REG.test(attr)) {
          const { key, value } = attr.match(REG).groups;
          res[key] = value;
        }
      });
      return Object.keys(res).length ? res : null;
    })
      .filter(n => n);

    tags[compName].attributes = [];
    comments.forEach((item) => {
      const attr = {};
      attr.description = item.description;
      if (item.enum) {
        attr.options = JSON.parse(item.enum);
      }
      if (item.default) {
        attr.default = item.default;
      }

      attribute[`${compName}/${item.attribute}`] = attr;
      tags[compName].attributes.push(item.attribute);
    });
  });

  const veturPath = path.resolve(__dirname, '../vetur');
  if (!fs.existsSync(veturPath)) {
    fs.mkdirSync(veturPath);
  }
  fs.writeFileSync(`${veturPath}/attributes.json`, JSON.stringify(attribute, null, '  '));
  fs.writeFileSync(`${veturPath}/tags.json`, JSON.stringify(tags, null, '  '));
}

buildVetur();
