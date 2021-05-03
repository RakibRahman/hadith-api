# Hadith API

A api for hadiths in bengali language

From this api you will get:

- Hadith narrator
- Hadith number
- Hadith authenticity

API: https://bn-hadith-api.herokuapp.com/hadiths

To fetch data from this api you can use following example:

```
fetch('https://bn-hadith-api.herokuapp.com/hadiths')
  .then(response => response.json())
  .then(data => console.log(data));
```

To contribute:

- Fork the repository
- add data to following below format

```
 { "id": "",
  "name": "",
   "description": "",
   "numbers": "",
    "grade": ""
    }

```

- keep track of id
- create pull request
