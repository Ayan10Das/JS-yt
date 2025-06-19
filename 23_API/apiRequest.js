
/*
Value	State	Description
0	    UNSENT	Client has been created. open() not called yet.
1	    OPENED	open() has been called.
2	    HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	    LOADING	Downloading; responseText holds partial data.
4	    DONE	The operation is complete.
*/
let apiUrl = 'https://api.github.com/users/Ayan10Das';
let xhr = new XMLHttpRequest();
xhr.open('GET', apiUrl);

xhr.onreadystatechange = function () {
    // console.log(xhr.readyState)
    // console.log(xhr.status)
    if (xhr.readyState === 4) {
        // console.log(this.responseText);
        let data = JSON.parse(this.responseText);
        console.log(typeof data)
    }
}
xhr.send();
