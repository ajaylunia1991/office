var pages = [];
const fs = require("fs");
const include={};
module.exports = {

    pages: function() {
       // get all pages
        fs.readdirSync('./pages').filter(function (page) {
            pages.push('./pages/' + page);
        });
        var index = pages.length -1;
        while( index >=0 ){
            if( fs.statSync(pages[index]).isDirectory() == true){
                fs.readdirSync(pages[index]).filter(file =>{
                    pages.push(pages[index] +'/'+ file)
                })
                pages.splice(index, 1);
            } 
            index -= 1;
        }
        pages.forEach(page =>{
            var pageName= page.match(/[\w-_]+\.js/)[0].replace(/\.js/,'');
            include[pageName] = page;
        })
        return include;
    }
};
