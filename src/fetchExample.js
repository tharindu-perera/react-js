let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];

Promise.all(urls.map(url => fetch(url)))
    .then(results => { // (*)
        results.forEach((result, num) => {
            if (result.status === "fulfilled") {
                alert(`${urls[num]}: ${result.gar.status}`);
            }
            if (result.status === "rejected") {
                alert(`${urls[num]}: ${result.reason}`);
            }
        });
    })
    .catch(console.log("ERROR") )
