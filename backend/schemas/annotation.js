const Joi = require("joi");

const annotationSchema = Joi.object().keys({
  payload: Joi.object().keys({
    area: Joi.number(),
    config: Joi.binary(),
    points: Joi.array(),
    texts: Joi.array(),
    polygons: Joi.array().items(
      Joi.object().keys({
        author: Joi.string().email(),
        category: Joi.string(),
        polygon: Joi.object().keys({
          points: Joi.array().items(
            Joi.object().keys({
              x: Joi.number().integer(),
              y: Joi.number().integer(),
            })
          ),
        }),
      })
    ),
  }),
  type: Joi.string(),
  version: Joi.string(),
});

module.exports = annotationSchema;