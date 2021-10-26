const fs = require('fs').promises;
const calculateAllPolygons = require("../utils/calculatePolygons");
const isAnnotationsValid = require("../utils/validate");

exports.calculate_polygons = async (req, res) => {
    try {
        if (!req.files){
          return res.status(400).json({ message :'No files were uploaded.'});
        } else {
          const fileName = `${Date.now()}_${req.files.file.name}}`
          await fs.writeFile(`./uploads/${fileName}`,req.files.file.data,);
          const data = await fs.readFile(`./uploads/${fileName}`, 'utf8');
          const isValid = await isAnnotationsValid(JSON.parse(data));
          if(isValid){
          calculateAllPolygons(JSON.parse(data), result => res.json(result));
        }else{
            res.status(422).json("Invalid annotatoins!");
        }
          
        }
      } catch (e) {
        res.status(500).json(e)
      }
};
