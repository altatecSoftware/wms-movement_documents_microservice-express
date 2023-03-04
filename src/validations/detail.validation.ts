import { RequestHandler } from "express";
import { celebrate, Joi, Segments } from "celebrate";

export const createDetail = (): RequestHandler => {
    return celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().guid().required()
        }),
        [Segments.BODY]: Joi.object().keys({
             new_details: Joi.array().items({
                unit_price: Joi.number().required(),
                total_price: Joi.number().required(),
                quantity: Joi.number().required(),
                pending_quantity: Joi.number().optional().default(0),
                inventory_id: Joi.string().guid().required(),
                good_id: Joi.string().guid().required()
            }).required(),
        })
    })
}
