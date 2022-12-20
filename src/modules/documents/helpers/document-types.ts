import { documentTypes } from "../utils/document-types"

//NOTE: ERROR HANDLING JSON.parse(content)
export const knowTypeDocument = (content) => {
    const { document_type } = JSON.parse(content)
    Object.entries(documentTypes).forEach(([key, value]) => {
      if(document_type === value){ return value }
    });
    
  return "no_document"
}