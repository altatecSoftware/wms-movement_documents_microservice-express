
export interface IDocument {
    priority: number,
    description: string, 
    delivery_signature: string, 
    received_signature: string, 
    observations?: string, 
    vehicle: string, 
    license_plate: string, 
    document_type: string,
    contact_id: string, 
}