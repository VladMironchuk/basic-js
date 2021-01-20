const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if(sampleActivity==0 || isNaN(+sampleActivity) || typeof(sampleActivity)!='string') return false
    let ans = Math.ceil(1/(Math.LN2/5730)*Math.log(15/+sampleActivity))
    return ans > 0 ? ans : false
};
