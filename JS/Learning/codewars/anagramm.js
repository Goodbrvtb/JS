var isAnagram = function(test, original) {
return test.toLowerCase().split('').sort().join('').toLowerCase()===original.toLowerCase().split('').sort().join('')
};

console.log(isAnagram("Buckethead", "DeathCubeK"))