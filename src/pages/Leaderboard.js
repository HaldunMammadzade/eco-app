import {
      Box,
      Text,
      Image,
      UnorderedList,
      ListItem
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import treeAbout from "../image/tree-about.png";
import leftArrow from "../image/left-arrow.svg";
import rainbow from "../image/cover-rainbow.png";
import person1 from "../image/person1.jpeg";
import person2 from "../image/person2.jpeg";
import person3 from "../image/person3.jpeg";
import person4 from "../image/person4.jpeg";
import person5 from "../image/person5.jpeg";
import person6 from "../image/person6.jpeg";
import icon from "../image/icon-leaf.svg";
import queen from "../image/queen.svg";


export default function Leaderboard() {
      return (
            <Box height={"100%"}>
                  <Box >
                        <Image w={"100%"} src={rainbow} />
                        <Box position={"absolute"} top="6rem" display={"flex"} justifyContent={"space-around"} w={"100%"}>
                              <Box>
                                    <Image border={"4px solid #0E7F3D"} mt={"50px"} w={"120px"} h={"120px"} borderRadius={"50%"} src={person2} />
                                    <Box position={"absolute"} bottom={"-7px"} left={"54px"} w={"25px"} h={"25px"} display={"flex"} alignItems={"center"} justifyContent={"center"} bgColor={"#0E7F3D"} borderRadius={"50%"} color={"white"} fontSize={"12px"}>2</Box>
                              </Box>

                              <Box position={"relative"}>
                                    <Image border={"4px solid #FFD912"} w={"120px"} h={"120px"} borderRadius={"50%"} src={person6} />
                                    <Image position={"absolute"} top={"-44px"} left={"35px"} w={"50px"} h={"50px"}  src={queen} />
                                    <Box position={"absolute"} bottom={"44px"} left={"45px"} w={"25px"} h={"25px"} display={"flex"} alignItems={"center"} justifyContent={"center"} bgColor={"#FFD912"} borderRadius={"50%"} color={"white"} fontSize={"12px"}>1</Box>
                              </Box>

                              <Box>
                                    <Image border={"4px solid #0E7F3D"} mt={"50px"} w={"120px"} h={"120px"} borderRadius={"50%"} src={person4} />
                                    <Box position={"absolute"} bottom={"-5px"} right={"54px"} w={"25px"} h={"25px"} display={"flex"} alignItems={"center"} justifyContent={"center"} bgColor={"#0E7F3D"} borderRadius={"50%"} color={"white"} fontSize={"12px"}>3</Box>
                              </Box>
                        </Box>
                        <Link
                              to="/map"
                        >
                              <Image position={"absolute"}
                                    top={"30px"}
                                    left={"30px"} zIndex={"10"} src={leftArrow} />
                        </Link>
                  </Box>

                  <Box className="animated fadeInRight" h={"70px"} mb={"20px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} bgColor={"#CECACA"} borderRadius={"20px"} mx={"20px"} mt={"20px"} px={"20px"} py={"5px"} fontSize={"18px"}>
                        <Box display={"flex"} alignItems={"center"}>
                              <Text color={"black"} mr={"15px"} mb={"0"}>4</Text>
                              <Image mr={"10px"} w={"50px"} h={"50px"} borderRadius={"50%"} src={person3} />
                              <Text color={"black"} mr={"10px"} fontSize={'14px'} mb={"0"}>Anar Məmmədov</Text>
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                              <Text color={"black"} mr={"10px"} mb={"0"}>6</Text>
                              <Image w={"30px"} h={"30px"} src={icon} />
                        </Box>
                  </Box>

                  <Box className="animated fadeInLeft" h={"70px"} mb={"20px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} bgColor={"#CECACA"} borderRadius={"20px"} mx={"20px"} mt={"20px"} px={"20px"} py={"5px"} fontSize={"18px"}>
                        <Box display={"flex"} alignItems={"center"}>
                              <Text color={"black"} mr={"15px"} mb={"0"}>5</Text>
                              <Image mr={"10px"} w={"50px"} h={"50px"} borderRadius={"50%"} src={person5} />
                              <Text color={"black"} mr={"10px"} fontSize={'14px'} mb={"0"}>Taleh Məhərrəmov</Text>
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                              <Text color={"black"} mr={"10px"} mb={"0"}>5</Text>
                              <Image w={"30px"} h={"30px"} src={icon} />
                        </Box>
                  </Box>

                  <Box className="animated fadeInLeft" h={"70px"} mb={"20px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} bgColor={"#CECACA"} borderRadius={"20px"} mx={"20px"} mt={"20px"} px={"20px"} py={"5px"} fontSize={"18px"}>
                        <Box display={"flex"} alignItems={"center"}>
                              <Text color={"black"} mr={"15px"} mb={"0"}>6</Text>
                              <Image mr={"10px"} w={"50px"} h={"50px"} borderRadius={"50%"} src={person1} />
                              <Text color={"black"} mr={"10px"} fontSize={'14px'} mb={"0"}>Tahir Ağazadə</Text>
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                              <Text color={"black"} mr={"10px"} mb={"0"}>4</Text>
                              <Image w={"30px"} h={"30px"} src={icon} />
                        </Box>
                  </Box>

                  <Menu />
            </Box>
      );
}
