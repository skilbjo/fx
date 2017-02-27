var pg = require('pg'),
    conString = process.env.DW_URI,
    psql = new pg.Client(conString)
  ;

exports.psql = psql;
