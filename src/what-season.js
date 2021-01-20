const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if(!date) return 'Unable to determine the time of year!'
    try{
        date.toJSON()
    }
    catch(err){
        throw new Error(err)
    }
    const season = date.getMonth()
    if(season >=2 && season <= 4) return 'spring'
    if(season >=5 && season <= 7) return 'summer'
    if(season >=8 && season <=10) return 'autumn'
    return 'winter'
};
