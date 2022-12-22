
const requestFormatError = {
  message: "Format error in request", 
  status_code: 400,
  details: "The object structure for the indicated request is not well defined"
}

const invalidDocumentError = {
  message: "Invalid document type", 
  status_code: 400,
  details: "The type of document indicated in the request does not exist"
}

export {
  requestFormatError, 
  invalidDocumentError
}