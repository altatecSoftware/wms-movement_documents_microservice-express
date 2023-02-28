import { RequestHandler } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { documentTypes, statusTypes } from "../utils";

export const createDocument = (): RequestHandler => {
    return celebrate({
        [Segments.BODY]: Joi.object().keys({
            //Document entity
            priority: Joi.number().required(),
            description: Joi.string().required(),
            delivered_by: Joi.string().guid().required(),
            received_by: Joi.string().guid().required(),
            observations: Joi.string().optional(),
            vehicle: Joi.string().required(),
            license_plate: Joi.string().required(),
            document_type: Joi.string().valid(documentTypes.INBOUND_ORDER, documentTypes.OUTBOUND_ORDER).required(),
            contact_id: Joi.string().guid().required(),
            //Order Entity
            delivery_signature: Joi.string().required(),
            received_signature: Joi.string().required(),
            origin_warehouse_id: Joi.alternatives().conditional('document_type', {
                is: 'outbound_order',
                then: Joi.string().guid().required(),
                otherwise: Joi.forbidden()
            }),
            destination_warehouse_id: Joi.alternatives().conditional('document_type', {
                is: 'inbound_order',
                then: Joi.string().guid().required(),
                otherwise: Joi.forbidden()
            }),
            //Details
            details: Joi.array().items({
                unit_price: Joi.number().required(),
                total_price: Joi.number().required(),
                quantity: Joi.number().required(),
                pending_quantity: Joi.number().optional(),
                inventory_id: Joi.string().guid().required(),
                good_id: Joi.string().guid().required()
            }),
            //Movements
            status: Joi.string().required().default("process to confirm"),
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
            priority: Joi.number().required(),
            description: Joi.string().required(),
            delivered_by: Joi.string().guid().required(),
            received_by: Joi.string().guid().required(),
            observations: Joi.string().optional(),
            vehicle: Joi.string().required(),
            license_plate: Joi.string().required(),
            contact_id: Joi.string().guid().required(),
            //Order Entity
            delivery_signature: Joi.string().required(),
            received_signature: Joi.string().required(),
            //Details
            details: Joi.array().items({
                unit_price: Joi.number().required(),
                total_price: Joi.number().required(),
                quantity: Joi.number().required(),
                pending_quantity: Joi.number().optional(),
                inventory_id: Joi.string().guid().required(),
                good_id: Joi.string().guid().required()
            }),
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