export function countDown(n){
    let result = "";
    for (let i = n; i >= 1; i--){
        result += i + " ";
    }
    return console.log(result);
}

countDown(10)