function fruits(){
    if(true){
        var fruit = 'Apple'; // global scope
        let fruit2 = 'Kiwi'; //Block scope
        let frui3 = 'Banana'; //Block scope
    }
    console.log(fruit);
    console.log(fruit2);
    console.log(fruit3);
}

fruits()