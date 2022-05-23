function myEach(collection, alert) {
   let arr = Object.values(collection)
   arr.forEach(ele => alert(ele))
   return collection
}

function myMap(collection, callback) {

    let arr = Object.values(collection)
    let newArr = []
    for(let ele of arr) {
        newArr.push(callback(ele))
    }
    return newArr
}

function myReduce(collection, callback, ...acc) {
    let arr = Object.values(collection) 
    let newAcc; 
    let i; 
    if(acc.length > 0) {
        newAcc = acc[0]
        i = 0
    } else {
        newAcc = arr[0]
        i = 1
    }

    for(i; i< arr.length; i++) {
      newAcc = callback(newAcc, arr[i], collection)

    }
    return newAcc
}

function myFind(collection, predicate){
    let arr = Object.values(collection)
}

function myFilter(collection, predicate){
    let arr = Object.values(collection)
}

function mySize(collection){
    let arr = Object.assign(collection)
    return arr

}
 

    