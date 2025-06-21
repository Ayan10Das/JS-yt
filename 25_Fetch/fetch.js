
//     The global fetch() method starts the process of fetching the resource from network.      Rteurning a promise which is fulfilled when the response is available.

//   A fetch promise does not reject a HTTP(404,201,..) error ,instead a .then() is used to take the response.status or response.ok properties.

//  Fetch() has a special Multi TsakQueue or Priority Queue for storing callBacks, It executes before any other taskQueue callback.

/*
Headers:
Represents response/request headers, allowing you to query them and take different actions depending on the results.

Request:
Represents a resource request.

Response:
Represents the response to a request.
*/

                                // ***** IMPORTANT ******
/*
    fetch(url, options);    

    url: A string containing the URL to which the request is sent.

    options (optional): An object that configures the request (method, headers, body, etc.).
*/

fetch('https://api.example.com/data', {
  method: 'POST', //--> Specifies the HTTP method: method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | etc.

  headers: {//-->Defines custom headers (like Content-Type, Authorization, etc.):
    // These headers act like metadata about the request or the data you're sending/expecting.
    'Content-Type': 'application/json',
    'Authorization': 'Bearer abc123'
  },

  body: JSON.stringify({ name: 'Ayan' }),//-->Used for sending data in POST, PUT, PATCH requests. Must be a string (usually JSON):
  
  credentials: 'include',//-->Controls whether cookies and HTTP credentials are sent:
  mode: 'cors',//-->Specifies the mode of the request (for CORS handling):mode: 'cors' | 'no-cors' | 'same-origin'
  
  cache: 'no-cache'//-->Controls caching behavior:cache: 'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached'
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));


