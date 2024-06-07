import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import HomeTable from "../Table/table";
import "./Lottery.css";

export default function Lottery() {
  const style = {
    height:{ lg:"220px", sm:"auto", md:"220px", xs:"auto"},
  };
  return (
    <>
      <Box
        style={{ background: "#151a1e" }}
        className="mt-lg-1 mt-sm-2 side_nav_open_main_com"
        sx={{ padding: { lg: "0px 50px", sm: "0px 10px", md: "0px 10px" } }}
      >
        <Box sx={{ display: "flex" }}>
          <Avatar
            sx={{ width: "40px", height: "40px" }}
            src="Images/lottery.svg"
          />
          <Typography
            variant="h5"
            className="pt-1"
            style={{ color: "#f9d85a" }}
          >
            Lottery
          </Typography>
        </Box>
        <Box className="mt-4 p-3 rounded-4">
          <Grid container spacing={0}>
            <Grid lg={6} md={12} sm={12} className="lottery_box">



            <Grid container spacing={0}>
            <Grid lg={10} md={10} sm={10} xs={10}>
            <Typography variant="h4" className="text-white fw-bold p-3"> Polyflip NFT Lottery 2</Typography>
            </Grid>

            <Grid lg={2} md={2} sm={2} xs={2} className="text-end content-end">
            <Button
                sx={{ backgroundColor: " #ffa463", color: "#0b5130" ,}}
                style={{ width: "80px" }}
                className="me-2 mt-2 p-3 rounded-3 fw-bolder "
              >
               Drown
              </Button>

            </Grid>
             </Grid>
             <hr style={{color:"gray",height:"2px"}}/>
             

              <Grid container spacing={0}>
                <Grid item xs={12} sm={6} className="p-3" >
                  <Box sx={{}} className="lottery_box text-center content-center text-white p-3" >
                    <Typography>My Ticket : 0</Typography>
                    <img
                      style={{ width: "70%", height: "120px", margin:"15px 0px" }}
                      src="Images/lotterycard.png"
                    />
                    <Typography
                      // variant="h6"
                      className="pt-1"
                      style={{ color: "#f9d85a" }}
                    >
                      Total Prize
                    </Typography>
                    <Typography
                      variant="h4"
                      className="pt-1"
                      style={{ color: "#f9d85a" }}
                    >
                      1,00,000  
                     
                       {/* <img
                      style={{}}
                      src="Images/lotterycardicon.svg"
                    />
                     */}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} className=" p-3">
                <Box sx={{}} className="lottery_box text-center content-center text-white p-3" >
                    <Typography>Winners</Typography>
          <Grid container spacing={0} className=" justCenter ">
          <Grid lg={3} md={3} sm={3}  sx={style}>
          <img
                      style={{ width: "100%", height: "50px", margin:"15px 0px" }}
                      src="Images/lotterycard.png"
                    />
          </Grid>
          <Grid lg={9} md={9} sm={9} className="text-start p-2">
          <Typography
                      // variant="h6"
                      className="pt-1"
                      style={{ color: "#f9d85a" }}
                    >
                      Total Prize
                    </Typography>
                    <Typography
                      variant="h5"
                      className=""
                      style={{ color: "#f9d85a" }}
                    >
                      1,00,0000  
                     
                       {/* <img
                      style={{}}
                      src="Images/lotterycardicon.svg"
                    />
                     */}
                    </Typography>
          </Grid>
          </Grid>

                  
                    
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              lg={9}
              md={12}
              sm={12}
              style={{ background: "#101316", padding: "0" }}
            >

            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className="mt-3" >
  <HomeTable />
      </Box>
      
    </>
  );
}
