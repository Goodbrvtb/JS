

function countVowels(str){
  const letters = ['a', 'e', 'i', 'o', 'u', 'y']
  let count=0;
  for(i=0;i<str.length; i++){
    if (letters.includes(str[i])){
       count+=1
    }

  }
  return count
}

console.log(countVowels("aseutigssdoknonasdgdkjdkjn"))

