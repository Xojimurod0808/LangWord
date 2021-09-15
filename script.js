let arr = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis tenetur modi quaerat.";

function longWord(words){
    let splitted = words.split(" ")
    let result = "";
    let result2 = [];

    for (let word of splitted){
        if(word.length > result.length){
            result = word
        }
    }
    for (let allLongWord of splitted){
        if(allLongWord.length == result.length){
            result2.push(allLongWord)
        }
    }

    return result2
}
console.log(longWord(arr));
