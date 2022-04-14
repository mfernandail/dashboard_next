import { useEffect, useState } from 'react';
import GridClients from '../components/GridClients';
import Layout from '../components/Layout';

export default function Clients() {
  const [data, setData] = useState([]);
  const url = 'https://www.ag-grid.com/example-assets/olympic-winners.json';

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  console.log(data)
  
  return (
    <Layout
      pageTitle = "Clients"
      titleNav = "Clients"      
    >
      <GridClients data={data} />
    </Layout>
  )
}

// export async function getServerSideProps(context) {
//   const develop = process.env.NODE_ENV ?  'http://localhost:3001' : 'https://';

//   console.log(develop)
//   const res = await fetch(`${develop}/api/client`);
//   // const res = await fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
//   const data = await res.json();
//   return{
//     props: {
//       data
//     }
//   }
// }