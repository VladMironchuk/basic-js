const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if(members==null || Array.from(members).length===0) return false
    members = members.filter(item => typeof(item)=='string')
    members = members.map(function(item){
        while(item[0]==' '){
            item = item.slice(1)
        }
        return item
    })
    members = members.map(item => item.split(' ')[0].toUpperCase())
    return members.map(item => item[0]).sort().join('')
}
