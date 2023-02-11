import { InboundOrderService, OutboundOrderService } from "../services"

const getServiceByDocumentType = (order_type: string, InboundOrderService: InboundOrderService, OutboundOrderService: OutboundOrderService) => {
    const orderTypes = {
        'inbound-order': InboundOrderService,
        'outbound-order': OutboundOrderService
    }
    
    for (let key in orderTypes){
        if(key === order_type){
            return orderTypes[key]
        }
    }
      
    return ''
}

export { getServiceByDocumentType } 