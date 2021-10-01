express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.json());

app.get('*', (req,res) => res.status(200).sendFile(path.join(__dirname, '../client/index.html')));

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT)
});