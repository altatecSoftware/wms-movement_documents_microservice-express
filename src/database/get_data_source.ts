import container from "../start/container";

const dataSource = container.cradle.postgresql
dataSource.initialize()
      .then(() => {
        console.log('Postgresql DataSource has been initialized');
      })
      .catch((err) => {
        console.error('***** Error during Data Source initialization *****\n', err);
      });

export default dataSource