import Layout from '../components/Layout';
import useForm from '../hooks/useForm';

export default function NewClient() {
  const {values, handleInputChange} = useForm({
    nombre: 'Marge',
    ciudad: 'Springfild'
  });

  const {nombre, ciudad} = values;

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/client', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // const data = await res.json();
    // console.log(data);    
  }

  return (
    <Layout
      pageTitle = "New client"
      titleNav = "New client"      
    >
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text"
          value={nombre}
          name="nombre"
          onChange={handleInputChange}
        />
        <input 
          type="text"
          value={ciudad}
          name="ciudad"
          onChange={handleInputChange}
        />
        <input
          type="submit"
          value="Enviar"
        />
      </form>
    </Layout>
  )
}