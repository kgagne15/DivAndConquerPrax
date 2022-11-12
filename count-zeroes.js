function countZeroes(arr) {

    if (arr[0] !== 0 && arr[arr.length-1] !== 0) {
        return 0; 
    }

    if (arr[0] !== 0) {
        let i = 0;
        while (arr[i] !== 0) {
            i++
        }
        let numZeros = arr.length - i;
        return numZeros
    } else {
        return arr.length; 
    }
    
}



module.exports = countZeroes

