function dbSort(a){
    let arrNum=[];
    let arrString=[];
    for(let item of a){
        if (typeof(item)==='number'){
            arrNum.push(item)
        } else{
            arrString.push(item)
        }
      
    }
    arrNum.sort((a,b)=>(a-b))
    arrString.sort()
    let finish = arrNum.concat(arrString)
return finish
    }

console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]))

console.log(dbSort([14, 32, 3, 5, 5]))
