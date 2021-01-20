const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	str = String(str)
	if(options.repeatTimes===undefined && options.additionRepeatTimes === undefined) return str+=options.addition
    for(let i=0;i<+options.additionRepeatTimes;i++){
        if(options.addition!==undefined)str+=options.addition
        if(i!==+options.additionRepeatTimes-1) str+=options.additionSeparator
    }
    let newStr = str
    for(let i=0;i<+options.repeatTimes-1;i++){
        if(i!==+options.repeatTimes-1){
            if(options.separator===undefined) newStr+='+'
            else newStr+=options.separator
        }
        newStr+=str
    }
    return newStr
};
  