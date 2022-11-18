const express = require('express');
const app = express();
const cors = require("cors");
const { peticiones } = require("./peticiones/peticiones.module");





app

  .use(cors())
  .use(express.json())
  .use("/peticiones", peticiones)



  app.listen(3000)
