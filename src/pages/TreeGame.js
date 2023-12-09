import {
  Box,
  Text,
  Image,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import treeGame from "../image/tree-game.png";
import leftArrow from "../image/left-arrow.svg";
import leafs from "../image/leafs.svg";

const ProgressBar = ({ value, onClick }) => (
  <div className="skillBarContainer" onClick={onClick}>
    <Box w={`${value * 20}%`} className="skillBarValue"></Box>
  </div>
);
export default function TreeGame() {
  const [progressBars, setProgressBars] = useState([0]);

  const handleProgressBarClick = (index) => {
    // Yeni bir dizi oluşturun ve tıklanan çubuğun değerini 1 artırın
    const newProgressBars = [...progressBars];
    newProgressBars[index] += 1;
    setProgressBars(newProgressBars);
  };



  return (
    <Box>
      <Box
        // position={"relative"}
        dropShadow={"0 0 20px green"}
        bgColor={"#E0FFDF"}

        h={"60vh"}
        borderBottomLeftRadius={"40px"}
        borderBottomRightRadius={"40px"}
      >
        <Image position={"absolute"} bottom={"17.5rem"} width={"100%"} objectFit={"contain"} left={"0"} src={treeGame} />
        <Link to="/about">
          <Image position={"absolute"}
            top={"30px"}
            left={"30px"} zIndex={"10"} src={leftArrow} />
        </Link>
        <Box position={"absolute"} right={"22px"} top={"22px"}>
          <Image ml={"7px"} src={leafs} />
        </Box>
        <Link to="/questions">Question</Link>
      </Box>

      <Box position={"absolute"} bottom={"145px"} w={"100%"} px={"40px"}>
        <div className="skillBar">
          <h4>Ağacın vəziyyəti: Yaxşı</h4>
          {progressBars.map((value, index) => (
            <Box key={index} display={"flex"} alignItems={"center"} mt={"10px"}>
              <ProgressBar value={value} onClick={() => handleProgressBarClick(index)} />
              <Text ml={"20px"} fontSize={"18px"}>
                {value}/5
              </Text>
            </Box>
          ))}
        </div>
      </Box>
      <Menu />
    </Box>
  );
}
