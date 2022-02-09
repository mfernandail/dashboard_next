import GridClients from '../components/GridClients';
import Layout from '../components/Layout';

export default function Clients({data}) {
  
  return (
    <Layout
      pageTitle = "Clients"
      titleNav = "Clients"      
    >
      <GridClients data={data} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const develop = process.env.NODE_ENV ?  'http://localhost:3000' : 'https://';
  const res = await fetch(`${develop}/api/client`);
  // const res = await fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
  const data = await res.json();
  return{
    props: {
      data
    }
  }
}