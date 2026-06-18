require("dotenv").config()

console.log(process.env.NODE_ENV)

const MONGO_URL = process.env.NODE_ENV = "production"
                    ? process.env.MONGO_URL || undefined
                    : undefined
const REDIS_URL = process.env.NODE_ENV = "production"
                    ? process.env.REDIS_URL || undefined
                    : undefined

module.exports = {
  MONGO_URL,//: 'mongodb://the_username:the_password@localhost:3456/the_database',
  REDIS_URL//: '//localhost:6378'
}