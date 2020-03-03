const books = []

let id = 0

module.exports = {
    read: (req, res) => {
        res.status(200).send(books)
    },
    create: (req, res) => {
        const {title, author} = req.body
        let book = {
            id,
            title,
            author
        }
        books.push(book)
        id++
        res.status(200).send(books)
    },
    update: (req, res) => {
        let bookObj = books.find(element => +req.params.id === element.id)

        bookObj = {
            id: bookObj.id,
            title: req.body.title || bookObj.title,
            author: req.body.author || bookObj.author
        }
        res.status(200).send(books)
    },
    delete: (req, res) => {
        let index = books.findIndex(element => +req.params.id === element.id)
        // if(index === -1){
        //     res.status(500).send('ITEM NOT FOUND')
        // }
        books.splice(index, 1)
        res.status(200).send(books)
    }
}