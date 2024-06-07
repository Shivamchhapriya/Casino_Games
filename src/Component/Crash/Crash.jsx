import {
  Avatar,
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import "../CoinFlip/CoinFlip.css";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
// import { Button } from "bootstrap";
import Button from "@mui/material/Button";
import "./Crash.css"
import { useState } from "react";
// import "."
export default function Crash() {
  const [currency, setCurrency] = React.useState("MATICE");
const[multiplierAmount,setMultiplierAmount] = useState(0.978);
const[multiplierValue,setMultiplierValue] = useState(1.01);
const[amount,setAmount] = useState(1);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const MultiplierMinusClick = () => {
    if (multiplierValue >= 1.11) {
      setMultiplierValue((multiplierValue - 0.10));
    } else {
      alert("Min Amount 1.10");
    }
  };

  const MultiplierPlusClick = () => {
    if (multiplierValue <= 260) {
      setMultiplierValue((multiplierValue + 0.10));
    } else {
      alert("Max Amount is 100");
    }
  };


  const oneByTwoClickMultiplier = () => {
    if (multiplierValue >= 2.22) {
      setMultiplierValue(multiplierValue / 2);
    } else {
      setMultiplierValue(1.01);
    }
  };

  const doubleMultiplierValue = () => {
    if (multiplierValue <= 50) {
      setMultiplierValue(multiplierValue * 2);
    } else {
      setMultiplierValue(100);
    }
  };

  const amountMinusClick = () => {
    if (amount >= 1.11) {
      setAmount((amount - 0.5));
    } else {
      alert("Min Amount 1");
    }
  };

  const amountPlusClick = () => {
    if (amount <= 260) {
      setAmount((amount + 0.5));
    } else {
      alert("Max Amount is 100");
    }
  };


const doubleAmountClick = ()=>{
      if(amount <= 257){
        setAmount(amount * 2)
      }
      else{
        setAmount(514)
      }
  }

  const oneByTwoAmountClick = ()=>{
    if(amount >= 2){
      setAmount(amount / 2)
    }
    else{
      setAmount(1)
    }
}


  return (
    <Box
      style={{ background: "#151a1e" }}
      className="mt-lg-1 mt-sm-2 side_nav_open_main_com"
      sx={{ padding: { lg: "0px 50px", sm: "0px 10px", md: "0px 10px" } }}
    >
      <Box sx={{ display: "flex",pt:2 }}>
        <img  src="Images/crash.svg" />
        <Typography variant="h5" className="ms-1 fw-bolder" style={{ color: "#4690FF" }}>
          Crash
        </Typography>
      </Box>
      <Box className="mt-4 coinflip_box rounded-4">
        <Grid container spacing={0}>
          <Grid lg={3} md={12} sm={12} style={{borderRight:"2px solid #2d373f"}} className="p-3">
            <Box
              sx={{
                padding: { lg: "20px 20px", sm: "5px 10px", md: "5px 10px" },
              }}
            >
              <Typography variant="h6" className="text_color mx-3">
                <PaidOutlinedIcon className="" />
                <span className="fw-bold"> Currency</span>
              </Typography>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  className="coinflip_box  pt-0 pb-0"
                  style={{ borderRadius: "20px" ,height:'50px' }}
                  sx={{
                    width: "200px",

                    "& fieldset": { border: "none" },
                    background: "#101316",
                    mx: 3,
                  }}
                  value={currency}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem
                    value={"MATICE"}
                    sx={{ background: "#101316" }}
                    className="menu_item"
                  >
                    {" "}
                    <Typography
                      variant="h-2"
                      className="text_color"
                      sx={{ display: "flex" }}
                    >
                      {" "}
                      <Avatar
                        sx={{
                          width: "30px",
                          height: "30px",
                          marginRight: "15px",
                        }}
                        src="Images/matice.svg"
                      />{" "}
                      MATICE{" "}
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    value={"WETH"}
                    sx={{ background: "#101316" }}
                    className="menu_item"
                  >
                    {" "}
                    <Typography
                      variant="h-2"
                      className="text_color"
                      sx={{ display: "flex" }}
                    >
                      {" "}
                      <Avatar
                        sx={{
                          width: "30px",
                          height: "30px",
                          marginRight: "15px",
                        }}
                        src="Images/weth.svg"
                      />{" "}
                      WETH{" "}
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    value={"BERYL"}
                    sx={{ background: "#101316" }}
                    className="menu_item"
                  >
                    {" "}
                    <Typography
                      variant="h-2"
                      className="text_color"
                      sx={{ display: "flex" }}
                    >
                      {" "}
                      <Avatar
                        sx={{
                          width: "30px",
                          height: "30px",
                          marginRight: "15px",
                        }}
                        src="Images/beryl.svg"
                      />{" "}
                      BERYL{" "}
                    </Typography>
                  </MenuItem>
                </Select>
              </FormControl>
              <Box
                sx={{
                  marginTop: "-3rem",
                  color: "#2d373f",
                  position: "fixed",
                  mx: "20px",
                }}
                width="2px"
                height={530}
              ></Box>
            </Box>
           
            <Box className="d-flex gap-1 ps-4 mx-3 ">
              <Box className="">
                <img sx={{}} src="Images/graph.svg" />
              </Box>
              <Box className="">
                <span className=" fw-bold text_color">Multiplier :</span>
              </Box>
              <Box className="">
                <span className=" fw-bold" style={{ color: "#58f57b" }}>
                
                </span>
              </Box>
            </Box>
            <Box
              className="  rounded-3 mt-2 p-2 d-flex justify-content-between gap-2 border_color "
              style={{
                background: "#101316",
                width: "200px",
                marginLeft: "52px",
              }}
            >
              <Box className="border_color rounded-3" onClick={MultiplierMinusClick}>
                {/* <span className="text_color fw-bolder">1</span> */}
                <img sx={{}} src="Images/sub.svg" />
              </Box>

              <Box className="mt-2">
                <span className="text_color fw-bolder">{multiplierValue.toFixed(2)}</span>
              </Box>
              <Box className="border_color rounded-3" onClick={MultiplierPlusClick}>
                <img sx={{}} src="Images/add.svg" />
              </Box>
            </Box>
            <Box className="d-flex gap-3  p-3 mx-5">
              <Box className="border_pai" onClick={oneByTwoClickMultiplier}>
                <span className="text_color">½</span>
              </Box>
              <Box className="border_pai" onClick={doubleMultiplierValue}>
                <span className="text_color" >x2</span>
              </Box>
              <Box className="border_pai ">
                <span className="text_color" onClick={()=>{setMultiplierValue(100)}}>Max</span>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }} className="gap-2 ms-5 mt-4">
              <img src="Images/amount.svg" />
              <Typography className="text_color fw-bold" variant="h">
                Amount
              </Typography>
            </Box>
            <Box
              className="  rounded-3 mt-2 p-2 d-flex justify-content-between gap-2 border_color "
              style={{
                background: "#101316",
                width: "200px",
                marginLeft: "52px",
              }}
            >
              <Box className="border_color rounded-3" onClick={amountMinusClick}>
                {/* <span className="text_color fw-bolder">1</span> */}
                <img sx={{}} src="Images/sub.svg" />
              </Box>

              <Box className="mt-2">
                <span className="text_color fw-bolder">{amount}</span>
              </Box>
              <Box className="border_color rounded-3" onClick={amountPlusClick}>
                <img sx={{}} src="Images/add.svg" />
              </Box>
            </Box>
            <Box className="d-flex gap-3  p-3 mx-5">
              <Box className="border_pai" onClick={oneByTwoAmountClick}>
                <span className="text_color">½</span>
              </Box>
              <Box className="border_pai " onClick={doubleAmountClick}>
                <span className="text_color">x2</span>
              </Box>
              <Box className="border_pai "  onClick={()=>setAmount(514)}>
                <span className="text_color">Max</span>
              </Box>
            </Box>
            {/* <Button sx={{}} style={{background:'#58f57b'}}>APPROVE</Button> */}
            <Box sx={{ mx: 4 }}>
              <Button
                sx={{ backgroundColor: "#58f57b", color: "#0b5130" }}
                style={{ width: "200px" }}
                className="mx-3 mt-2 p-3 rounded-3 fw-bolder "
              >
                Bet
              </Button>
            </Box>
            <Box className="d-flex gap-1 ps-4 mx-4 p-3">
              <Box className="">
                <img sx={{}} src="Images/routbet.svg" />
              </Box>
              <Box className="">
                <span className=" fw-bold" style={{ color: "#58f57b" }}>
                  Bet to earn :
                </span>
              </Box>
              <Box className="">
                <span className="text_color">~{amount*5}</span>
              </Box>
              <Box className="">
                <img sx={{}} src="Images/earn.svg" />
              </Box>
            </Box>
          </Grid>
          <Grid
            lg={9}
            md={12}
            sm={12}
            style={{ background: "#101316", padding: "0" }}
          >
            <Grid container>
              <Grid lg={10} md={2} sm={10}></Grid>
              <Grid lg={2} md={2} sm={2} className="text-end p-3">
                <Box style={{ left: 0 }}>
                  <Button sx={{ backgroundColor: "#22343e", padding: "14px" }} className='rounded-3'>
                    {" "}
                    Pending 0
                  </Button>
                </Box>
              </Grid>
            </Grid>
            {/* === shiv*/}
              <Box className="d-flex justify-content-center">
                <div className="mt-5">

                <img src="images/Rocket.png" className="" style={{height:'60px',rotate:'-90deg'}}/>
            <div className="container mt-2" style={{marginLeft:'38px'}}>
                <div className="red flame"></div>
                <div className="orange flame"></div>
                <div className="yellow flame"></div>
                <div className="white flame"></div>
              </div>
                </div>
              </Box>
            {/* == shiv */}



           
              <Box className="position-absolute bottom-0">
            <Box className="d-flex gap-1 mt-5 ps-3 mx-3 ">
              <Box className="">
                <img sx={{}} src="Images/graph.svg" />
              </Box>
              <Box className="">
                <span className=" fw-bold text_color">Multiplier :</span>
              </Box>
              <Box className="">
                <span className=" fw-bold" style={{ color: "#58f57b" }}>
                 {(multiplierAmount*multiplierValue).toFixed(3)}
                </span>
              </Box>
            </Box>

            <Box className="d-flex gap-1 ps-3 mx-3 p-1">
              <Box className="">
                <img sx={{}} src="Images/win.svg" />
              </Box>
              <Box className="">
                <span className=" fw-bold text_color">Win Ammount :</span>
              </Box>
              <Box className="">
                <span className=" fw-bold" style={{ color: "#58f57b" }}>
                {((multiplierAmount*multiplierValue)*amount).toFixed(3)}
                </span>
              </Box>
              <Box className="">
                <img sx={{}} src="Images/matice.svg" />
              </Box>
            </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

