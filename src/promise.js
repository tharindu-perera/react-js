let promise = new Promise(function (resolve, reject) {
    // the function is executed automatically when the promise is constructed
    console.log("before set time out >>>")
    // after 1 second signal that the job is done with the result "done"
    resolve("done");
    // reject("Error>>>>>");

});

promise.then(
    success => {
        console.log("state:" + promise.state);
        console.log("successful. Msg :" + success);
        return new Error("fff");
    }
).catch(error => console.log("Error msg :" + error))
    .finally(() => console.log("finally statement "))
    .then(str => console.log("successful. Msg2 :" + str))


class Thenableb {
    constructor(num) {
        this.num = num;
    }

    thenb(resolve) {
        console.log(resolve); // function() { native code }
        // resolve with this.num*2 after the 1 second
        // setTimeout(() => resolve(this.num * 2), 1000); // (**)
    }
}

let promise2 =new Promise(resolve => resolve(1))
    .then(result => {
        return new Thenableb(result); // (*)
    })
    .then(4); // shows 2 after 1000ms


