var cheerio = require("cheerio");
var axios = require("axios");
var results = [];

module.exports= {searchItems: function(item,city){
    if(item ===null||item===undefined) throw new Error("item parameter is undefined for method searchItems");
    if(city==null||city==undefined) throw new Error("city parameter is undefined for method searchItems");
    try{
  return new Promise((resolve,reject)=>{

axios.get(`https://${city}.craigslist.org/search/sss?query=${item}`).then(function(response) {

  var $ = cheerio.load(response.data);
  results = [];

  $(".result-row").each(function(i, element) {
    
    var title = $(element).children().find(".result-title").text().trim();
    var price = $(element).children().find(".result-meta").find(".result-price").text().trim();
    var link=$(element).children().find("a").attr("href").trim();

    results.push({
        title: title,
        price:price,
        link:link
    });
        
  });

  resolve(results)
});})

}catch(err){
console.log(err);
}

},getLocation:function(pagelink){

return new Promise((resolve,reject)=>{
  axios.get(pagelink).then(function(response){
    var $ = cheerio.load(response.data);
    results ={
      latitude:null,
      longitude:null
    }
    
    results.latitude=$('#map').data("latitude");
    results.longitude=$('#map').data("longitude");

    resolve(results);
  })
  
});

}};