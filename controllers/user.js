const { response, request } = require('express')



const usuariosGet =  (req=request, res = response) => {
    const {q, nombre, apikey} = req.query;
    res.json({
      msg: "Get api - Controlador",
      q,
      nombre,
      apikey
    });
  }
const usuariosPost= (req, res) => {
    
    const {Nombre, Edad} = req.body;

    res.status(201).json({
      msg: "post api - Controlador",
      nombre: Nombre,
      edad : Edad
    });
  }
const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.status(400).json({
      msg: "put api - Controlador",
      id: id
    });
  }
const usuariosPatch = (req, res) => {
    res.json({
      msg: "patch api - Controlador",
    });
  }
const usuariosDelete =( req, res) => {
    res.json({
      msg: "delete api - Controlador",
    });
  }



  module.exports= {
      usuariosGet,
      usuariosPost,
      usuariosPut,
      usuariosPatch,
      usuariosDelete
  }