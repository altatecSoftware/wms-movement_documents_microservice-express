import { PostgresDataSource } from '../../config/postgresql';
import { EntryOrder } from './model';
const entryOrderRepository = PostgresDataSource.getRepository(EntryOrder);

const createEntryOrder = async (content) => {
  try {
    const { destination_warehouse, delivered_by, received_by } = content;
    const entryOrder = new EntryOrder();

    entryOrder.destination_warehouse = destination_warehouse;
    entryOrder.delivered_by = delivered_by;
    entryOrder.received_by = received_by;

    await entryOrderRepository.save(entryOrder);
    return entryOrderRepository.getId(entryOrder);
  } catch (error) {
    console.log('Error saving to database [EntryOrderService]');
  }
};

export { createEntryOrder };
