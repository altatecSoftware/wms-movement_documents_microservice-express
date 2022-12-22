import "reflect-metadata"
import app from "./src/app"
import { PostgresDataSource  } from "./src/config/postgresql"
import { amqpConnection } from "./src/config/rabbitmq"

const main = async () => {
  const port = process.env.SERVER_PORT ?? 3000
  try {
    await PostgresDataSource.initialize()
    console.log('PostgreSQL Database connected')
    await amqpConnection()
    console.log('RabbitMq connected')
    app.listen(port)
    console.log('Server is listening on port', port)
  } catch (err) {
    console.log(err)
  }
}

main()
