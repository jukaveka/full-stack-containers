require("dotenv").config()

const MONGO_URL = process.env.NODE_ENV = "production"
                    ? process.env.MONGO_URL || undefined
                    : undefined
const REDIS_URL = process.env.NODE_ENV = "production"
                    ? process.env.REDIS_URL || undefined
                    : undefined

module.exports = {
  MONGO_URL,
  REDIS_URL
}