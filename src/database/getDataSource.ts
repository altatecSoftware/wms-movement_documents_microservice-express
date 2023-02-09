import container from "../start/container";

const postgresql = container.cradle.postgresql
postgresql.connection()
const dataSource = postgresql.getPostgresDataSource()

export default dataSource