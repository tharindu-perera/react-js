export default class {

    myfetch() {
        let request = new XMLHttpRequest()

        request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
        request.onload = function () {
            // Begin accessing JSON data here
            var data = JSON.parse(this.response)

            if (request.status >= 200 && request.status < 400) {
                data.forEach(movie => {
                    console.log(movie.title)
                })
            } else {
                console.log('error')
            }
        }

        request.send()
    }
}

function area(length, breadth) {
    let a = length * breadth;
    console.log('Area of the rectangle is ' + a + ' square unit');
}

let perimeter = function (length, breadth) {
    let p = 2 * (length + breadth);
    console.log('Perimeter of the rectangle is ' + p + ' unit');
}

export {area, perimeter}