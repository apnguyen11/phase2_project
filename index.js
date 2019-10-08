const fs = require('fs')
const mustache = require('mustache')

const express = require('express')
const app = express()

const dbConfigs = require('./knexfile.js')
const db = require('knex')(dbConfigs.development)

const port = 3000;

// Express.js Endpoints

const homepageTemplate = fs.readFileSync('./templates/homepage.mustache', 'utf8')

app.use(express.urlencoded())

app.get('/', function(req, res){
    getAllTwots()
})

//------------------------------------------------------------------
//Database Queries

const getAllTwotsQuery = `
    SELECT *
    FROM twots
`

function getAllTwots(){
    return db.raw(getAllTwotsQuery)
}