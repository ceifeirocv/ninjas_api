const basicInfo = require('./basicInfo');
const servers = require('./servers');
const tag = require('./tags');
const components = require('./components');
const Ninjas = require('./ninjas')

module.exports = {
  ...basicInfo,
  ...servers,
  ...components,
  ...tag,
  ...Ninjas,
}