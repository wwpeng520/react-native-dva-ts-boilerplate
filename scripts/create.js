var _ = require('lodash');
var fs = require('fs');
var plus = require('node-plus-string');
var path = require('path');
var mkdirp = require('mkdirp');
const copy = require('copy-template-dir')

const createComponent = async (fullPath) => {
  return new Promise((resolve, reject) => {
    const pathList = _.split(fullPath, '/');
    const componentName = pathList[pathList.length - 1];
    const classBaseName = plus.classify(componentName);
    const vars = {
      classBaseName,
    }
    copy('templates/template-component', 'src/' + fullPath, vars, (err, createdFiles) => {
      if (err) {
        reject(err);
        return;
      } 
      createdFiles.forEach(filePath => console.log(`Created ${filePath}`))
      console.log('done!')
      resolve();
    });
  })
}

const createModel = async (model) => {
  const vars = {
    name: model,
    classifyName: plus.classify(model)
  }
  return new Promise((resolve, reject) => {
    copy('templates/model', 'src', vars, (err, createdFiles) => {
      if (err) {
        reject(err);
        return;
      } 
      createdFiles.forEach(filePath => console.log(`Created ${filePath}`))
      console.log('done!')
      resolve();
    });
  })
}

const main = async () => {
  const cmd = process.argv[2];
  const args = _.slice(process.argv, 3);
  console.log('cmd', cmd);
  console.log('args', args);
  if (cmd === 'create-component') {
    await createComponent(...args);
  } else if (cmd === 'create-model') {
    await createModel(...args);
  }
}

main();