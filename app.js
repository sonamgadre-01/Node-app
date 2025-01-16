const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Hello from the node server"
    })
})


app.listen(8080, () => console.log(`Server is running on port 8080`))