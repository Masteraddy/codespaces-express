const express = require('express')
const dummyjson = require("dummy-json");
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World Again!!!')
})

app.get("/api", (req, res) => {
  const template = `{
  "users": [
    {{#repeat 5}}
    {
      "id": {{@index}},
      "name": "{{firstName}} {{lastName}}",
      "work": "{{company}}",
      "email": "{{email}}",
      "dob": "{{date '1900' '2000' 'YYYY'}}",
      "address": "{{int 1 100}} {{street}}",
      "city": "{{city}}",
      "optedin": {{boolean}}
    }
    {{/repeat}}
  ],
  "images": [
    {{#repeat 3}}
    "img{{@index}}.png"
    {{/repeat}}
  ],
  "coordinates": {
    "x": {{float -50 50 '0.00'}},
    "y": {{float -25 25 '0.00'}}
  },
  "price": "\${{int 0 99999 '0,0'}}"
}`
  const result = dummyjson.parse(template);
  const data = JSON.parse(result);
  res.json(data)
})

app.get("/api/name", (req, res) => {
  const template = `{
    "name": "{{firstName}}",
    "age": "{{int 18 65}}"
  }`;
  const result = dummyjson.parse(template);
  const data = JSON.parse(result);
  res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
