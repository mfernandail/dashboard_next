import { useMemo, useState } from 'react';
import { AgGridReact} from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// import styles from '../styles/GridClients.module.css';

export default function GridClients({data}) {

  const replaceAccents = (value) => {
    return value
      .replace(new RegExp('[àáâãäå]', 'g'), 'a')
      .replace(new RegExp('æ', 'g'), 'ae')
      .replace(new RegExp('ç', 'g'), 'c')
      .replace(new RegExp('[èéêë]', 'g'), 'e')
      .replace(new RegExp('[ìíîï]', 'g'), 'i')
      .replace(new RegExp('ñ', 'g'), 'n')
      .replace(new RegExp('[òóôõøö]', 'g'), 'o')
      .replace(new RegExp('œ', 'g'), 'oe')
      .replace(new RegExp('[ùúûü]', 'g'), 'u')
      .replace(new RegExp('[ýÿ]', 'g'), 'y')
      .replace(new RegExp('\\W', 'g'), '');
  };
  
  const filterParams = {
    textFormatter: replaceAccents,
  };

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 200,
      resizable: true,
      floatingFilter: true,
    };
  }, []);

  const [columnDefs] = useState([
    { field: 'athlete',
    filter: 'agSetColumnFilter',
    filterParams: filterParams,},
    { field: 'age', filter: 'agNumberColumnFilter' },
    { field: 'country', filter: 'agNumberColumnFilter' },
    { field: 'year', filter: 'agNumberColumnFilter' },
    { field: 'date', filter: 'agNumberColumnFilter' },
    { field: 'sport', filter: 'agNumberColumnFilter' },
    { field: 'gold', filter: 'agNumberColumnFilter' },
    { field: 'silver', filter: 'agNumberColumnFilter' },
    { field: 'bronze', filter: 'agNumberColumnFilter' },
    { field: 'total', filter: 'agNumberColumnFilter' }
])

  
  return (
    <div className="ag-theme-alpine" style={{height: '100%', width: '100%'}} >
      <AgGridReact         
        enableRangeSelection={true}    
        // defaultColDef={{sortable: true, filter: true}}
        defaultColDef={defaultColDef}
        rowData={data}
        columnDefs={columnDefs}
      ></AgGridReact>
    </div>
  )
}
