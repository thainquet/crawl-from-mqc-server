const con = require('../connectDB');

var ads = {
  getAllQc: function(callback) {
    return con.query("select * from test", callback)
  },
  getQcById:function(id,callback){
    return con.query("select * from test where Id = ?",id ,callback);
  },
  getQcByLinhvuc : function(callback){
    return con.query("select * from test where linhvuc LIKE 'D%' ",callback);
  },
  getQcByMucdich : function(mucdich, callback) {
    return con.query("select * from test where mucdich = ?", mucdich ,callback);
  },
  getQcByLoaihinhqc : function(loaihinhqc, callback) {
    return con.query("select * from test where loaihinhqc = ?", loaihinhqc ,callback);
  }
}
module.exports = ads;