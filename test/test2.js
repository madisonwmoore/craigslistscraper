var scraper=require("../index");

scraper.getLocation("https://orlando.craigslist.org/bpo/d/sorrento-reduced-windsheild-small/6908136251.html").then(function(results){
    console.log(results);
})