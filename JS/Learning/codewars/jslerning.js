function duplicateEncode(word){
    let wordToLow = word.toLowerCase()
    let wordArr = wordToLow.split('')
    let newString = ''
    for (let i=0; i<wordArr.length;i++){
        console.log(wordArr[i])
        if (wordArr.filter(item=>item ===wordArr[i]).length >1) {
            newString +=')'
        } else{
            newString+='('
        }
    }
    return newString;
}
 console.log(duplicateEncode("diinnnnn"))