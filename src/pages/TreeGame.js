import {
  Box,
  Text,
  Image
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import treeGame from "../image/tree-game.png";
import leftArrow from "../image/left-arrow.svg";
import leafs from "../image/leafs.svg";
import donate from "../image/donate.svg";
import green from "../image/green.svg";
import gameicon1 from "../image/game-icon1.svg";
import gameicon2 from "../image/game-icon2.svg";
import gameicon3 from "../image/game-icon3.svg";
import gameicon4 from "../image/game-icon4.svg";
import gameicon5 from "../image/game-icon5.svg";
import gameicon6 from "../image/game-icon6.svg";

const ProgressBar = ({ value, onClick }) => (
  <div className="skillBarContainer" onClick={onClick}>
    <Box w={`${value}%`} className="skillBarValue"></Box>
  </div>
);
export default function TreeGame() {
  const [progressBars, setProgressBars] = useState([0]);

  const handleProgressBarClick = (index) => {
    // Yeni bir dizi oluşturun ve tıklanan çubuğun değerini 1 artırın
    const newProgressBars = [...progressBars];
    newProgressBars[index] += 3;
    setProgressBars(newProgressBars);
  };

  useEffect(() => {
    const intervalIds = [];

    // Sayfa açıldığında ilk artış (1 saniyede bir, %3)
    intervalIds.push(setInterval(() => {
      const newProgressBars = progressBars.map((value) => value + 3);
      setProgressBars(newProgressBars);
    }, 5000));

    // Sonraki ilerleme çubukları her 10 saniyede bir artar (1 saniyede %1)
    for (let i = 1; i < progressBars.length; i++) {
      intervalIds.push(setInterval(() => {
        const newProgressBars = [...progressBars];
        newProgressBars[i] += 1;
        setProgressBars(newProgressBars);
      }, 10000));
    }

    return () => {
      // Temizleme işlevi
      intervalIds.forEach(clearInterval);
    };
  }, [progressBars]);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        <Image position={"absolute"} bottom={"18.5rem"} width={"100%"} objectFit={"contain"} left={"0"} src={treeGame} />
        <Link to="/about">
          <Image position={"absolute"}
            top={"30px"}
            left={"30px"} zIndex={"10"} src={leftArrow} />
        </Link>
        <Box position={"absolute"} right={"22px"} top={"22px"}>
          <Image ml={"7px"} src={leafs} />
        </Box>
        <Box onClick={openModal} position={"absolute"} right={"22px"} top={"82px"}>
          <Image ml={"7px"} src={donate} />
        </Box>
        <Box w={"100%"} position={"absolute"} bottom={"15rem"} >
          <Box w={"100%"} display={"flex"} justifyContent={"space-between"}>
            <Link to="/questions">
              <Image marginTop={"7rem"} width={"50px"} objectFit={"contain"} src={gameicon1} />
            </Link>

            <Link to="/questions">
              <Image marginTop={"10rem"} width={"50px"} objectFit={"contain"} src={gameicon2} />
            </Link>

            <Link to="/questions">
              <Image marginTop={"11rem"} width={"50px"} objectFit={"contain"} src={gameicon3} />
            </Link>

            <Link to="/questions">
              <Image marginTop={"11rem"} width={"50px"} objectFit={"contain"} src={gameicon4} />
            </Link>

            <Link to="/questions">
              <Image marginTop={"10rem"} width={"50px"} objectFit={"contain"} src={gameicon5} />
            </Link>

            <Link to="/questions">
              <Image marginTop={"7rem"} width={"50px"} objectFit={"contain"} src={gameicon6} />
            </Link>

          </Box>
        </Box>
      </Box>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <Box py={"30px"} display={"flex"} flexDirection={"column"} justifyContent={"center"} >
              <Box textAlign={"center"}><Image objectFit={"contain"} src={green} /></Box>
              <Text textAlign={"center"} mt={"20px"} px={"20px"} color={"black"} fontSize={"30px"}>Sən də Yaşıl Gələcəyə Töhfə Ver!</Text>

              <Box mt={"20px"} bgColor={"#0E7F3D"} textAlign={"center"} borderRadius={"20px"} p={"10px 30px"}><Link className="iane" to={"https://yasilgelecek.az"} target="_blank">İanə et</Link></Box>
            </Box>
          </div>
        </div>
      )}

      <Box position={"absolute"} bottom={"145px"} w={"100%"} px={"40px"}>
        <div className="skillBar">
          <h4>Ağacın vəziyyəti: Yaxşı</h4>
          {progressBars.map((value, index) => (
            <Box key={index} display={"flex"} alignItems={"center"} mt={"10px"}>
              <ProgressBar value={value} onClick={() => handleProgressBarClick(index)} />
              <Text ml={"20px"} fontSize={"18px"}>
                {value}%
              </Text>
            </Box>
          ))}
        </div>
      </Box>
      <Menu />
    </Box>
  );
}
