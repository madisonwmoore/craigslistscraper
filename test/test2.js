var scraper=require("../index");

scraper.getLocation("https://orlando.craigslist.org/gms/d/clermont-garage-sale-sunday-only/6921257812.html").then(function(results){
    console.log(results);
})