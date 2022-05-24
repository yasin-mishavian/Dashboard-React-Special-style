import React from 'react'
import './Sidebar.scss';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {FaUserAlt} from 'react-icons/fa';
import {FaHome} from 'react-icons/fa';
import {FaRegEnvelope} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import {FaChartLine} from 'react-icons/fa';
import {FaChartBar} from 'react-icons/fa';
import {FaWrench} from 'react-icons/fa';
import {BsTable} from 'react-icons/bs';
import yasin from '../assets/img/yasin.jpg';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: 280,
  }
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
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
  )
}

export default Sidebar