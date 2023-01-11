import { PostreSQL } from "../../database/postgresql";
import { Document } from "./model";
const postgres = new PostreSQL()
const documentRepository = postgres.getPostgresDataSource().getRepository(Document);

const getAllDocuments = (content) => {
  console.log(`Received message from getAllDocuments`);
  console.log(content);
};

const getAllDocumentsByType = (content) => {
  console.log(`Received message from getAllDocumentsByType`);
  console.log(content);
};

const getDocumentById = (content) => {
  console.log(`Received message from getDocumentById`);
  console.log(content);
};

const createDocument = async (content, orderId, document_type) => {
  const {
    contact_id, warehouse_manager, area_id, priority, petitioner, approved_by, description, delivery_signature,
    received_signature, Observations, vehicle, license_plate, 
  } = content;

  try {
    const document = new Document()
    document.document_type = document_type
    document.contact_id = contact_id
    document.warehouse_manager = warehouse_manager
    document.area_id = area_id, 
    document.priority = priority
    document.petitioner = petitioner
    document.approved_by = approved_by
    document.description = description
    document.delivery_signature = delivery_signature
    document.received_signature = received_signature
    document.order_code = orderId
    document.Observation = Observations
    document.vehicle = vehicle
    document.license_plate = license_plate
  
    await documentRepository.save(document)

  } catch (error) {
    console.log("Error saving to database [DocumentService]\n", error)
  }

};

const updateDocument = (content) => {
  console.log(`Received message from updateDocument`);
  console.log(content);
};

const deleteDocument = (content) => {
  console.log(`Received message from deleteDocument`);
  console.log(content);
};

export {
  getAllDocuments,
  getAllDocumentsByType,
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument,
};
