var elasticsearch = Meteor.npmRequire('elasticsearch');
searchElastic = function (){
  console.log("3");
  var client = new elasticsearch.Client({
    host: 'localhost:9200'
  });

client.ping({
  // ping usually has a 3000ms timeout 
  requestTimeout: Infinity,
 
  // undocumented params are appended to the query string 
  hello: "elasticsearch!"
}, function (error) {
  if (error) {
    console.trace('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});
}