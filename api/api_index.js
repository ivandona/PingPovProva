//list of apis
const apiAuth = require('./google_login');
const apiTornei = require('./tornei');
module.exports = function(app,mongoose) {
  apiAuth(app);
  apiTornei(app,mongoose);
};



