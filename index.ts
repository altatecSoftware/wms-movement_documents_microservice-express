import "reflect-metadata"
import app from "./src/app"
import { AppDataSource } from "./src/services/db"

const main = async () => {
  try {
    await AppDataSource.initialize()
    console.log('PostgreSQL Database connected')
    app.listen(process.env.SERVER_PORT)
    console.log('Server is listening on port', process.env.SERVER_PORT)
  } catch (err) {
    console.log(err)
  }
}

main()
