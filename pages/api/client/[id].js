import nc from 'next-connect';
import {getClientById, updateCliente, deleteCliente} from '../../../controller/clients';

let handler = nc();
handler.get(getClientById);
handler.put(updateCliente);
handler.delete(deleteCliente);

export default handler;
