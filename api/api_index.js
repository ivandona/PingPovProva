//list of apis
const apiAuth = require('./google_login');
const apiTornei = require('./tornei');
const apiPrenotazioni = require('./prenotazioni');
const apiUsers = require('./users');
const apiModalit√†_di_gioco = require('./modalita_di_gioco');
const apiLeaderboard = require('./ranking')
const apiAutenticazione = require('./autenticazione');

module.exports = function(app,mongoose) {
  apiAuth(app);
  apiTornei(app,mongoose);
  apiPrenotazioni(app,mongoose);
  apiUsers(app,mongoose);
  apiModalit√†_di_gioco(app,mongoose);
  apiLeaderboard(app,mongoose)
  apiAutenticazione(app,mongoose);
};



