const express = require("express");
const peticiones = express.Router();
const { findOne, find, create, update, remove } = require("./peticiones.service");

peticiones.use(function timeLog(req,res,next){
    next();
});


peticiones.get(
    "/",
    find
);

peticiones.get(
    "/:id",
    findOne
);

peticiones.post(
    "/",
    create
);

peticiones.put(
    "/:id",
    update
);

peticiones.delete(
    "/:id",
    remove
);


module.exports ={
    peticiones
};
