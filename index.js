// Code your solution here
function findMatching(arr, string){
    
    return (arr.filter(name => name.toLowerCase() === string.toLowerCase()));
}

function fuzzyMatch(arr, string){

    return (arr.filter(arr => (arr.includes(string) && !(arr.includes(string, string.length-1)))));
}

function matchName(obj, string){

    return (obj.filter(obj => obj.name === string));
}