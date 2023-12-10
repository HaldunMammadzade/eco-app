import { Box, Image, Text } from "@chakra-ui/react";
import img1 from "../image/img1.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box
      className=""
      textAlign={"center"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      bgColor={"#F8F8EC"}
      minH={"100vh"}
    >
      <Box className="animated fadeInLeft">
        <Image
          src={img1}
          width={"300px"}
          height={"300px"}
          objectFit={"contain"}
          priority
        />
      </Box>
      <Text className="animated fadeInRight" fontSize={"36px"} fontWeight={"bold"} color={"#0E7F3D"}>
        Tree Love
      </Text>
      

      <Link className="animated fadeInRight"
        to="/stepper"
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
        Başla
      </Link>
    </Box>
  );
}
