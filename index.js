function receivesAFunction(funk) {
    return funk();
}
function returnsANamedFunction() {
    return function motherFunker() {
        console.log("funk off")
    }
}
function returnsAnAnonymousFunction() {
    return function(){
        console.log("get down")
    }
}
