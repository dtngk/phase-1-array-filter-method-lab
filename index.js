// Code your solution here
function findMatching(arr, string){
    
    return (arr.filter(name => name.toLowerCase() === string.toLowerCase()));
}

function fuzzyMatch(arr, string){

    return (arr.filter(arr => (arr.includes(string) && arr[0] == string[0])));
}

function matchName(obj, string){

    return (obj.filter(obj => obj.name === string));
}