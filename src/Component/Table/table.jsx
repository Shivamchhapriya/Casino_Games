import { Badge } from "@material-ui/core";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import Footer_card from "../card";
import Game_footer from "../footer";
import './table.css';

function HomeTable() {
  const [tableMap, setTableMap] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

  return (
    <>
         <div className="search-table-outter wrapper side_nav_open_main_com mt-4">
          <table class="table text-white search-table inner ">
            <thead style={{background:'radial-gradient(rgb(202 41 162 / 83%), rgb(87 26 69))'}}>
            <tr>
                <th scope="col">Game</th>
                <th scope="col">Player</th>
                <th scope="col">ID</th>
                <th scope="col">Bet</th>
                <th scope="col">Choice</th>
                <th scope="col">Result</th>
                <th scope="col">Payout</th>
              </tr>
            </thead>
             
            <tbody>
              {
                tableMap.map((dt) =>
                  <tr>
                    <td className="gap-2" scope="row" style={{ color: "#ff4e4e" }}><img src="/images/roulette.svg"></img>Roulette</td>
                    <td className=""><img className="avtarImage" alt="Remy Sharp" src="/images/avtarImage.jpg" />guru</td>
                    <td>21545</td>
                    <td>2.54<img className="maticImage" src="/images/matice.svg"></img></td>
                    <td className="gap-3"><img className="HeadTailImage" src="/images/tail.svg"></img><img className="HeadTailImage" src="/images/tail.svg"></img><img className="HeadTailImage" src="/images/head.svg"></img><img className="HeadTailImage" src="/images/tail.svg"></img></td>
                    <td className="gap-3"><img className="HeadTailImage" src="/images/tail.svg"></img><img className="HeadTailImage" src="/images/tail.svg"></img><img className="HeadTailImage" src="/images/head.svg"></img><img className="HeadTailImage" src="/images/tail.svg"></img></td>
                    <td>10.54<img className="maticImage" src="/images/matice.svg"></img></td>

                  </tr>
                )

              }

             

            </tbody>
          </table>
          </div>
         
      
    </>
  );
}

export default HomeTable;