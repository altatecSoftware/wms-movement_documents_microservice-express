import { RequestHandler } from "express";
import { celebrate, Joi, Segments } from "celebrate";

export const createMovement = (): RequestHandler => {
    return celebrate({
        [Segments.BODY]: Joi.object().keys({
            
        })
    })
}
