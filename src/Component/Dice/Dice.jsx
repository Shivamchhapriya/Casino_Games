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
import React, { useEffect } from "react";
import "../CoinFlip/CoinFlip.css";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
// import { Button } from "bootstrap";
import Button from "@mui/material/Button";
import HomeTable from "../Table/table";
import "./Dice.css";
import { useState } from "react";
import Footer_card from "../card";
import Game_footer from "../footer";
// const style = {
//   position: 'fixed',
//   top: '20rem',
//   left: '50rem',
//   transform: 'translate(-50%, -50%)',
//   width: "50rem",
//   height: "30rem",
//   background: '#151a1e',
//   border: '2px solid gray',
//   borderRadius: "20px",
//   boxShadow: 24,
//   p: 4,
// };
export default function Roulette() {
  const [currency, setCurrency] = React.useState("MATICE");
  const [amount, SetAmount] = React.useState(1);
  const [betToEarn, SetBetToEarn] = React.useState(5);
  const [selectCount, setSelectCount] = React.useState([0, 0, 0, 0, 0, 0]);
  const [multiplierAmount, setMultiplierAmount] = React.useState(0);
  const [allDiceCount, setAllDiceCount] = React.useState([]);
  const [winAmount, setWinAmount] = React.useState([])
  // console.log(winAmount)

  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    if (allDiceCount.length >= 1) {
      setOpen(true);
    }
  }
  const handleClose = () => {
    setOpen(false)
    setWinAmount([])
  };


  const SelectDice = (e) => {
    if (!allDiceCount.includes(e)) {
      selectCount[e - 1] = 1;
      const sums = selectCount.reduce((a, b) => a + b, 0);
      // setMultiplierAmount(sums * 10);

      switch (sums) {
        case 1:
          setMultiplierAmount(5.87)
          break;

        case 2:
          setMultiplierAmount(2.93)
          break;

        case 3:
          setMultiplierAmount(1.96)
          break;

        case 4:
          setMultiplierAmount(1.47)
          break;

        case 5:
          setMultiplierAmount(1.17)
          break;

        case 6:
          setMultiplierAmount(0.98)
          break;

        default:
          setMultiplierAmount(0)
      }


      allDiceCount.push(e);
    } else {
      selectCount[e - 1] = 0;
      const sums = selectCount.reduce((a, b) => a + b, 0);
      switch (sums) {
        case 1:
          setMultiplierAmount(5.87)
          break;

        case 2:
          setMultiplierAmount(2.93)
          break;

        case 3:
          setMultiplierAmount(1.96)
          break;

        case 4:
          setMultiplierAmount(1.47)
          break;

        case 5:
          setMultiplierAmount(1.17)
          break;

        case 6:
          setMultiplierAmount(0.98)
          break;

        default:
          setMultiplierAmount(0)
      }
      setAllDiceCount(allDiceCount.filter((dt) => dt !== e));
    }
  };

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const minusClick = () => {
    if (amount >= 1.5) {
      SetAmount(amount - 0.5);
    } else {
      alert("Min Amount 1");
    }
  };
  const plusClick = () => {
    if (amount <= 260) {
      SetAmount(amount + 0.5);
    } else {
      alert("Max Amount is 260");
    }
  };
  const oneByTwoClick = () => {
    if (amount >= 2) {
      SetAmount(amount / 2);
    } else {
      alert("Amount Less than 2");
    }
  };
  const doubleAmount = () => {
    if (amount <= 255) {
      SetAmount(amount * 2);
    } else {
      SetAmount(510);
    }
  };

  function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function rollDice() {
    if (allDiceCount.length >= 1) {

      const dice = [...document.querySelectorAll(".die-list")];
      dice.forEach((die, index) => {
        toggleClasses(die);
        var total = die.dataset.roll = getRandomNumber(1, 6);

        setTimeout(() => {
          if (allDiceCount.includes(total)) {
            setWinAmount(['You won 🤑', "Payout", (amount * multiplierAmount).toFixed(3), <span> <img sx={{}} src="Images/matice.svg" /> + ~5.00
              <img sx={{}} src="Images/earn.svg" /></span>])
          }
          else {
            setWinAmount(['You loss 😭', "Payout", (amount).toFixed(3), <span> <img sx={{}} src="Images/matice.svg" /> + ~5.00
              <img sx={{}} src="Images/earn.svg" /></span>])

          }
        }, 3500);

      });
    }
    else {
      alert("Please Select Dice")
    }
  }

  // useEffect(()=>{

  //     setTimeout(() => {
  //       setWinAmount([])
  //     }, 4500);
  // })
  return (
    <Box
      style={{ background: "#151a1e" }}
      className="mt-lg-1 mt-sm-2 
      "
      sx={{ padding: { lg: "0px 50px", sm: "0px 10px", md: "0px 10px" } }}
    >
      <Box sx={{ display: "flex", pt: 2 }}>
        <img src="Images/dice.svg" />
        <Typography
          variant="h5"
          className="ms-1 fw-bolder"
          style={{ color: "#FFA463" }}
        >
          Dice
        </Typography>
      </Box>
      <Box className="mt-4 coinflip_box rounded-4">
        <Grid container spacing={0}>
          <Grid
            lg={3}
            md={3}
            sm={4}
            xs={12}
            className="p-md-3 p-sm-0 center_small"
            style={{ borderRight: "2px solid #2d373f" }}
          >
            <Box>
              <Box sx={{ display: "flex" }} className="gap-2 mx-3 px-2 mt-4  ">
                <img className="currency_center" src="Images/Doller.svg" />
                <Typography className="text_color fw-bold " variant="h">
                  Currency
                </Typography>
              </Box>
              <FormControl sx={{
                mt: 1,
                marginLeft: { lg: "30px", sm: '10px', md: '10px', m: 1, minWidth: 120 }
              }}>
                <Select
                  className="coinflip_box  pt-0 pb-0 "
                  style={{ borderRadius: "16px", height: "56px", width: '200px' }}
                  sx={{


                    "& fieldset": { border: "none" },
                    background: "#101316",
                    // padding:{lg:2},
                    // margin:{lg:2}
                    marginLeft: { lg: "35px", sm: '-4px', md: '10px' }


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

            </Box>

            <Box sx={{ display: "flex" }} className="gap-2 mx-3 px-2 mt-4">
              <img className="currency_center" src="Images/amount.svg" />
              <Typography className="text_color fw-bold" variant="h">
                Amount
              </Typography>
            </Box>
            <Box className=" d-flex justify-content-center d-md-block">
              <Box
                className=" rounded-3 mt-2 p-2 d-flex justify-content-between gap-2 border_color "
                style={{
                  background: "#101316",
                  width: "200px",
                  // marginLeft: "52px",
                }}
                sx={{
                  marginLeft: { lg: "60px", sm: '10px', md: '10px' }
                }}

              >
                <Box className="border_color rounded-3" onClick={minusClick}>
                  <img sx={{}} src="Images/sub.svg" />
                </Box>

                <Box className="mt-2">
                  <span className="text_color fw-bolder">{amount}</span>
                </Box>
                <Box className="border_color rounded-3" onClick={plusClick}>
                  <img sx={{}} src="Images/add.svg" />
                </Box>
              </Box>
            </Box>
            <Box className="justify-content-center d-md-block d-flex">
              <Box className="d-flex  gap-lg-3  p-3 gap-sm-2 mx-lg-5">
                <Box className="border_pai" onClick={oneByTwoClick}>
                  <span className="text_color">½</span>
                </Box>
                <Box className="border_pai " onClick={doubleAmount}>
                  <span className="text_color">x2</span>
                </Box>
                <Box className="border_pai " onClick={() => SetAmount(510)}>
                  <span className="text_color">Max</span>
                </Box>
              </Box>
            </Box>
            <Box marginLeft={{ lg: 5, md: 0, sm: 0 }}>
              <Button
                sx={{ backgroundColor: "#58f57b", color: "#0b5130" }}
                style={{ width: "200px" }}
                className=" mx-lg-4 mx-md-2 mx-sm-0 mt-2 p-3  rounded-3 fw-bolder "
              >
                Bet
              </Button>
            </Box>
            <Box className="justify-content-center d-md-block d-flex">
              <Box className="d-flex gap-1 ps-4 mx-lg-5 p-3">
                <Box className="">
                  <img sx={{}} src="Images/routbet.svg" />
                </Box>
                <Box className="">
                  <span className=" fw-bold" style={{ color: "#58f57b" }}>
                    Bet to earn :
                  </span>
                </Box>
                <Box className="">
                  <span className="text_color">~{betToEarn * amount}</span>
                </Box>
                <Box className="">
                  <img sx={{}} src="Images/earn.svg" />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            lg={9}
            md={9}
            sm={8}
            xs={12}
            style={{ background: "#101316", padding: "0" }}
          >
            <Grid container>
              <Grid lg={8} md={8} > <h1 onClick={() => console.log(selectCount)} className="text-white ">
              </h1></Grid>
              <Grid lg={4} md={4} className="text-lg-end p-lg-3 ">
                <Box className="">

                  <Button
                    sx={{ backgroundColor: "#22343e", padding: "" }}
                    className="rounded-3 gap-3"
                  >
                    {" "}
                    Pending
                  </Button>
                  <br />
                  <Button onClick={() => { rollDice(); }} data-bs-toggle="modal" data-bs-target="#staticBackdrop"  variant="contained" color="success" className="mt-3 ">
                    Show Result
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Box>
              <Box className=" d-flex justCenter gap-3">

                <Box onClick={() => SelectDice(1)} className="dic" style={{ cursor: "pointer" }}>
                  {" "}
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="BigDice1"
                    class="diceChoice "
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="79"
                      height="79"
                      rx="19.5"
                      class="diba"
                      fill={!allDiceCount.includes(1) ? "#151A1E" : "red"}
                      stroke="#2F3A42"
                    ></rect>
                    <circle cx="40" cy="40" r="7" fill="#C9D2D9"></circle>
                  </svg>
                </Box>
                <Box onClick={() => { SelectDice(2) }} style={{ cursor: "pointer" }}>
                  {" "}
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" id="BigDice2" class="diceChoice"><rect x="0.5" y="0.5" width="79" height="79" rx="19.5" fill={!allDiceCount.includes(2) ? "#151A1E" : "red"} stroke="#2F3A42"></rect><circle cx="20" cy="20" r="7" class="hoverSvg" fill="#C9D2D9"></circle><circle cx="60" cy="60" r="7" fill="#C9D2D9"></circle></svg>
                </Box>
                <Box onClick={() => SelectDice(3)} style={{ cursor: "pointer" }}>
                  {" "}
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" id="BigDice3" class="diceChoice "><rect x="0.5" y="0.5" width="79" height="79" rx="19.5" fill={!allDiceCount.includes(3) ? "#151A1E" : "red"} stroke="#2F3A42"></rect><circle cx="40" cy="40" r="7" fill="#C9D2D9"></circle><circle cx="60" cy="60" r="7" fill="#C9D2D9"></circle><circle cx="20" cy="20" r="7" fill="#C9D2D9"></circle></svg>
                </Box>
              </Box>
              <Box className="d-flex justCenter gap-3 mt-2">
                <Box onClick={() => SelectDice(4)} style={{ cursor: "pointer" }}>
                  {" "}

                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" id="BigDice4" class="diceChoice "><rect x="0.5" y="0.5" width="79" height="79" rx="19.5" fill={!allDiceCount.includes(4) ? "#151A1E" : "red"} stroke="#2F3A42"></rect><circle cx="20" cy="20" r="7" fill="#C9D2D9"></circle><circle cx="60" cy="20" r="7" fill="#C9D2D9"></circle><circle cx="60" cy="60" r="7" fill="#C9D2D9"></circle><circle cx="20" cy="60" r="7" fill="#C9D2D9"></circle></svg>
                </Box>
                <Box onClick={() => SelectDice(5)} style={{ cursor: "pointer" }}>
                  {" "}
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" id="BigDice5" class="diceChoice "><rect x="0.5" y="0.5" width="79" height="79" rx="19.5" fill={!allDiceCount.includes(5) ? "#151A1E" : "red"} stroke="#2F3A42"></rect><circle cx="40" cy="40" r="7" fill="#C9D2D9"></circle><circle cx="20" cy="20" r="7" fill="#C9D2D9"></circle><circle cx="60" cy="20" r="7" fill="#C9D2D9"></circle><circle cx="60" cy="60" r="7" fill="#C9D2D9"></circle><circle cx="20" cy="60" r="7" fill="#C9D2D9"></circle></svg>
                </Box>
                <Box onClick={() => SelectDice(6)} style={{ cursor: "pointer" }}>
                  {" "}
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" id="BigDice6" class="diceChoice "><rect x="0.5" y="0.5" width="79" height="79" rx="19.5" fill={!allDiceCount.includes(6) ? "#151A1E" : "red"} stroke="#2F3A42"></rect><circle cx="20" cy="40" r="7" fill="#C9D2D9"></circle><circle cx="20" cy="60" r="7" fill="#C9D2D9"></circle><circle cx="60" cy="40" r="7" fill="#C9D2D9"></circle><circle cx="60" cy="60" r="7" fill="#C9D2D9"></circle><circle cx="60" cy="20" r="7" fill="#C9D2D9"></circle><circle cx="20" cy="20" r="7" fill="#C9D2D9"></circle></svg>
                </Box>
              </Box>
            </Box>

            <Box className="d-flex gap-1 mt-5 ps-3 mx-3 ">
              <Box className="">
                <img sx={{}} src="Images/graph.svg" />
              </Box>
              <Box className="">
                <span className=" fw-bold text_color">Multiplier :</span>
              </Box>
              <Box className="">
                <span className=" fw-bold" style={{ color: "#58f57b" }}>
                  x {multiplierAmount}
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
                <span className=" fw-bold" style={{ color: "#58f57b" }} >
                  {(amount * multiplierAmount).toFixed(3)}
                </span>
              </Box>
              <Box className="">
                <img sx={{}} src="Images/matice.svg" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* <Modal
        keepMounted
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      
      >
        <Box>

          <Box sx={style} >
            <center>
              <Typography variant="h6" color={"white"} className="d-block">Dice
             
                {allDiceCount.includes(1) ? <img className="mx-1" src="images/DiceOne.svg" /> : ""}
                {allDiceCount.includes(2) ? <img className="mx-1" src="images/DiceTwo.svg" /> : ""}
                {allDiceCount.includes(3) ? <img className="mx-1" src="images/DiceThree.svg" /> : ""}
                {allDiceCount.includes(4) ? <img className="mx-1" src="images/DiceFour.svg" /> : ""}
                {allDiceCount.includes(5) ? <img className="mx-1" src="images/DiceFive.svg" /> : ""}
                {allDiceCount.includes(6) ? <img className="mx-1" src="images/DiceSix.svg" /> : ""}

              </Typography>
            </center>
            <br />
            <div class="dice" style={{}}>

              <ol class="die-list odd-roll ol3 m-0 p-0" data-roll="1" id="die-2">
                <li class="die-items m-0 p-0" data-side="1">
                  <span class="dot"></span>
                </li>
                <li class="die-items" data-side="2">
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
                <li class="die-items" data-side="3">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
                <li class="die-items" data-side="4">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
                <li class="die-items" data-side="5">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
                <li class="die-items" data-side="6">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
              </ol>
            </div>
            <p className="text-white text-center"> <span className="  fw-bolder fs-4" style={{ color: "#58F57B" }}> {winAmount[0]} </span></p>

            <p className="text-center text-white">{winAmount[1]}  <span style={{ color: "#58F57B" }} className="">{winAmount[2]}</span>
           
              {winAmount[3]}
            </p>
            



          </Box>
        </Box>

      </Modal> */}

      {/* /////// new modal //////////// */}
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">

            <div class="modal-header mt-1">
              <svg width="84" height="24" viewBox="0 0 84 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clip-path="url(#clip0_1640_1220)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.210938 1.87915C0.210938 0.904217 1.01891 0.113879 2.01559 0.113879H9.38292C11.5782 0.113879 13.5091 0.697483 14.9896 2.02248L15.0038 2.03533C16.4634 3.36989 17.1678 5.1515 17.1678 7.21732C17.1678 9.27509 16.4687 11.0822 15.0038 12.4216L14.9896 12.4344C13.4974 13.7699 11.5579 14.3208 9.38292 14.3208H7.66307V17.7157C7.66307 18.6907 6.85511 19.481 5.85842 19.481H2.01559C1.01891 19.481 0.210938 18.6907 0.210938 17.7157V1.87915ZM13.7715 11.132C12.7028 12.0884 11.2475 12.5555 9.38292 12.5555H5.85842V17.7157H2.01559V1.87915H9.38292C11.2475 1.87915 12.7028 2.36848 13.7715 3.3249C14.8174 4.28133 15.3632 5.57138 15.3632 7.21732C15.3632 8.86326 14.8174 10.1756 13.7715 11.132ZM10.8837 8.81878C11.293 8.46289 11.5204 7.92907 11.5204 7.21732C11.5204 6.5278 11.293 5.99398 10.8837 5.61588C10.4516 5.25999 9.86042 5.05982 9.13279 5.05982H5.85842V9.37484H9.13279C9.88317 9.37484 10.4744 9.19691 10.8837 8.81878ZM9.65514 7.52692C9.65514 7.52692 9.65387 7.52812 9.65075 7.53003C9.65351 7.52781 9.65514 7.52692 9.65514 7.52692ZM34.3689 19.4619C34.2818 19.4745 34.193 19.481 34.1026 19.481H30.5554C29.5587 19.481 28.7508 18.6907 28.7508 17.7157V9.79744V1.87915C28.7508 0.904217 29.5587 0.113879 30.5554 0.113879H34.1026C35.0993 0.113879 35.9072 0.904217 35.9072 1.87915V4.47338H38.993C39.7809 4.47338 40.4776 4.97322 40.7143 5.70818L41.2372 7.33188C41.2405 7.34237 41.2438 7.35289 41.2472 7.36344C41.3317 7.64416 41.4149 7.92399 41.4974 8.2029C41.5778 7.92971 41.6595 7.65644 41.7422 7.3831C41.7445 7.37562 41.7468 7.36811 41.7491 7.36065L42.2723 5.71471C42.5067 4.97646 43.2052 4.47338 43.9954 4.47338H47.6564C47.9886 4.47338 48.6111 4.47624 48.6111 4.47624C48.6111 4.47624 49.1758 4.47338 49.5159 4.47338H49.5491C49.7296 3.38056 50.1992 2.38451 51.0369 1.5651C51.0438 1.55827 51.0509 1.55151 51.0578 1.5448C52.2098 0.454388 53.7984 0.0249086 55.4963 0.0249086C56.0702 0.0249086 56.6707 0.0249075 57.2381 0.0249041H57.4186L57.7793 0.0249045L58.5011 0.0249041L62.0222 0.0249086L63.1934 0.0249023L64.1919 0.0249086H67.58C68.7877 0.0249086 69.3846 1.01543 69.3846 1.99036V4.50363C69.4931 4.48377 69.605 4.47338 69.7191 4.47338H73.1753C73.5149 4.47338 73.8328 4.56514 74.1039 4.72471C74.8908 4.37858 75.7717 4.20649 76.7225 4.20649C78.785 4.20649 80.5497 4.96362 81.8467 6.44893C81.8554 6.45889 81.8641 6.46898 81.8725 6.47914C83.1159 7.96913 83.6434 9.87169 83.6434 11.9772C83.6434 14.0966 83.1198 16.0113 81.8608 17.4891L81.8585 17.4918C80.5472 19.0248 78.7668 19.7479 76.7225 19.7479C76.1467 19.7479 75.594 19.6842 75.0711 19.5556V22.0753C75.0711 23.0502 74.263 23.8405 73.2662 23.8405H69.7191C68.7223 23.8405 67.9145 23.0502 67.9145 22.0753V19.481C67.9145 19.481 67.7388 19.481 67.6482 19.481H64.101C63.714 19.481 63.0484 19.481 63.0484 19.481C63.0484 19.481 62.4093 19.481 62.0222 19.481H58.4751C57.4783 19.481 57.4538 19.481 57.4538 19.481H57.1788H56.5515H56.1905C56.1905 19.481 55.8108 19.481 54.8141 19.481H51.2669C50.2701 19.481 49.4623 18.6907 49.4623 17.7157V10.5388C48.9772 10.5249 48.5401 10.3237 48.2238 10.0066L45.1084 18.7421L45.1032 18.7559C44.5112 20.3725 43.688 21.8118 42.4099 22.68L42.3997 22.6869C41.1034 23.5545 39.4048 23.8628 37.5604 23.8628H37.5593C37.2512 23.8628 36.7456 23.8628 36.0448 23.8138C35.1004 23.7478 34.3689 22.9791 34.3689 22.053V19.4619ZM38.5382 15.5582C38.9021 16.5814 39.0838 17.3154 39.0838 17.7825C39.0838 18.8501 38.4928 19.3839 37.3104 19.3839H36.1735V22.053C36.81 22.0975 37.2649 22.0975 37.5604 22.0975C39.2432 22.0975 40.5164 21.8083 41.3804 21.23C42.1992 20.674 42.8585 19.6508 43.4044 18.1606L47.6564 6.23865H43.9954L43.4725 7.88459C43.1061 9.09437 42.7627 10.3042 42.4364 11.514C42.1152 12.7063 41.8104 13.8987 41.517 15.0911C41.2193 13.9268 40.9045 12.7344 40.5695 11.5194C40.2389 10.3205 39.8886 9.09963 39.5161 7.86236L38.993 6.23865H35.1729L38.5382 15.5582ZM57.1334 8.77428V6.23865H54.8141V5.68259C54.8141 4.96653 55.1779 4.55286 55.9377 4.47338C56.0276 4.46398 56.1228 4.45926 56.2239 4.45926H57.1788V1.87915L57.1081 1.8738C56.9608 1.8627 56.8147 1.85171 56.6707 1.84152C56.2617 1.8126 55.8675 1.79018 55.4963 1.79018C54.0864 1.79018 53.0179 2.14606 52.313 2.81332C51.608 3.50283 51.2669 4.41478 51.2669 5.57138V6.23865H49.5159V8.77428H51.2669V17.7157H54.8141V8.77428H57.1334ZM58.4751 17.7157H62.0222V1.87915H58.4751V17.7157ZM64.101 17.7157H67.6482V6.23865H64.101V17.7157ZM64.1919 4.92636H67.58V1.99036H64.1919V4.92636ZM73.2662 16.3145C73.7404 16.9769 74.3437 17.4421 75.0711 17.7099C75.5649 17.8917 76.1158 17.9826 76.7225 17.9826C78.2917 17.9826 79.5422 17.4488 80.4744 16.3589C81.3841 15.2913 81.8388 13.8233 81.8388 11.9772C81.8388 10.1533 81.3841 8.68533 80.4744 7.59545C79.5422 6.5278 78.2917 5.97174 76.7225 5.97174C76.076 5.97174 75.4952 6.07372 74.9799 6.27764C74.2553 6.56449 73.6604 7.0531 73.1953 7.74348C73.1886 7.75341 73.182 7.76337 73.1753 7.77338V6.23865H69.7191V22.0753H73.2662V16.3145ZM74.3713 9.09565C74.2867 9.14802 74.2068 9.20638 74.1315 9.27065C73.5244 9.78925 73.2208 10.6946 73.2208 11.9772C73.2208 14.1347 74.0623 15.2023 75.7449 15.2023C76.518 15.2023 77.132 14.9354 77.5867 14.3571C78.0187 13.7788 78.2462 12.9559 78.2462 11.8882C78.2462 9.79744 77.4047 8.75204 75.7449 8.75204C75.1982 8.75204 74.7402 8.86709 74.3713 9.09565ZM30.5554 17.7157H34.1026V1.87915H30.5554V17.7157Z" fill="white"></path><path d="M22.0284 8.89078C22.4941 8.6269 23.0678 8.6269 23.5335 8.89078L25.0985 9.77752C25.5641 10.0414 25.8511 10.529 25.8511 11.0567V12.8302C25.8511 13.358 25.5641 13.8456 25.0985 14.1095L23.5335 14.9962C23.0678 15.2601 22.4941 15.2601 22.0284 14.9962L20.4635 14.1095C19.9978 13.8456 19.7109 13.358 19.7109 12.8302V11.0567C19.7109 10.529 19.9978 10.0414 20.4635 9.77752L22.0284 8.89078Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25.3279 4.32989L27.9995 5.89653C29.5754 6.82076 30.5464 8.52879 30.5464 10.3773V13.5105C30.5464 15.3589 29.5754 17.067 27.9995 17.9912L25.3279 19.5578C23.7519 20.482 21.8101 20.482 20.2341 19.5578L17.5626 17.9912C15.9865 17.067 15.0156 15.3589 15.0156 13.5105V10.3773C15.0156 8.52879 15.9865 6.82076 17.5626 5.89653L20.2341 4.32989C21.8101 3.40566 23.7519 3.40566 25.3279 4.32989ZM24.4183 5.93016C23.4051 5.336 22.1568 5.336 21.1437 5.93016L18.4722 7.49677C17.459 8.09092 16.8349 9.18895 16.8349 10.3773V13.5105C16.8349 14.6988 17.459 15.7968 18.4722 16.3909L21.1437 17.9576C22.1568 18.5517 23.4051 18.5517 24.4183 17.9576L27.0898 16.3909C28.1029 15.7968 28.7272 14.6988 28.7272 13.5105V10.3773C28.7272 9.18895 28.1029 8.09092 27.0898 7.49677L24.4183 5.93016Z" fill="white"></path></g><defs><clipPath id="clip0_1640_1220"><rect width="83.7447" height="24" fill="white"></rect></clipPath></defs></svg>
            </div>

            {/* <button type="button" class="btn-closes" data-bs-dismiss="modal">X</button>  */}

            <div class="modal-body">
              {/* <button onClick={() => { rollDice();}}  >fjkdsf</button> */}
              <div className="body_choice">

                <Typography variant="h6" className="d-block">Choice:

                  {allDiceCount.includes(1) ? <img className="mx-1" src="images/DiceOne.svg" /> : ""}
                  {allDiceCount.includes(2) ? <img className="mx-1" src="images/DiceTwo.svg" /> : ""}
                  {allDiceCount.includes(3) ? <img className="mx-1" src="images/DiceThree.svg" /> : ""}
                  {allDiceCount.includes(4) ? <img className="mx-1" src="images/DiceFour.svg" /> : ""}
                  {allDiceCount.includes(5) ? <img className="mx-1" src="images/DiceFive.svg" /> : ""}
                  {allDiceCount.includes(6) ? <img className="mx-1" src="images/DiceSix.svg" /> : ""}
                </Typography>
              </div>
              <Box className="d-flex row">
                <Grid container spacing={0}
                  justifyContent="center"
                  alignItems="center"
                >

                  <div class="dice" style={{}}>

                    <ol class="die-list odd-roll ol3 m-0 p-0" data-roll="1" id="die-2">
                      <li class="die-items m-0 p-0" data-side="1">
                        <span class="dot"></span>
                      </li>
                      <li class="die-items" data-side="2">
                        <span class="dot"></span>
                        <span class="dot"></span>
                      </li>
                      <li class="die-items" data-side="3">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                      </li>
                      <li class="die-items" data-side="4">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                      </li>
                      <li class="die-items" data-side="5">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                      </li>
                      <li class="die-items" data-side="6">
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                      </li>
                    </ol>
                  </div>
                  <p className="text-white text-center"> <span className="  fw-bolder fs-4" style={{ color: "#58F57B" }}> {winAmount[0]} </span></p>

                  <p className="text-center text-white">{winAmount[1]}  <span style={{ color: "#58F57B" }} className="">{winAmount[2]}</span>

                    {winAmount[3]}
                  </p>



                </Grid>

              </Box>
            </div>
            <div class="modal-footer">
              <button onClose={handleClose} type="button" class="btn btn-secondary footerButton" data-bs-dismiss="modal">Close</button>
              {/* <button type="button" class="btn btn-primary" >Save changes</button> */}
            </div>
          </div>
        </div>
      </div>

      {/* /////// new modal end ////////////// */}
      <div className=''>
          <HomeTable />
        </div>
          <div>
            <Game_footer/>
          </div>
    </Box>
  );
}
