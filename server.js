

const express = require('express');
const app = express();

app.use(express.static('./dist/ngtreeassignment'));

app.get('/*', function(req, res) {

    res.sendFile('index.html', {root: './dist/ngtreeassignment/'}
  );
  });
app.listen(process.env.PORT || 4200);
