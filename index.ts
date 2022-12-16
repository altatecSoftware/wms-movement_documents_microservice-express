import "reflect-metadata"
import app from "./src/app"
import { AppDataSource } from "./src/services/postgresql"

const main = async () => {
  const port = process.env.SERVER_PORT ?? 3000
  try {
    await AppDataSource.initialize()
    console.log('PostgreSQL Database connected')
    app.listen(port)
    console.log('Server is listening on port', port)
  } catch (err) {
    console.log(err)
  }
}

main()
