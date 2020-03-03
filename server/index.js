const express = require('express'),
    cors = require('cors'),
    port = 4000,
    bc = require('./controllers/books_controller')

const app = express();

app.use(express.json())

app.get('/api/books', bc.read)
app.post('/api/books', bc.create)
app.put('/api/books/:id', bc.update)
app.delete('/api/books/:id', bc.delete)




app.listen(port, () => console.log(` WE RUNNING ON ${port}`))

