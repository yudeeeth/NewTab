const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('build'));
app.listen(55555);