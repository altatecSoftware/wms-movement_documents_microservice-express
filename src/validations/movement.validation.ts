import { RequestHandler } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { statusTypes } from "../utils";

export const createMovement = (): RequestHandler => {
    return celebrate({
        [Segments.BODY]: Joi.object().keys({
            status: Joi.string().required().valid(
                statusTypes.APPROVED, statusTypes.CANCELLED, statusTypes.DELIVERED,
                statusTypes.DRAFTED, statusTypes.EMITTED, statusTypes.PARTIALLY_DELIVERED,
                statusTypes.PROCESS_TO_CONFIRM
            ),
            area_id: Joi.string().required().guid()
        })
    })
}
