// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '54.169.119.211',
      port: 8545,
      network_id: '*', // Match any network id
      // gasPrice : 10000,
      // gas : 10000
    }
  }
}
