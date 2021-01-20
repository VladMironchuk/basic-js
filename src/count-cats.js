const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats =0 
    for(m of matrix){
        for(item of m){
            if(item=='^^') ++cats
        }
    }
    return cats
};
