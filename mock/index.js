const Mock = require('mockjs')

const APIType = {
  API_DEMO: '/api/demo',
  API_LOGIN: '/api/login',
  API_GET_USER_INFO: '/api/get_user_info',
}
const Dashboard = Mock.mock({
  'sales|8': [
    {
      'name|+1': 2008,
      'Clothes|200-500': 1,
      'Food|180-400': 1,
      'Electronics|300-550': 1,
    },
  ],
})

const Login = Mock.mock({
  code: 0,
  msg: 'success',
  data: {
    name: '@cname',
    phone: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
  },
})

const GetUserInfo = Mock.mock({
  code: 0,
  msg: 'success',
  data: {
    name: '@cname',
    phone: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
  },
})

module.exports = (app) => {
  // 监听http请求
  app.get(APIType.API_DEMO, (rep, res) => {
    // 每次响应请求时读取mock data的json文件
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Dashboard)
  })

  app.get(APIType.API_LOGIN, (rep, res) => {
    res.json(Login)
  })

  app.get(APIType.API_GET_USER_INFO, (rep, res) => {
    res.json(GetUserInfo)
  })
}
