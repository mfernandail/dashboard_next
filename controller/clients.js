import { executeQuery } from '../config/db';

const getAllClients = async (req, res) => {
  try {
    const sql = 'SELECT * FROM cliente';
    const data = await executeQuery(sql, []);
    res.send(data);
  } catch (error) {
    res.status(500).json(error);
  }
}
const getClientById = async (req, res) => {
  try {
    const {id} = req.query;
    const sql = 'SELECT * FROM cliente WHERE id = ?';
    const data = await executeQuery(sql, [id]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}
const addClient = async (req, res) => {
  try {
    const sql = 'INSERT INTO cliente SET ?';
    const objData = {
      nombre: req.body.nombre,
      ciudad: req.body.ciudad
    }
    const data = await executeQuery(sql, [objData])
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}
const updateCliente = async (req, res) => {
  try {
    const {id} = req.query;
    const objData = {
      nombre: req.body.nombre,
      ciudad: req.body.ciudad
    }
    const sql = 'UPDATE cliente SET ? WHERE id = ?';
    const data = executeQuery(sql, [objData, id]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}
const deleteCliente = async (req, res) => {
  try {
    const {id} = req.query;
    const sql = 'DELETE FROM cliente WHERE id = ?';
    const data = executeQuery(sql, [id]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}

export {
  getAllClients,
  getClientById,
  addClient,
  updateCliente,
  deleteCliente
}
