function removeDuplicateWords (s) {
  let arrWords = s.split(' ')
  let changeWords = new Set
  let words =[];
  for (let word of arrWords){
    if (!words.includes(word)) {
        words.push(word); 
    }
  }

  
  return words.join(' ')
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))