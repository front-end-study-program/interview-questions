const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.engine('.html', ejs.__express)

app.set('views', './views');

app.set('view engine', 'html')

// 模拟的数据库
const dataBox = {}

app.get('/', (req, res) => {
  res.render('index', { title: '首页', name: dataBox.name })
})

app.get('/create', (req, res) => {
  res.render('create', { title: 'create' })
})


app.post('/create', (req, res) => {
  const { name } = req.body
  if(name) {
    dataBox.name = name
    res.redirect('/')
  } else {
    res.send({ msg: '请输入信息' })
  }
})

app.listen(3001, () => {
  console.log('running....')
})


