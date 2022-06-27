const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const fs = require('fs')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: './public' })
})

app.get('/login', (req, res) => {
  res.sendFile('./login.html', { root: './public'})
})

app.post('/login', (req, res) => {
  const { account, password } = req.body
  if(account && password) {
    res.cookie("account", account, { maxAge: 60000 })
    res.redirect('/')
  } else {
    res.redirect('/login')
  }
})

app.get('/list', (req, res) => {
  if(!req.cookies.account) {
    res.redirect('/login')
  } else {
    const { msg } = req.query
    const content = fs.readFileSync('./public/list.html', 'utf-8')
    res.send(content + msg)
  }
})


app.listen(3000, () => {
  console.log('running....')
})