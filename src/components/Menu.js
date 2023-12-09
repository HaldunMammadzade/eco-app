import React from "react";
import {  Image  } from "@chakra-ui/react";
import qr from "../image/menu-qr.svg";
import person from "../image/menu-person.svg";
import leaf from "../image/menu-leaf.svg";
import menu from "../image/menu-icon.svg";
import gift from "../image/gift.svg";
function Menu() {
  return (
    <div>
      <nav className={"nav"}>
        <input id="menu" type="checkbox" />
        <label for="menu">
        <Image h={"50px"} src={menu} />
        </label>
        <ul className={"menu"}>
          <li>
            <a href="/qr">
              <Image src={qr} />
            </a>
          </li>
          <li>
            <a href="/leaderboard">
              <Image src={person} />
            </a>
          </li>
          <li>
            <a href="/coins">
              <Image src={gift} />
            </a>
          </li>
          <li>
            <a href="/about">
              <Image src={leaf} />
            </a>
          </li>
          
          
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
