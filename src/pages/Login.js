import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import bgforest from "../image/bg-forest.jpg";
import girl from "../image/girl.png";
import treesborder from "../image/trees-border.png";
import leaves1 from "../image/leaves1.png";
import leaves2 from "../image/leaves2.png";
import leaves3 from "../image/leaves3.png";
import leaves4 from "../image/leaves4.png";
import leaves5 from "../image/leaves5.png";
function Login() {
  return (
    <Box className={"section"}>
      <Box className={"leaves"}>
        <Box className={"set"}>
          <div>
            <Image src={leaves1} />
          </div>
          <div>
            <Image src={leaves2} />
          </div>
          <div>
            <Image src={leaves3} />
          </div>
          <div>
            <Image src={leaves4} />
          </div>
          <div>
            <Image src={leaves5} />
          </div>
        </Box>
      </Box>
      <Image src={bgforest} className={"bg"} />
      <Image src={girl} className={"girl"} />
      <Image src={treesborder} className={"trees"} />
      <Box className={"login"}>
        <h2>Daxil ol</h2>
        <Box className={"inputBox"}>
          <input type="text" placeholder="İstifadəçi adı" />
        </Box>
        <Box className={"inputBox"}>
          <input type="password" placeholder="Şifrə" />
        </Box>
        <Box className={"inputBox"}>
          <a href="/about">
            <input type="submit" value="Login" id="btn" />
          </a>
        </Box>
        <Box className={"group"}>
          <a href="#">Parolu unutmuşam...</a>
          <a href="#">Qeydiyyat</a>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
