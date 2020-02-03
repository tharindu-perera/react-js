import FetchApi2, {area} from "./XMLHttpRequest";

let mixedData = [
    "String",
    null,
    7,
    "ff",
    [
        "another",
        "array",
    ],
];

// mixedData[0]="xxx"
// mixedData.splice(1,2)
// let temp = mixedData.shift();

// console.log(temp)

for (let i = 0; i < mixedData.length; i++) {
    // console.log(i, mixedData[i]);
}

for(let arr of mixedData){
    // console.log(arr);
}
for(let xx in mixedData){
    // console.log(mixedData[xx]);
}


onsole.log(Object.values(person) )
// console.log(person.xxxx() )





let fetchAopi = new  FetchApi2();
fetchAopi.myfetch()

area(3,2)



