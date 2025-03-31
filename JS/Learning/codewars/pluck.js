function pluck(objs, name) {
let pluckArr = [];
for(let value  of objs){
    pluckArr.push(value[name])
}
return pluckArr
}

console.log(pluck([{a:1}, {a:2}], 'a'))