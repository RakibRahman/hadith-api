# Hadith API

A API for hadiths in bengali language for the first time!

From this API you will get:

- Hadith narrator
- Hadith number
- Hadith authenticity

API: https://bn-hadith-api.herokuapp.com/hadiths

To fetch data from this api you can use following examples:

### Using Promise:

```
fetch('https://bn-hadith-api.herokuapp.com/hadiths')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Using Async/Await:

```
async function () {
  const fetchAPI = fetch(`https://bn-hadith-api.herokuapp.com/hadiths`);
  const response = await fetchAPI;
  const data = await response.json();
  console.log(data);
}
```

**To contribute:**

- Fork the repository
- Clone the repository to your pc
- add hadith data to the following format:

```
{
"id": ,
"name": "",
"description": "",
"references": "",
"grade": ""
}

```

- keep track of **id**
- Try to add at least ten hadiths.
- create pull request

**Thanks to [iHadis](http://ihadis.com/) for providing hadiths**
