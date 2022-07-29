Array.prototype.myMap = function(cb) {
    let context = this;
    const result = [];
    for(let i=0; i<context.length;i++) {
        result[i] = cb(context[i], i, context);
    }
    return result;
}

Array.prototype.myFilter = function(cb) {
    let context = this;
    const result = [];
    for(let i=0; i<context.length;i++) {
        if(cb(context[i], i, context))
        result.push(context[i]);
    }
    return result;
}

Array.prototype.myReduce = function(cb, initialValue) {
    let context = this;
    let result = initialValue;
    for(let i=0; i<context.length;i++) {
        if(result) {
            result = cb(result, context[i])
        } else {
            result = context[i];
        }
    }
    return result;
}

Array.prototype.forEach = function(cb) {
    let context = this;
    for(let i=0; i<context.length;i++) {
        cb(context[i], i, context);
    }
}

Function.prototype.myBind = function(context, ...args) {
    let newContext = this;
    return function(...newArgs){
        newContext.apply(context, args.concat(...newArgs));
    }
}


Array.prototype.mySort = function(callback){
    let arr = this;

    arr = quicksort(arr, callback)
}

function quicksort(array, callback) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
  };

  export function debouncing(cb, delay) {
      let timer;
      return function(...args){
          clearTimeout(timer);
          timer = setTimeout(()=>{cb.apply(this, args)}, delay)
      }
  }