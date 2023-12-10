import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import welcome from "../image/welcome.png";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <Box
      textAlign={"center"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      bgColor={"#F8F8EC"}
      minH={"100vh"}
    >
      <Box>
        <Image
          src={welcome}
          width={"300px"}
          height={"300px"}
          objectFit={"contain"}
          priority
        />
      </Box>
      <Text fontSize={"36px"} fontWeight={"bold"}>
        Xoş Gəlmisən!
      </Text>
     

      <Link
        to="/login"
        style={{
          backgroundColor: "#D1FAE5",
          border: "1px solid #10B981",
          borderRadius: "10px",
          textDecoration: "none",
          color: "#10B981",
          padding: "15px 50px",
          marginTop: "30px"
        }}
      >
        Login
      </Link>

      <Link
        to="/login"
        style={{
          backgroundColor: "#D1FAE5",
          border: "1px solid #10B981",
          borderRadius: "10px",
          textDecoration: "none",
          color: "#10B981",
          padding: "15px 50px",
          marginTop: "30px"
        }}
      >
        Qeydiyyat
      </Link>
    </Box>
  );
}
export default Welcome;
