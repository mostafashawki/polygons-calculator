const Joi = require("joi");
const annotationSchema = require("../schemas/annotation");

 async function isAnnotationsValid (annotations) {
    try {
        const result = await annotationSchema.validateAsync(annotations);
        if (result.error) {
            console.log("invalid");
            return false
          } else {
            console.log("valid");
            return true;
          }
    }
    catch (err) {
        console.log('error ***** ', err)
        return false;
     }
}

module.exports = isAnnotationsValid;