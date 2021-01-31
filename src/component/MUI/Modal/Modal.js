import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius:'25px',
    margin:'10%',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display:'flex'
  },
  button:{
    textAlign:'center',
    margin:'2%'
  }
}));

export default function TransitionsModal(props) {

  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.button}>
        <Button color="primary" variant="contained" onClick={handleOpen}>
            {props.heading}
        </Button>
        <Modal
            aria-labelledby="modal"
            aria-describedby="modal"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    {props.children}
                </div>
            </Fade>
        </Modal>
    </div>
  );
}