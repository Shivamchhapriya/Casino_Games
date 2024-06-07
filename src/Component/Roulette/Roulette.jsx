import {
  Avatar,
  Box,
  FormControl,
  Grid,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import "../CoinFlip/CoinFlip.css";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
// import { Button } from "bootstrap";
import Button from "@mui/material/Button";
import "./Roulette.css";
import { border, borderColor } from "@mui/system";
import { Wheel } from "react-custom-roulette";

const style = {
  position: "absolute",
  top: "20%",
  left: "30%",
  // transform: "translate(-50%, -50%)",
  // width: "50%",
  // height: "50%",
  background: "#151a1e",
  border: "2px solid gray",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

export default function Roulette() {
  const [currency, setCurrency] = useState("MATICE");
  const [amount, SetAmount] = React.useState(1);
  const [selectCount, setSelectCount] = useState([]);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  
  const activeData = (m) => {
    selectCount.push(m);
    setSelectCount([...selectCount]);
  };

  const unActiveData = (m) => {
    selectCount.splice(selectCount.indexOf(m), 1);
    var data = selectCount.filter((dt) => dt !== m);
    setSelectCount(data);
  };

  const selectDiv = (e) => {
    let isExisting = false;
    let allExisting = true;

    for (let i = 0; i < e.length; i++) {
      if (selectCount.includes(e[i])) {
        isExisting = true;
      }
    }

    for (let i = 0; i < e.length; i++) {
      if (!selectCount.includes(e[i])) {
        allExisting = false;
      }
    }

    if (allExisting) {
      for (let i = 0; i < e.length; i++) {
        unActiveData(e[i], e);
      }
    } else if (isExisting) {
      for (let i = 0; i < e.length; i++) {
        if (!selectCount.includes(e[i])) {
          activeData(e[i]);
        }
      }
    } else {
      for (let i = 0; i < e.length; i++) {
        activeData(e[i]);
      }
    }
  };

  const singalSelectDiv = (e) => {
    if (!selectCount.includes(e)) {
      setSelectCount([...selectCount, e]);
    } else {
      var data = selectCount.filter((dt) => dt !== e);
      setSelectCount(data);
    }
  };

  const data = [
    { id: "0" , option :0},
    { id: "1" , option :32 },
    { id: "2" , option :15 },
    { id: "3" , option :19 },
    { id: "4" , option :4 },
    { id: "22" , option :21 },
    { id: "6" , option :2 },
    { id: "7" , option :25 },
    { id: "8" , option :17 },
    { id: "9" , option :34 },
    { id: "10" , option :6 },
    { id: "11" , option :27 },
    { id: "12" , option :13 },
    { id: "13" , option :36 },
    { id: "14" , option :11 },
    { id: "15" , option :30 },
    { id: "16" , option :8 },
    { id: "17" , option :23 },
    { id: "18" , option :10 },
    { id: "19" , option :5 },
    { id: "20" , option :24 },
    { id: "21" , option :16 },
    { id: "22" , option :33 },
    { id: "23" , option :1 },
    { id: "24" , option :20 },
    { id: "25" , option :14 },
    { id: "26" , option :31 },
    { id: "27" , option :9 },
    { id: "28" , option :22 },
    { id: "29" , option :18 },
    { id: "30" , option :29 },
    { id: "31" , option :7 },
    { id: "32" , option :28 },
    { id: "33" , option :12 },
    { id: "34" , option :35 },
    { id: "35" , option :3 },
    { id: "36" , option :26 },
  ];
  
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const handleSpinClick = () => {
    if(selectCount.length > 0 ){
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    console.log(newPrizeNumber , data[newPrizeNumber].option )
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);

    setTimeout(()=>{

      if(selectCount.includes(parseInt(data[newPrizeNumber].option))){
        alert("win")
      }
      else{
        alert("lose")
      }
    },13000)

  }

  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => selectCount.length > 0 ?  setOpen(true) : alert ("please Select Min One Number") ;  
    
  const handleClose = () => setOpen(false);

 
  const plusClick = ()=>{
    if(amount <= 10.5){
      SetAmount(amount + 0.5)
    }
    else{
      alert("Max Amount is 11 ")
    }
  }

  const minusClick = ()=>{
    if(amount >= 1.5){
      SetAmount(amount - 0.5)
    }
    else{
      alert("Not Amount Less than 1")
    }
  }

  const oneByTwo = ()=>{
    if(amount >= 2 ){
      SetAmount(amount / 2)
    }
    else{
      alert("Amount Less than 2")
    }
  }

  const doubleAmountClick = ()=>{
      if(amount <= 5){
        SetAmount(amount * 2)
      }
      else{
        SetAmount(11)
      }
  }

  return (
    <Box
      style={{ background: "#151a1e" }}
      className="mt-lg-1 mt-sm-2"
      sx={{ padding: { sm: "0px 10px", md: "0px 10px" } }}
    >
      <Box sx={{ display: "flex", pt: 2 }}>
        <img src="Images/roulette.svg" />
        <Typography
          variant="h5"
          className="ms-1 fw-bolder"
          style={{ color: "#ff4e4e" }}
        >
          Roulette
        </Typography>
      </Box>
      <Box
        className="mt-4 coinflip_box1 rounded-4"
        style={{ border: "1px solid red" }}
      >
        <Grid container spacing={0}>
          <Grid
            lg={3}
            md={4}
            sm={12}
            sx={{}}
            className="p-0"
            style={{ borderRight: "2px solid #2d373f", maxWidth: "20%" }}
          >
            <Box
              // sx={{
              //   padding: { sm: "5px 10px", md: "20px 8px" },
              // }}
            >
              <Box sx={{ display: "flex" }} className="gap-2 mx-3 px-2 mt-4 mx-lg-4 px-lg-4 ">
              <img className="currency_center" src="Images/Doller.svg" />
              <Typography className="text_color fw-bold " variant="h">
                Currency
              </Typography>
            </Box>
            
              <FormControl   sx={{mt:1,
              marginLeft:{lg:"30px",sm:'10px',md:'10px',m: 1, minWidth: 120}
            }}>
                <Select
                  className="coinflip_box  pt-0 pb-0 "
                  style={{ borderRadius: "16px",height:"56px",width:'200px' }}
                  sx={{
                   

                    "& fieldset": { border: "none" },
                    background: "#101316",
                    // padding:{lg:2},
                    // margin:{lg:2}
                    marginLeft:{lg:"35px",sm:'-4px',md:'10px'}
                    
                    
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

            <Box sx={{ display: "flex" }} className="gap-2 mx-3 mx-md-3  mx-lg-4 px-lg-4 px-2 mt-4">
              <img className="currency_center" src="Images/amount.svg" />
              <Typography className="text_color fw-bold" variant="h">
                Amount
              </Typography>
            </Box>
            {/* <Box
              className="  rounded-3 mt-2 p-2 d-flex justify-content-between gap-2 border_color "
              style={{
                background: "#101316",
                width: "200px",
                marginLeft: "52px",
              }}
            >
              <Box className="border_color rounded-3" onClick={minusClick} style={{cursor:"pointer"}}>
               
                <img sx={{}} src="Images/sub.svg" />
              </Box>

              <Box className="mt-2">
                <span className="text_color fw-bolder">{amount.toFixed(2)}</span>
              </Box>
              <Box className="border_color rounded-3" onClick={plusClick} style={{cursor:"pointer"}}>
                <img sx={{}} src="Images/add.svg" />
              </Box>
            </Box> */}
             <Box className="mx-md-1  d-flex justify-content-center d-md-block">
            <Box
              className=" rounded-3    mt-2 p-2 d-flex justify-content-between gap-2 border_color "
              style={{
                background: "#101316",
                width: "200px",
                // marginLeft: "52px",
              }}
            sx={{
              marginLeft:{lg:"60px",sm:'10px',md:'10px'}
            }}
            
            >
              <Box className="border_color rounded-3" onClick={minusClick}>
                <img sx={{}} src="Images/sub.svg" />
              </Box>

              <Box className="mt-2">
                <span className="text_color fw-bolder">{amount.toFixed()}</span>
              </Box>
              <Box className="border_color rounded-3" onClick={plusClick}>
                <img sx={{}} src="Images/add.svg" />
              </Box>
            </Box>
            </Box>
            {/* <Box className="d-flex gap-3  p-3 mx-5">
              <Box className="border_pai" onClick={oneByTwo}>
                <span className="text_color">½</span>
              </Box>
              <Box className="border_pai ">
                <span className="text_color" onClick={doubleAmountClick}>x2</span>
              </Box>
              <Box className="border_pai" >
                <span className="text_color" onClick={()=>SetAmount(11.0)}>Max</span>
              </Box>
            </Box> */}
              <Box className="mx-lg-5 px-lg-4 mx-md-4 px-md-3    d-flex">
            <Box className="d-flex  gap-lg-3 gap-md-2 mx-auto gap-3  p-3 gap-sm-2 ">
              <Box className="border_pai" onClick={oneByTwo}>
                <span className="text_color">½</span>
              </Box>
              <Box className="border_pai " onClick={doubleAmountClick}>
                <span className="text_color">x2</span>
              </Box>
              <Box className="border_pai " onClick={() => SetAmount(11.0)}>
                <span className="text_color">Max</span>
              </Box>
            </Box>
            </Box>
            {/* <Button sx={{}} style={{background:'#58f57b'}}>APPROVE</Button> */}
            <Box sx={{ justifyContent: "center", alignItems: "center" }} className="mx-lg-5 mx-md-3 px-md-4 px-5 mx-3 ">
                <Button
                  sx={{ backgroundColor: "#58f57b", color: "#0b5130" }}
                  style={{ width: "200px" }}
                  className=" mt-2 mx-lg-2 p-3 rounded-3 fw-bolder "
                >
                  BET
                </Button>
              </Box>
            {/* <Box className="d-flex gap-1 ps-4 mx-4 p-3">
              <Box>
                <img sx={{}} src="Images/routbet.svg" />
              </Box>
              <Box className="">
                <span className=" fw-bold" style={{ color: "#58f57b" }}>
                  Bet to earn :
                </span>
              </Box>
              <Box>
                <span className="text_color">{amount*5}</span>
              </Box>
              <Box>
                <img sx={{}} src="Images/earn.svg" />
              </Box>
            </Box> */}
            <Box className="mx-lg-5 px-lg-4 px-md-3 d-flex gap-1 ps-4 mx-5 mx-md-4 p-3">
              <Box className="">
                <img sx={{}} src="Images/routbet.svg" />
              </Box>
              <Box className="">
                <span className=" fw-bold" style={{ color: "#58f57b" }}>
                  Bet to earn :
                </span>
              </Box>
              <Box className="">
                <span className="text_color">~ {amount*5}</span>
              </Box>
              <Box className="">
                <img sx={{}} src="Images/earn.svg" />
              </Box>
            </Box>
          </Grid>
          <Grid lg={9} md={4} sm={12} style={{ background: "#101316" }}>
          <Button onClick={()=>{handleOpen();handleSpinClick()}} variant="contained" color="success" className="mt-3 p-2">
  Show Result
</Button>
            <div className="row text-light">
              <div
                className="col-md-12 col-12 d-flex flex-md-column roulette_inner"
                style={{ padding: "10px 150px 18px 155px" }}
              >
                <div className="row">
                  <div className="col-md-12 col-sm-6 col-6">
                    <div className="row">
                      <div
                        onClick={() => selectDiv([0])}
                        id="0"
                        className={`hover_class col-md-1 zero ${
                          selectCount.includes(0) ? "checked" : ""
                        }`}
                        style={{ backgroundColor: "#307243" }}
                      >
                        0
                      </div>
                      <div className="col-md-10 col-12">
                        <div className="row first_row">
                          <div
                            onClick={() => singalSelectDiv(3)}
                            id="3"
                            className={`hover_class all_box slot_red col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(3) ? "checked" : ""
                            }`}
                          >
                            {" "}
                            3{" "}
                          </div>
                          <div
                            onClick={() => singalSelectDiv(6)}
                            id="6"
                            className={`hover_class all_box slot_black col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(6) ? "checked" : ""
                            }`}
                          >
                            6
                          </div>
                          <div
                            onClick={() => singalSelectDiv(9)}
                            id="9"
                            className={`hover_class all_box slot_red col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(9) ? "checked" : ""
                            }`}
                          >
                            9
                          </div>
                          <div
                            onClick={() => singalSelectDiv(12)}
                            id="12"
                            className={`hover_class all_box slot_red col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(12) ? "checked" : ""
                            }`}
                          >
                            12
                          </div>
                          <div
                            onClick={() => singalSelectDiv(15)}
                            id="18"
                            className={`hover_class all_box slot_red col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(15) ? "checked" : ""
                            }`}
                          >
                            15
                          </div>
                          <div
                            onClick={() => singalSelectDiv(18)}
                            id="15"
                            className={`hover_class all_box slot_black col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(18) ? "checked" : ""
                            }`}
                          >
                            18
                          </div>
                          <div
                            onClick={() => singalSelectDiv(21)}
                            id="21"
                            className={`hover_class all_box slot_red col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(21) ? "checked" : ""
                            }`}
                          >
                            21
                          </div>
                          <div
                            onClick={() => singalSelectDiv(24)}
                            id="24"
                            className={`hover_class all_box slot_black col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(24) ? "checked" : ""
                            }`}
                          >
                            24
                          </div>
                          <div
                            onClick={() => singalSelectDiv(27)}
                            id="27"
                            className={`hover_class all_box slot_red col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(27) ? "checked" : ""
                            }`}
                          >
                            27
                          </div>
                          <div
                            onClick={() => singalSelectDiv(30)}
                            id="30"
                            className={`hover_class all_box slot_red col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(30) ? "checked" : ""
                            }`}
                          >
                            30
                          </div>
                          <div
                            onClick={() => singalSelectDiv(33)}
                            id="33"
                            className={`hover_class all_box slot_black col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(33) ? "checked" : ""
                            }`}
                          >
                            33
                          </div>
                          <div
                            onClick={() => singalSelectDiv(36)}
                            id="36"
                            className={`hover_class all_box slot_red col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(36) ? "checked" : ""
                            }`}
                          >
                            36
                          </div>
                          <div
                            onClick={() => singalSelectDiv(2)}
                            id="2"
                            className={`hover_class all_box slot_black col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(2) ? "checked" : ""
                            }`}
                          >
                            2
                          </div>
                          <div
                            onClick={() => singalSelectDiv(5)}
                            id="5"
                            className={`hover_class all_box slot_red col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(5) ? "checked" : ""
                            }`}
                          >
                            5
                          </div>
                          <div
                            onClick={() => singalSelectDiv(8)}
                            id="8"
                            className={`hover_class all_box slot_black col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(8) ? "checked" : ""
                            }`}
                          >
                            8
                          </div>
                          <div
                            onClick={() => singalSelectDiv(11)}
                            id="11"
                            className={`hover_class all_box slot_black col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(11) ? "checked" : ""
                            }`}
                          >
                            11
                          </div>
                          <div
                            onClick={() => singalSelectDiv(14)}
                            id="14"
                            className={`hover_class all_box slot_red col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(14) ? "checked" : ""
                            }`}
                          >
                            14
                          </div>
                          <div
                            onClick={() => singalSelectDiv(17)}
                            id="17"
                            className={`hover_class all_box slot_black col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(17) ? "checked" : ""
                            }`}
                          >
                            17
                          </div>
                          <div
                            onClick={() => singalSelectDiv(20)}
                            id="20"
                            className={`hover_class all_box slot_black col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(20) ? "checked" : ""
                            }`}
                          >
                            20
                          </div>
                          <div
                            onClick={() => singalSelectDiv(23)}
                            id="23"
                            className={`hover_class all_box slot_red col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(23) ? "checked" : ""
                            }`}
                          >
                            23
                          </div>
                          <div
                            onClick={() => singalSelectDiv(26)}
                            id="26"
                            className={`hover_class all_box slot_black col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(26) ? "checked" : ""
                            }`}
                          >
                            26
                          </div>
                          <div
                            onClick={() => singalSelectDiv(29)}
                            id="29"
                            className={`hover_class all_box slot_black col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(29) ? "checked" : ""
                            }`}
                          >
                            29
                          </div>
                          <div
                            onClick={() => singalSelectDiv(32)}
                            id="32"
                            className={`hover_class all_box slot_red col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(32) ? "checked" : ""
                            }`}
                          >
                            32
                          </div>
                          <div
                            onClick={() => singalSelectDiv(35)}
                            id="35"
                            className={`hover_class all_box slot_black col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(35) ? "checked" : ""
                            }`}
                          >
                            35
                          </div>
                          <div
                            onClick={() => singalSelectDiv(1)}
                            id="1"
                            className={`hover_class all_box slot_red col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(1) ? "checked" : ""
                            }`}
                          >
                            1
                          </div>
                          <div
                            onClick={() => singalSelectDiv(4)}
                            id="4"
                            className={`hover_class all_box slot_black col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(4) ? "checked" : ""
                            }`}
                          >
                            4
                          </div>
                          <div
                            onClick={() => singalSelectDiv(7)}
                            id="7"
                            className={`hover_class all_box slot_red col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(7) ? "checked" : ""
                            }`}
                          >
                            7
                          </div>
                          <div
                            onClick={() => singalSelectDiv(10)}
                            id="10"
                            className={`hover_class all_box slot_black col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(10) ? "checked" : ""
                            }`}
                          >
                            10
                          </div>
                          <div
                            onClick={() => singalSelectDiv(13)}
                            id="13"
                            className={`hover_class all_box slot_black col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(13) ? "checked" : ""
                            }`}
                          >
                            13
                          </div>
                          <div
                            onClick={() => singalSelectDiv(16)}
                            id="16"
                            className={`hover_class all_box slot_red col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(16) ? "checked" : ""
                            }`}
                          >
                            16
                          </div>
                          <div
                            onClick={() => singalSelectDiv(19)}
                            id="19"
                            className={`hover_class all_box slot_red col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(19) ? "checked" : ""
                            }`}
                          >
                            19
                          </div>
                          <div
                            onClick={() => singalSelectDiv(22)}
                            id="22"
                            className={`hover_class all_box slot_black col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(22) ? "checked" : ""
                            }`}
                          >
                            22
                          </div>
                          <div
                            onClick={() => singalSelectDiv(25)}
                            id="25"
                            className={`hover_class all_box slot_red col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(25) ? "checked" : ""
                            }`}
                          >
                            25
                          </div>
                          <div
                            onClick={() => singalSelectDiv(28)}
                            id="28"
                            className={`hover_class all_box slot_black col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(28) ? "checked" : ""
                            }`}
                          >
                            28
                          </div>
                          <div
                            onClick={() => singalSelectDiv(31)}
                            id="31"
                            className={`hover_class all_box slot_black col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(31) ? "checked" : ""
                            }`}
                          >
                            31
                          </div>
                          <div
                            onClick={() => singalSelectDiv(34)}
                            id="34"
                            className={`hover_class all_box slot_red col-4 col-sm-4 col-md-1 ${
                              selectCount.includes(34) ? "checked" : ""
                            }`}
                          >
                            34
                          </div>
                        </div>
                      </div>
                      <div className="col-md-1 side_row d-flex flex-row flex-md-column p-0">
                        <div
                          onClick={() =>
                            selectDiv([
                              3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36,
                            ])
                          }
                          className="hover_class all_box   d-flex flex-row flex-md-column col-4 col-sm-4 col-md-12"
                        >
                          2:1
                        </div>
                        <div
                          onClick={() =>
                            selectDiv([
                              2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35,
                            ])
                          }
                          className="hover_class all_box   d-flex flex-row flex-md-column col-4 col-sm-4 col-md-12"
                        >
                          2:1
                        </div>
                        <div
                          onClick={() =>
                            selectDiv([
                              1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34,
                            ])
                          }
                          className="hover_class all_box   d-flex flex-row flex-md-column col-4 col-sm-4 col-md-12"
                        >
                          2:1
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-6 col-6">
                    <div className="row second_row_main">
                      <div className="col-md-12 col-6">
                        <div className="row flex-column flex-md-row second_row_inner1">
                          <div
                            onClick={() =>
                              selectDiv([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
                            }
                            className="hover_class one_three p-2 col-md-4 col-4 "
                          >
                            1st 12
                          </div>
                          <div
                            onClick={() =>
                              selectDiv([
                                13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
                              ])
                            }
                            className="hover_class one_three p-2 col-md-4 col-4"
                          >
                            2nd 12
                          </div>
                          <div
                            onClick={() =>
                              selectDiv([
                                25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
                              ])
                            }
                            className="hover_class  one_three p-2 col-md-4 col-4"
                          >
                            3rd 12
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-6 mt-1 ">
                        <div className="row second_row_inner2">
                          <div
                            onClick={() =>
                              selectDiv([
                                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                                15, 16, 17, 18,
                              ])
                            }
                            className="hover_class col-md-2 one-six"
                          >
                            1-18
                          </div>
                          <div
                            onClick={() =>
                              selectDiv([
                                2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26,
                                28, 30, 32, 34, 36,
                              ])
                            }
                            className="hover_class col-md-2 one-six"
                          >
                            even
                          </div>
                          <div
                            onClick={() =>
                              selectDiv([
                                1, 3, 5, 7, 12, 15, 14, 16, 19, 21, 23, 25, 27,
                                30, 32, 34, 36, 9,
                              ])
                            }
                            className="hover_class slot_red col-md-2 one-six"
                          ></div>
                          <div
                            onClick={() =>
                              selectDiv([
                                2, 4, 6, 8, 10, 11, 13, 17, 18, 20, 22, 24, 26,
                                28, 29, 31, 33, 35,
                              ])
                            }
                            className="hover_class slot_black col-md-2 one-six"
                          ></div>
                          <div
                            onClick={() =>
                              selectDiv([
                                1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25,
                                27, 29, 31, 33, 35,
                              ])
                            }
                            className="hover_class col-md-2 one-six"
                          >
                            odd
                          </div>
                          <div
                            onClick={() =>
                              selectDiv([
                                19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                                31, 32, 33, 34, 35, 36,
                              ])
                            }
                            className="hover_class col-md-2 one-six"
                          >
                            19-36
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ////////////////////////////////////// */}
            <Box className="mb-3">
              <Box className="d-flex gap-1  ps-3 mx-3 ">
                <Box className="">
                  <img sx={{}} src="Images/graph.svg" />
                </Box>
                <Box className="">
                  <span className=" fw-bold text_color">Multiplier :</span>
                </Box>
                <Box className="">
                  <span className=" fw-bold" style={{ color: "#58f57b" }}>
                  x {(36/selectCount.length) == Infinity ? 0 :(36/selectCount.length).toFixed(2)}
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
                  {(36/selectCount.length) == Infinity ? 0 :(36/selectCount.length).toFixed(2) * amount}
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
      <Modal
        keepMounted
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box>
          <Box sx={style}>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              onStopSpinning={() => {
                setMustSpin(false);
              }}
              fontSize="22"
              perpendicularText={true}
              textDistance="90"
              radiusLineWidth={"1"}
              innerBorderWidth={"25"}
              innerRadius={"0"}
              outerBorderWidth={"1"}
              radiusLineColor={"white"}
              outerBorderColor={"white"}
              innerBorderColor={"#000"}
              backgroundColors={[
                "#307243",
                "#a1393b",
                "#000",
                "#a1393b",
                "#000",
                "#a1393b",
                "#000",
                "#a1393b",
                "#000",
                "#a1393b",
                "#000",
                "#a1393b",
                "#000",
                "#a1393b",
                "#000",
                "#a1393b",
                "#000",
                "#a1393b",
                "#000",
                "#a1393b",
                "#000",
                "#a1393b",
                "#000",
                "#a1393b",
                "#000",
                "#a1393b",
                "#000",
                "#a1393b",
                "#000",
                "#a1393b",
                "#000",
                "#a1393b",
                "#000",
                "#a1393b",
                "#000",
                "#a1393b",
                "#000",
              ]}
              textColors={["white"]}
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
