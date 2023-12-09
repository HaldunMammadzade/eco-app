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

const randomNames = ["Zeytun", "Şərq çinarı", "Söyüd", "Tut", "Xəzər lələyi", "Şam"];
const randomDate = ["11.01.2023", "07.06.2023", "26.12.2022", "01.05.2021", "20.04.2023", "03.10.2021", ];
const randomMood= ["Yaxşı", "Qənaətbəxş"];
const randomCord= ["40.378343; 49.848305", "41.345343; 47.234435", "40.354654; 49.465733", "40.123435; 48.745675"];

function getRandomName() {
  const randomIndex = Math.floor(Math.random() * randomNames.length);
  return randomNames[randomIndex];
}
function getRandomMood() {
  const randomIndex = Math.floor(Math.random() * randomMood.length);
  return randomMood[randomIndex];
}
function getRandomDate() {
  const randomIndex = Math.floor(Math.random() * randomDate.length);
  return randomDate[randomIndex];
}

function getRandomCord() {
  const randomIndex = Math.floor(Math.random() * randomCord.length);
  return randomCord[randomIndex];
}

export default function About() {
  const randomName = getRandomName();
  const randomMood = getRandomMood();
  const randomDate = getRandomDate();
  const randomCord = getRandomCord();
  return (
    <Box>
      <Box
        position={"relative"}
        dropShadow={"0 0 20px green"}
        bgColor={"#E0FFDF"}
        bgImage={treeAbout}
        bgSize={"contain"}
        bgRepeat={"no-repeat"}
        bgPosition={"right"}
        h={"60vh"}
        borderBottomLeftRadius={"40px"}
        borderBottomRightRadius={"40px"}
      >
        <Link to="/map">
          <Image position={"absolute"}
            top={"30px"}
            left={"30px"} zIndex={"10"} src={leftArrow} />
        </Link>
        
        <Text
          fontSize={"30px"}
          color={"#244309"}
          fontWeight={"bold"}
          position={"absolute"}
          bottom={"50px"}
          left={"40px"}
        >
          {randomName}
        </Text>
      </Box>

      <Box my={"40px"} mx={"40px"}>
        <UnorderedList>
          <ListItem my={"15px"} fontSize={"20px"}>Koordinatlar: {randomCord}</ListItem>
          <ListItem my={"15px"} fontSize={"20px"}>Fitosanitar vəziyyəti: {randomMood}</ListItem>
          <ListItem my={"15px"} fontSize={"20px"}>Qeydiyyat tarixi: {randomDate}</ListItem>
        </UnorderedList>

        <Link to="/tree-game" className="himaye">Himayəyə götür </Link>
      </Box>
      <Menu />
    </Box>
  );
}
