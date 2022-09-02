import * as React from 'react';
import {Paper , Avatar , Grid , Button} from '@mui/material';
import http from '../../services/http.service';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect ,useState } from 'react';



const columns = [
  
  { field: 'id', headerName: '#', width: 70 },
  { field: 'title', headerName: 'نام محصول', width: 130 },
{field: 'thumbnail', headerName: 'تصویر محصول' , width: 130, 
renderCell: (params) => <Avatar  src={params.value} alt={params.row.title} /> ,
  },
  { field: 'description', headerName: 'توضیحات ', width: 130 },
  {field: 'price',headerName: 'قیمت',type: 'number',width: 90,},
  {
    field: 'discountPercentage',
    headerName: 'درصد تخفیف',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    filed: 'Actions',
    headerName: 'عملیات',
    width: 100,
    renderCell: (params)=>      <Button variant='contained' color='error'
    >حذف</Button>,
    renderCell: (params)=>      <Button variant='contained' color='warning'
    > ویرایش</Button>,
    
  }
];




export default function Dashboard() {
  const [products, setProducts] = useState([]);

  const getProducts = async ()=>{
    const {data} = await http.get('/products');
    console.log(data);
    setProducts(data)
  }
  useEffect(() => {

    getProducts();
  } , []);
    return (

            <Grid container spacing={2}>
             
              <Grid item xs={12} md={10} lg={10}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 500,
                    width:"100%"
                  }}
                >
                     <div  style={{ height: 800, width: '100%' }} >
      <DataGrid
        rows={products}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        // checkboxSelection
        
      />
    </div>
                </Paper>
              </Grid>
 
            </Grid>



      

  );
}


 
