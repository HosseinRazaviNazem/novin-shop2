import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button, ListItemButton } from '@mui/material';
import DataTable from '../../components/Table.component';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';



const drawerWidth = 240;



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: '1s',
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: '1s',
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);



function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

 
  return (

      <Box sx={{ display: 'flex' }}>

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <Box
          sx={{ width: 250 }}
          role="presentation"
          
        >
          <List>
     
              <ListItem  disablePadding>

                <ListItemButton>
                  <ListItemIcon>
                   <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={"مدیریت کالا"} />
                </ListItemButton>
              </ListItem>

              <ListItem  disablePadding>

                <ListItemButton>
                  <ListItemIcon>
                   <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={" مدیریت موجودی"} />
                </ListItemButton>
              </ListItem>
              <ListItem  disablePadding>

                <ListItemButton>
                  <ListItemIcon>
                   <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={"سفارشات"} />
                </ListItemButton>
              </ListItem>
              <ListItem  disablePadding>

                <ListItemButton>
                  <ListItemIcon>
                   <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={"خروج"} />
                </ListItemButton>
              </ListItem>
        
          </List>
        </Box>
      
         
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
                  <DataTable />
                </Paper>
              </Grid>
 
            </Grid>
          </Container>
        </Box>
      </Box>

  );
}

export default function Dashboard() {
  return <DashboardContent />;
}