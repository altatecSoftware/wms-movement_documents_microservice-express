import "reflect-metadata"
import app from "./src/app"
import { AppDataSource } from "./src/db"

const main = async () => {
  try {
    await AppDataSource.initialize()
    console.log('PostgreSQL Database connected')
    app.listen(process.env.PORT)
    console.log('Server is listening on port', process.env.PORT)
  } catch (err) {
    console.log(err)
  }
}

main()
