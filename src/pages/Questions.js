import React, { useState, useEffect } from "react";
import { Box, Text, Image,useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

import Menu from "../components/Menu";
import cover from "../image/cover.jpg";
import leftArrow from "../image/left-white.svg";
import checked from "../image/checked.svg";
import unchecked from "../image/unchecked.svg";

import questionsData from "../json/questions.json";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const toast = useToast(); 
  const navigate = useNavigate();

  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

  const loadQuestions = () => {
    const shuffledQuestions = shuffleArray(questionsData.questions);
    setQuestions(shuffledQuestions);
    setCurrentQuestion(shuffledQuestions[currentQuestionIndex]);
  };

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setCurrentQuestion({ ...currentQuestion, answeredCorrectly: true });
      setCorrectAnswers((prevAnswers) => [...prevAnswers, currentQuestion]);

      setTimeout(() => {
        navigate("/tree-game");
      }, 3000);
    } else {
      toast({
        title: "Cavab doğru deyil !",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (currentQuestion && currentQuestion.answeredCorrectly) {
      // navigate("/tree-game");
    }
  }, [currentQuestion, navigate]);

  useEffect(() => {
    loadQuestions();
  }, [currentQuestionIndex]);

  return (
    <Box bgImage={cover} backgroundPosition={"center"} bgRepeat={"no-repeat"} h={"100vh"} bgSize={"cover"}>
      <Box>
        <Link to="/tree-game">
          <Image position={""} mt="30px" ml={"30px"} src={leftArrow} />
        </Link>

        {currentQuestion && (
          <Box className="animated fadeInDown" bgColor={"white"} borderRadius={"20px"} mx={"20px"} mt={"30px"} px={"20px"} py={"30px"} fontSize={"18px"}>
            {currentQuestion.question}
          </Box>
        )}

        {currentQuestion && currentQuestion.answers.map((answer, index) => (
          <Box
            key={index}
            className={`animated ${index % 2 === 0 ? 'fadeInRight' : 'fadeInLeft'}`}
            mb={"10px"}
            display={"flex"}
            justifyContent={"space-between"}
            border={`2px solid ${answer.isCorrect && currentQuestion.answeredCorrectly ? "green" : !answer.isCorrect && currentQuestion.answeredCorrectly ? "red" : "white"}`}
            borderRadius={"20px"}
            bgColor={"white"}
            color={"green"}
            mx={"20px"}
            mt={"20px"}
            px={"20px"}
            py={"20px"}
            fontSize={"16px"}
            onClick={() => handleAnswerClick(answer.isCorrect)}
          >
            <Text mb={"0"}>{answer.text}</Text>
            <Image src={answer.isCorrect && currentQuestion.answeredCorrectly ? checked : unchecked} />
          </Box>
        ))}
      </Box>

      <Menu />
    </Box>
  );
};

export default Questions;
