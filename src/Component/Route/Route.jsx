import React from 'react';
import { Routes, Route} from "react-router-dom";
import CoinFlip from '../CoinFlip/CoinFlip';
import Crash from '../Crash/Crash';
import Dice from '../Dice/Dice';
import DubbzHome from '../DubbzHome/DubbzHome';
import GameHome from '../GameHome/GameHome';
import LeaderBoard from '../Leaderboard/leaderBoard';
import Lottery from '../Lottery/Lottery';
import Profile from '../Profile/Profile';
import Promotions from '../Promotions/Promotions';
import Roulette from '../Roulette/Roulette';

export default function AppRoutes() {
  return (
    <>
    <Routes>
      <Route path="/" element={<GameHome/>}></Route>
      <Route path="*" element={<GameHome/>}></Route>
      <Route path="/home" element={<GameHome />}></Route>
      <Route path="/dice" element={<Dice/>}></Route>
      <Route path="/coinflip" element={<CoinFlip/>}></Route>
      <Route path="/crash" element={<Crash/>}></Route>
      <Route path="/lottery" element={<Lottery/>}></Route>
      <Route path="/roulette" element={<Roulette/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/leaderboard" element={<LeaderBoard/>}></Route>
      <Route path="/promotion" element={<Promotions/>}></Route>


      {/* <Route path="/DubbzHome" element={<DubbzHome/>}></Route> */}
    </Routes>
    </>
  )
}
