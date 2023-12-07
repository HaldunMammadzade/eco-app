import { Box, Image, Text } from "@chakra-ui/react";
import img1 from "../image/img1.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box
      className="animated fadeIn"
      textAlign={"center"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      bgColor={"#F8F8EC"}
      minH={"100vh"}
    >
      <Box className="animated slideInDown">
        <Image
          src={img1}
          width={"300px"}
          height={"300px"}
          objectFit={"contain"}
          priority
        />
      </Box>
      <Text fontSize={"36px"} fontWeight={"bold"} color={"#0E7F3D"}>
        Tree Love
      </Text>
      <Text
        my={"30px"}
        mx={"5rem"}
        color={"#828282"}
        fontSize={"14px"}
        fontWeight={"400"}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        fermentum velit orci, ac rutrum lorem consequat nec. Cras tristique
        elementum nisl sed ornare.
      </Text>

      <Link
        to="/stepper"
        style={{
          backgroundColor: "#D1FAE5",
          border: "1px solid #10B981",
          borderRadius: "10px",
          textDecoration: "none",
          color: "#10B981",
          padding: "15px 50px",
        }}
      >
        Başla
      </Link>
    </Box>
  );
}
