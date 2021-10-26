function calculateAllPolygons(annotations, cb){

    function calculatePolygon(vertices, cb){
        area = 0;   // Accumulates area 
        j = vertices.length-1; 

        for (i=0; i<vertices.length; i++)
        { 
        area += (vertices[j].x + vertices[i].x) * (vertices[j].y - vertices[i].y)
        j = i;  //j is previous vertex to i
        }
         cb(area/2);
    }
   
    const result = [];
    annotations.payload.polygons.map((item, index) => {
        calculatePolygon(item.polygon.points, function(area){
            result.push({
                id: index+1,
                author: item.author,
                category: item.category,
                area
            })
          });
         
    })
    cb(result);
}

module.exports = calculateAllPolygons;