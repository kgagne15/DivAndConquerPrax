function findFloor(arr, int) {

        let low = 0;
        let high = arr.length-1; 
        let mid = Math.floor((arr.length-1) / 2)
    
     
    
        if (arr[high] < int) {
            return arr[high]
        }
    
         if (arr[low] > int) {
            return -1; 
        }
    
    
      if (arr[mid] > int){
        for (let i = mid; i >= 0; i--) {
          if (arr[i] < int) {
            return arr[i]
          }
        }
      }
    
      if (arr[mid] === int) {
        for (let i = mid; i >= 0; i--) {
          if (arr[i] < int) {
            return arr[i]
          }
        }
      }
        
      

}

module.exports = findFloor



