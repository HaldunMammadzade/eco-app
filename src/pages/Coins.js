import {
      Box,
      Text,
      Image,
      UnorderedList,
      ListItem
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import cover from "../image/coins-bg.jpg";
import leftArrow from "../image/left-white.svg";
import gift from "../image/coins-gift.svg";
import icon from "../image/icon-leaf.svg";
import icon1 from "../image/coins-icon1.svg";
import icon2 from "../image/coins-icon2.svg";
import icon3 from "../image/coins-icon3.svg";
import icon4 from "../image/coins-icon4.svg";
import leafs from "../image/leafs.svg";
export default function Coins() {
      return (
            <Box bgImage={cover} backgroundPosition={"center"} bgRepeat={"no-repeat"} h={"100vh"} bgSize={"cover"}>
                  <Box>
                        <Link to="/map">
                              <Image position={""}
                                    mt="20px"
                                    ml={"30px"}
                                    src={leftArrow} />
                        </Link>
                        <Box display={"flex"} alignItems={"center"} position={"absolute"} right={"22px"} top={"22px"}>
                        <Text color={"#FAD305"} fontSize={"20px"}>120</Text>
                        <Image ml={"7px"} src={leafs} />
                        </Box>

                        <Box display={"flex"} flexDirection={"column"} textAlign={"center"} justifyContent={"center"} className="animated fadeInDown" bgColor={"white"} borderRadius={"20px"} mx={"20px"} mt={"20px"} px={"20px"} py={"20px"} fontSize={"18px"}>
                              <Image height={"160px"} objectFit={"contain"} src={gift} />
                              <Text mt={"20px"}>Ümumi Quiz Nəticəsi</Text>
                        </Box>

                        <Box className="animated fadeInRightBig" mb={"20px"} display={"flex"} justifyContent={"center"} bgColor={"white"} borderRadius={"20px"} mx={"20px"} mt={"30px"} px={"10px"} py={"10px"} fontSize={"16px"}>
                              <Text mb={"0"}>“GREEN COIN”ləri hədiyyəylə dəyiş</Text>
                        </Box>

                        <Box className="animated fadeInLeftBig" mb={"10px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} mx={"20px"} mt={"30px"} fontSize={"16px"}>
                              <Box display={"flex"} alignItems={"center"}>
                                    <Image mr={"10px"} src={icon2} />
                                    <Text mb={"0"} color={"black"}>Milli parklara giriş</Text>
                              </Box>

                              <Box display={"flex"} alignItems={"center"}>
                                    <Text mb={"0"} color={"black"}>5</Text>
                                    <Image ml={"10px"} width={"20px"} src={icon} />
                              </Box>
                        </Box>

                        <Box className="animated fadeInRightBig" mb={"20px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} mx={"20px"} my={"10px"}  fontSize={"16px"}>
                              <Box display={"flex"} alignItems={"center"}>
                                    <Image mr={"10px"} src={icon3} />
                                    <Text mb={"0"} color={"black"}>Eko çanta</Text>
                              </Box>

                              <Box display={"flex"} alignItems={"center"}>
                                    <Text mb={"0"} color={"black"}>10</Text>
                                    <Image ml={"10px"} width={"20px"} src={icon} />
                              </Box>
                        </Box>

                        <Box className="animated fadeInLeftBig" mb={"20px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} mx={"20px"} my={"10px"} fontSize={"16px"}>
                              <Box display={"flex"} alignItems={"center"}>
                                    <Image mr={"10px"} src={icon4} />
                                    <Text mb={"0"} color={"black"}>Qoruğa giriş bileti</Text>
                              </Box>

                              <Box display={"flex"} alignItems={"center"}>
                                    <Text mb={"0"} color={"black"}>8</Text>
                                    <Image ml={"10px"} width={"20px"} src={icon} />
                              </Box>
                        </Box>

                        <Box className="animated fadeInRightBig" mb={"20px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} mx={"20px"}  my={"10px"} fontSize={"16px"}>
                              <Box display={"flex"} alignItems={"center"}>
                                    <Image mr={"10px"} src={icon1} />
                                    <Text mb={"0"} color={"black"}>“Yaşıl Gələcək”dən sertifikat</Text>
                              </Box>

                              <Box display={"flex"} alignItems={"center"}>
                                    <Text mb={"0"} color={"black"}>2</Text>
                                    <Image ml={"10px"} width={"20px"} src={icon} />
                              </Box>
                        </Box>
                  </Box>

                  <Menu />
            </Box>
      );
}
