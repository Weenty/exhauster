const url = 'https://FloralwhiteCheeryDominspector.flaky12r.repl.co/get_data';
//выведен одну дату, так как ты указал конкретный момент
const data = {
  "first": "2023-02-16T18:39:25.498636",
  "last": "2023-02-16T18:39:25.498636"
};

//формат даты используется %Y-%m-%dT%H:%M:%S.%f

const options = {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(data)
};


let res = []

fetch(url, options)
.then(response => response.json())
.then(result => console.log((result)))
.catch(error => console.error(error));





