const axios = require('axios')

module.exports.getLayout = () => {
  return axios.post('http://127.0.0.1:3031/batch', {
    header: {
      name: 'Header',
      data: {
        title: 'Wizeline',
        links: [
          {
            url: 'https://www.wizeline.com/',
            text: 'Home'
          },
          {
            url: 'https://github.com/airbnb/hypernova',
            text: 'Hypernova'
          }
        ]
      }
    }
  })
    .then(({ data }) => {
      return data.results
    })
}