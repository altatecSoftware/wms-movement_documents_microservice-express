import { RequestHandler } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { documentTypes } from "../utils";

export const getAllDocument = (): RequestHandler => {
    return celebrate({
        [Segments.BODY]: Joi.object().keys({
            take: Joi.number(),
            page: Joi.number()
        })
    })
}

export const get = (): RequestHandler => {
    return celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().guid().required(),
        })
    })
}

export const createDocument = (): RequestHandler => {
    return celebrate({
        [Segments.BODY]: Joi.object().keys({
            //Document entity
            priority: Joi.number().valid(1, 2, 3).required(),
            description: Joi.string().required(),
            delivery_signature: Joi.string().required(),
            received_signature: Joi.string().required(),
            observations: Joi.string().optional(),
            vehicle: Joi.string().required(),
            license_plate: Joi.string().required(),
            document_type: Joi.string().valid(documentTypes.INBOUND_ORDER, documentTypes.OUTBOUND_ORDER).required(),
            contact_id: Joi.string().guid().required(),
            //Inbound/Outbound orders
            delivered_by: Joi.string().guid().required(),
            received_by: Joi.string().guid().required(),
            destination_warehouse_id: Joi.alternatives().conditional('document_type', {
                is: 'inbound_order',
                then: Joi.string().guid().required(),
                otherwise: Joi.forbidden()
            }),
            origin_warehouse_id: Joi.alternatives().conditional('document_type', {
                is: 'outbound_order',
                then: Joi.string().guid().required(),
                otherwise: Joi.forbidden()
            }),
            //Details
            details: Joi.array().items({
                unit_price: Joi.number().required(),
                total_price: Joi.number().required(),
                quantity: Joi.number().required(),
                pending_quantity: Joi.number().optional().default(0),
                inventory_id: Joi.string().guid().required(),
                good_id: Joi.string().guid().required()
            }).required(),
            //Movements
            area_id: Joi.string().guid().required()
        })
    })
}

export const updateDocument = (): RequestHandler => {
    return celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required().guid()
        }),
        [Segments.BODY]: Joi.object().keys({
            //Document entity
            priority: Joi.number().valid(1, 2, 3).optional(),
            description: Joi.string().optional(),
            delivery_signature: Joi.string().optional(),
            received_signature: Joi.string().optional(),
            observations: Joi.string().optional(),
            vehicle: Joi.string().optional(),
            license_plate: Joi.string().optional(),
            contact_id: Joi.string().guid().optional(),
            //Inbound/Outbound orders
            inbound_order: Joi.object().keys({
                destination_warehouse_id: Joi.string().guid().optional(),
                delivered_by: Joi.string().guid().optional(),
                received_by: Joi.string().guid().optional(),
            }).optional(),
            outbound_order: Joi.object().keys({
                origin_warehouse_id: Joi.string().guid().optional(),
                delivered_by: Joi.string().guid().optional(),
                received_by: Joi.string().guid().optional(),
            }).optional(),
            //Details
            details: Joi.array().items({
                id: Joi.string().guid().required(),
                unit_price: Joi.number().optional(),
                total_price: Joi.number().optional(),
                quantity: Joi.number().optional(),
                pending_quantity: Joi.number().optional().default(0),
                inventory_id: Joi.string().guid().optional(),
                good_id: Joi.string().guid().optional()
            }).optional()
        })
    })
}

export const deleteDocument = (): RequestHandler => {
    return celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required().guid()
        })
    })
}

export const getByType = (): RequestHandler => {
    return celebrate({
        [Segments.BODY]: Joi.object().keys({
            take: Joi.number(),
            page: Joi.number()
        }),
        [Segments.PARAMS]: Joi.object().keys({
            type: Joi.string().valid(documentTypes.INBOUND_ORDER.replace("_", "-"), documentTypes.OUTBOUND_ORDER.replace("_", "-")).required(),
        })
    })
}


