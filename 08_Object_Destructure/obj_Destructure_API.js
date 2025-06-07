const data = await fetch('https://randomuser.me/api/');// API fetch using await
const res = await data.json();// Converting the data into JSON

// JSON formatter to understand API fetched Data

const { title, first, last } = res.results[0].name;// Objecr De-Structure
console.log(`My name is ${title} ${first} ${last}`);

                                    /* *******JSON****** */
// No name but can be stored in some variable ,String key,value pair.
// JSON -> Java script object notation is a light-weight data interchange format both human readable and machine readable.
// {
//    "firstName":"Ayan",
//    "lastName":"Das"
// }