const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(mode){
        this.mode = mode
    }
    encrypt(string,key) {
        string = string.toLowerCase().split('')
        key = key.toLowerCase()
        const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        let j=-1
        for(let i=0;i<string.length;i++){
            if(alphabet.includes(string[i])){
                j++
                if(j>=key.length){
                    if(alphabet.indexOf(string[i])+alphabet.indexOf(key[j%key.length])>=alphabet.length){
                        string[i]=alphabet[ (alphabet.indexOf(string[i])+alphabet.indexOf(key[j%key.length]))%26 ]
                    }
                    else{
                        string[i]=alphabet[ alphabet.indexOf(string[i])+alphabet.indexOf(key[j%key.length]) ]
                    }
                }
                else{
                    if(alphabet.indexOf(string[i])+alphabet.indexOf(key[j])>=alphabet.length){
                        string[i]=alphabet[ (alphabet.indexOf(string[i])+alphabet.indexOf(key[j]))%26 ]
                    }
                    else{
                        string[i]=alphabet[ alphabet.indexOf(string[i])+alphabet.indexOf(key[j]) ]
                    }
                }
            }
        }
		if(this.mode===false) return string.reverse().join('').toUpperCase()
        return string.join('').toUpperCase()
    }    
    decrypt(string,key) {
        string = string.toLowerCase().split('')
        key = key.toLowerCase()
        const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        let j=-1
        for(let i=0;i<string.length;i++){
            if(alphabet.includes(string[i])){
                j++
                if(j>=key.length){
                    if(alphabet.indexOf(string[i])-alphabet.indexOf(key[j%key.length])<0){
                        string[i]=alphabet[ (alphabet.indexOf(string[i])-alphabet.indexOf(key[j%key.length]))+26 ]
                    }
                    else{
                        string[i]=alphabet[ alphabet.indexOf(string[i])-alphabet.indexOf(key[j%key.length]) ]
                    }
                }
                else{
                    if(alphabet.indexOf(string[i])-alphabet.indexOf(key[j])<0){
                        string[i]=alphabet[ (alphabet.indexOf(string[i])-alphabet.indexOf(key[j]))+26 ]
                    }
                    else{
                        string[i]=alphabet[ alphabet.indexOf(string[i])-alphabet.indexOf(key[j]) ]
                    }
                }
            }
        }
		if(this.mode===false) return string.reverse().join('').toUpperCase()
        return string.join('').toUpperCase()
    }
}
module.exports = VigenereCipheringMachine;
