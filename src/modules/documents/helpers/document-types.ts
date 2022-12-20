import { documentTypes } from "../utils/document-types"

//NOTE: ERROR HANDLING JSON.parse(content)
export const knowTypeDocument = (content) => {
    const { document_type } = JSON.parse(content)
    let type = ''
    Object.entries(documentTypes).forEach(([key, value]) => {
      if(document_type === value){ type = value }
    });
    
    return type ? type : "no_document"
  
}