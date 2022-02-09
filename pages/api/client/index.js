import nc from 'next-connect';
import {getAllClients, addClient} from '../../../controller/clients';

let handler = nc();
handler.post(addClient);
handler.get(getAllClients);

export default handler;
