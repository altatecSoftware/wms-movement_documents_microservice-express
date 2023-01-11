import { PostreSQL } from '../../database/postgresql';
import { ExitOrder } from './model';
const postgres = new PostreSQL()
const exitOrderRepository = postgres.getPostgresDataSource().getRepository(ExitOrder);

const createExitOrder = async (content) => {
  try {
    const { origin_warehouse, delivered_by, received_by } = content;
    const exitOrder = new ExitOrder();

    exitOrder.origin_warehouse = origin_warehouse;
    exitOrder.delivered_by = delivered_by;
    exitOrder.received_by = received_by;

    await exitOrderRepository.save(exitOrder);
    return exitOrderRepository.getId(exitOrder);
  } catch (error) {
    console.log('Error saving to database [ExitOrderService]');
  }
};

export { createExitOrder };
