import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// import styles from '../styles/GridClients.module.css';

export default function GridClients({data}) {
  
  return (
    <div className="ag-theme-alpine" style={{height: '100%', width: '100%'}} >
      <AgGridReact         
        enableRangeSelection={true}    
        defaultColDef={{sortable: true, filter: true}}
        rowData={data}
      >
        {/* <AgGridColumn field="athlete"></AgGridColumn>
        <AgGridColumn field="age" editable={true}></AgGridColumn>
        <AgGridColumn field="country" editable={true}></AgGridColumn>
        <AgGridColumn field="year" editable={true}></AgGridColumn>
        <AgGridColumn field="date" editable={true}></AgGridColumn>
        <AgGridColumn field="sport" editable={true}></AgGridColumn>
        <AgGridColumn field="gold" editable={true}></AgGridColumn>
        <AgGridColumn field="silver" editable={true}></AgGridColumn>
        <AgGridColumn field="bronze" editable={true}></AgGridColumn>
        <AgGridColumn field="total" editable={true}></AgGridColumn> */}

        {/* checkboxSelection={true}  */}
        <AgGridColumn field="id"></AgGridColumn>
        <AgGridColumn field="nombre" editable={true}></AgGridColumn>
        <AgGridColumn field="ciudad" editable={true}></AgGridColumn>
      </AgGridReact>
    </div>
  )
}
