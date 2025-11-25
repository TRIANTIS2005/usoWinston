const { getUUID } = require('../plugins/get-id.plugin');
const { getAge }  = require('../plugins/get-age.plugin');
const { http } = require('../plugins/http-client.plugin');
const BuildLogger = require('../plugins/logger.plugins')

module.exports = {
  getAge, 
  getUUID,
  http,
  BuildLogger,
  
}