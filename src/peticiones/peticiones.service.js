const { response } = require("express");
const { connection } = require("../common/conexion");


const find = (req, res = response) => {
  //hacer query para buscar todos
 connection.query("select * from peticiones",
 [],
 function(error, results, fields){
    (error)
    ? res.json(error)
    : res.json(results)
 });
};

const findOne = (req, res = response) => {
  connection.query("select * from peticiones where id_peticion = ?",
  [req.params.id],
  function(error, results, fields){
    (error)
    ? res.json(error)
    : res.json(results)
  });
};

const create = (req, res = response) => {
  //hacer query para crear uno
  connection.query(`insert into peticiones (descripcion, prioridad,
    edificio,
    salon,
    computador,
    estado,
    correo_solicitante) values (?, ?, ?, ?, ?, ?, ?) `,
  [req.body.descripcion, req.body.prioridad, req.body.edificio, req.body.salon, req.body.computador, req.body.estado, req.body.correo_solicitante],
  function(error, results, fields){
    (error)
    ? res.json(error)
    : res.json(results)
  });
};

const update = (req, res = response) => {
  //hacer query para actualizar uno
  connection.query("update peticiones set descripcion = ?, prioridad = ?, edificio = ?, salon = ?, computador = ?, estado = ?, correo_solicitante = ? where id_peticion = ?",
  [req.query.descripcion, req.query.prioridad, req.query.edificio, req.query.salon, req.query.computador, req.query.estado, req.query.correo_solicitante, req.params.id],
  function(error, results, fields){
    (error)
    ? res.json(error)
    : res.json(results)
  });
};

const remove = (req, res = response) => {
  //hacer query para remover uno
  connection.query("delete from peticiones where id_peticion = ?",
  [req.params.id],
  function(error, results, fields){
    (error)
    ? res.json(error)
    : res.json(results)
  });
};

module.exports = {
  find,
  findOne,
  create,
  update,
  remove,
}