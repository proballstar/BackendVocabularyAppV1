import express, {Express} from 'express'
import mongoose from 'mongoose'
import {Server, createServer} from 'http'

let server: Express = express()
let app: Server = createServer(server)

let PORT: number = 8080

app.listen(PORT, () => {
    let currDate: number = new Date().getTime()
    console.log(`App listening on port ${PORT}`)
    let finalDate: number = new Date().getTime()
})