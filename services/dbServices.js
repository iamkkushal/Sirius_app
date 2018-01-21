var MongoClient=require('mongodb').MongoClient
exports.createConnection=function(){
  MongoClient.connect("mongodb://iamkkushal:kushalchand@ds111138.mlab.com:11138/projector").then(function(client){
  console.log("Successfully connected with MONGODB");
  exports.database=client.db("projector1");
});
}
