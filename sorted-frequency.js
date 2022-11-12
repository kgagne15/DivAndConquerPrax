function sortedFrequency(arr, val) {

    if (arr[0] === val) {
        let i = 1;
        while (arr[i] === val) {
          i++
        }
        return i; 
    } else {
        let idx = []
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] === val) {
                idx.push(i)
            }
        }

       if (idx.length !== 0) {
           return idx.length;
       } 
        
       
     
    }
    return -1; 
}

module.exports = sortedFrequency