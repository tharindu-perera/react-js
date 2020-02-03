 fetch("http://localhost:8080").then().catch(error => console.log("HTTP-Error: " +  error))
 document.cookie = "user=John;  ;path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"

 console.log(document.cookie )

 localStorage.setItem('test', 1);
