import { Box, TextField } from '@mui/material'
import React from 'react'
import "./Profile.css"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import HomeTable from '../Table/table';


export default function Profile() {
  const [userName, setUserName] = React.useState("username");
  const [edituserName, setEditUserName] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const handleClose = (
  //   event: {},
  //   reason: "backdropClick" | "escapeKeyDown"
  // ) => {
  //   if (reason === "backdropClick") {
  //     console.log(reason);
  //   } else {
  //     setOpen(false);
  //   }
  // };

  const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:{ lg:"30%", sm:"80%", md:"50%", xs:"90%"},
    bgcolor:"#151a1e",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

  const handleBackdropClick = () => {
    //these fail to keep the modal open
    return false;
  };
  return (
    <>
    <Box className='profile_box mt-5 mb-5 side_nav_open_main_com'>
      <Box>
      <img height={"10%"} width="10%" src="Images/profile.svg" />
      <Typography className='mt-3' variant='h4'>{userName}<span style={{cursor:"pointer"}} className='ms-2' onClick={handleOpen}> <EditOutlinedIcon/></span></Typography>
      <Typography className='mt-3' variant='p' color={"gray"}>0xdF390EFF9643D8c2978ea8</Typography>
      </Box>
    </Box>

    <div>
    <Modal 
     disableEscapeKeyDown
     onBackdropClick={handleBackdropClick}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="mui_modal_box" >
        <Typography id="modal-modal-title" variant="h6" component="h2" className='text-white mb-2'>
          Edit Profile
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <TextField onChange={(e)=>setEditUserName(e.target.value)} defaultValue={userName} inputProps={{ style: { color: "white" ,border:"red" } }}  fullWidth   focused  label="username" variant="outlined" />
        </Typography>
        <div style={{textAlign:"right", marginTop:"20px"}}>
        <Button variant="contained"  color="secondary" className='m-2' onClick={handleClose}>
              Cancel
        </Button>
        <Button variant="contained"   color="success" onClick={()=>{setUserName(edituserName);handleClose()}}>
              Save
        </Button>
        </div>
        
      </Box>
    </Modal>
    
  </div>
  <div className='mt-5'>
  <HomeTable />
  </div>
  </>
  )
}
