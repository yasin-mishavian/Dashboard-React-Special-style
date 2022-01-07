import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {FaUserAlt} from 'react-icons/fa';
import {FaHome} from 'react-icons/fa';
import {FaRegEnvelope} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import {FaChartLine} from 'react-icons/fa';
import {FaChartBar} from 'react-icons/fa';
import {FaWrench} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import {RiMessage2Fill} from 'react-icons/ri';
import {FaBell} from 'react-icons/fa';
import {ImExit} from 'react-icons/im';
import {BsTable} from 'react-icons/bs';
import {MdMenu} from 'react-icons/md';
import yasin from './../assets/img/yasin.jpg';
import Progress from '../Progressbar/Progress';
import Card from '../Cards/Card';
import Tables from '../Table/Tables';
import Activities from '../Activity/Activities';
import Footer from '../Footer/Footer'


const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Dashboard(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const Exit = () => {
    alert('heloo')

  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /*----------------------------------------------------   SideBar   ----------------------------------------------------*/

  const drawer = (
    <div className='sidebar-Style1'>
      <div className={classes.toolbar} />
        <div className='picture-Style2 my-2 mx-2'>
            <img className='rounded-circle my-3 me-2 picture-Style' src={yasin}  />
            <i className=' text-white px-3 h4'>yasin mishavian</i>                                                                        
        </div> 
      <List className='ms-1'>
            <ListItem className='sidebar-Style3 my-auto py-3'>
                <ListItemIcon><a className='text-white text-Style'> {<FaHome className='ms-3 fw-bold text-white'/>}صفحه اصلی </a></ListItemIcon>
            </ListItem>
            <ListItem className='sidebar-Style3 my-auto py-3'>
                <ListItemIcon><a className='text-white text-Style'> {<FaWrench className='ms-3 fw-bold text-white'/>}تنظیمات </a></ListItemIcon>
            </ListItem>
            <ListItem  className='sidebar-Style3 my-auto py-3 ' >
                <ListItemIcon><a className='text-white text-Style'> {<FaUserAlt  className='ms-3 fw-bold text-white'/>}پروفایل  </a></ListItemIcon>
            </ListItem>
            <ListItem  className='sidebar-Style3 my-auto py-3' >
                <ListItemIcon><a className='text-white text-Style'> {<FaRegEnvelope className='ms-3 fw-bold text-white'/>}پیام ها</a></ListItemIcon>
            </ListItem>
            <ListItem  className='sidebar-Style3 my-auto py-3' >
                <ListItemIcon><a className='text-white text-Style'> {<FaShoppingCart className='ms-3 fw-bold text-white'/>}فروش </a></ListItemIcon>
            </ListItem>
            <ListItem  className='sidebar-Style3 my-auto py-3 d-none d-lg-inline-block' >
                <ListItemIcon><a className='text-white text-Style'> {<FaChartLine className='ms-3 fw-bold text-white'/>}تحلیل</a></ListItemIcon>
            </ListItem>
            <ListItem  className='sidebar-Style3 my-auto py-3 d-none d-lg-inline-block' >
                <ListItemIcon><a className='text-white text-Style'> {<FaChartBar className='ms-3 fw-bold text-white'/>}نمودار </a></ListItemIcon>
            </ListItem>
            <ListItem  className='sidebar-Style3 my-auto py-3 d-none d-lg-inline-block' >
                <ListItemIcon><a className='text-white text-Style'> {<BsTable className='ms-3 fw-bold text-white'/>}جدول</a></ListItemIcon>
            </ListItem>          
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

      /*----------------------------------------------------   Navbar   ----------------------------------------------------*/

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color='transparent' position="fixed" className={classes.appBar}>
        <Toolbar className='container-fluid bgNav-Style '>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            {<MdMenu className='text-white'/>}
          </IconButton>
          <Typography className='container-fluid' variant="h6" noWrap>
            <div className='row justify-content-around'>      

              <div className='col-4 '>
                <h1 className='h4 mt-2 text-warning'>داشبورد</h1>
              </div>

              <div className='col-6'>
                <form className=' d-none d-md-inline'>     
                  <button className='btn btn-light btn-Style ms-1'>{<FaSearch/>}</button>                   
                  <input className='text-light input-Style mt-1' type={'text'} ></input>
                  {<RiMessage2Fill className='ms-5 ms-md-4 me-5 d-none d-lg-inline text-light img-Style2'/>}
                  {<FaBell className='ms-5 me-md-4 d-none d-lg-inline text-light img-Style'/> }
                </form>
              </div>

              <div data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='col-2 text-center'>                   
                  {<ImExit  className='mx-atuo mt-2 me-4 text-danger img-Style3'/>}
              </div>
              <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      آیا میخواهید خارج شوید؟
                    </div>
                    <div className="modal-footer">
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal">میمانم</button>
                      <a href='#' class="btn btn-danger">خارج میشوم</a>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar}>

          <Card/>
          <Progress/>
          <Tables/>
          <Activities/>
          <Footer/>
          
        </div>
      </main>
    </div>
  );
}

export default Dashboard;