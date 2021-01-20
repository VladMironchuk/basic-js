const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr){
    try{
        arr!=null || Array.from(arr).length!=0
    }
    catch(e){
        throw e
    }
    let arr1 = []
    for(let i of arr){
        arr1.push(i)
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i] == '--discard-next'){
			arr1[i+1] = null
            arr1[i] = null
        }
        else if(arr[i] == '--discard-prev'){
            arr1[i-1] = null
            arr1[i] = null
        }
        else if(arr[i]=='--double-next'){
            if(i < arr1.length - 1) arr1[i] = arr1[i+1]
            else arr1[i] = null
        }
        else if(arr[i] == '--double-prev'){
            if(i >=1 && i<=arr1.length-1) arr1[i] = arr1[i-1]
            else arr1[i] = null
        }
    }
    return arr1.filter(item => item !== null)
}