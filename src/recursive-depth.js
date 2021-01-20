// const CustomError = require("../extensions/custom-error");

// module.exports = class DepthCalculator {
    // constructor(){
        // this.depth = 1
        // this.maxDepth = 1
    // }
    // calculateDepth(arr) {
        // for(let item of arr){
            // if(Array.isArray(item)){
                // this.depth++
                // this.calculateDepth(item)	
				// if(this.depth>this.maxDepth){
					// this.maxDepth = this.depth
				// }		
				// this.depth--
            // }
        // }
        // return this.maxDepth
    // }
// }

const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
		let maxDepth = 1
        for(let item of arr){
            if(Array.isArray(item)){
                let depth = this.calculateDepth(item)+1	
				if(depth>maxDepth){
					maxDepth = depth
				}		
            }
        }
        return maxDepth
    }
}