const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
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
    // 1.设置 httpOnly 来阻止客户端获取更改 cookie 信息。
    res.cookie("account", account, { maxAge: 60000, httpOnly: true })
    res.redirect('/')
  } else {
    res.redirect('/login')
  }
})

app.get('/list', (req, res) => {
  if(!req.cookies.account) {
    res.redirect('/login')
  } else {
    res.sendFile('./list.html', { root: './public' })
  }
})

app.post('/list', (req, res) => {
  const { msg } = req.body
  res.json({msg})
})


app.listen(3000, () => {
  console.log('running....')
})