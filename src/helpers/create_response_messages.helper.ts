
const createSuccessMessage = ({status, content}: any) => {

    const message = {
        status, 
        data: content
    }

    return message
}
const createErrorMessage = ({status, msg}: any) => {
    const message = {
        status, 
        message: msg
    }

    return message
}

export { createSuccessMessage, createErrorMessage }