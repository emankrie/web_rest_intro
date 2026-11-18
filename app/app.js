const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;
const version = 'v1';
const JWT_SECRET = 'cs@bulme';  // don't ever do this in production!!!

app.get(`/api/${version}/`, (req, res) => {
  res.send('Hello World!');
});

app.post(`/api/${version}/`, (req, res) => {
  res.send('Got a POST request');
});

app.put(`/api/${version}/user`, (req, res) => {
  res.send('Got a PUT request at /user');
});

app.delete(`/api/${version}/user`, (req, res) => {
  res.send('Got a DELETE request at /user');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
