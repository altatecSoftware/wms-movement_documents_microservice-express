import * as dotenv from 'dotenv'
dotenv.config()

export default {
    SERVER_PORT: process.env.SERVER_PORT || '3000',
    DOCUMENTS_MICROSERVICE_HOSTNAME: process.env.DOCUMENTS_MICROSERVICE_HOSTNAME,

    AMQP_HOSTNAME: process.env.AMQP_HOSTNAME, 
    AMQP_QUEUE: process.env.AMQP_QUEUE || 'documents-microservice', 

    DB_USERNAME: process.env.DB_USERNAME, 
    DB_PASSWORD: process.env.DB_PASSWORD, 
    DB_NAME: process.env.DB_NAME || 'document_movements', 
    DB_HOSTNAME: process.env.DB_HOSTNAME, 
    DB_PORT: process.env.DB_PORT || 5432
}