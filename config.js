module.exports = {
    port: process.env.PORT || 3000,
    mongodb: process.env.MONGODB_URI || 'mongodb://localhost:27017',
    db: process.env.DB_NAME || 'example',
    secret: process.env.SECRET || 'secretword'

}