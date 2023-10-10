import React, { useState, useEffect } from "react";
import { Row, Col, Image, Modal } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import Confetti from "react-confetti";
import "../css/theory.css";

export const MiniGame = (props) => {
  const { confirm } = Modal;
  const [PassModalOpen, setPassModalOpen] = useState(false); // 합격 Modal창
  const [FailModalOpen, setFailModalOpen] = useState(false); // 불합격 Modal창

  const [selectTheoryData, setSelectTheoryData] = useState([]);
  const [answerChk, setAnswerChk] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState("");
  const [PassCnt, setPassCnt] = useState(0);
  const [FailCnt, setFailCnt] = useState(0);

  const confettiOptions = {
    gravity: 0.15, // 1보다 큰 값으로 설정하면 컨페티가 빠르게 떨어집니다.
  };

  const toggleAnswer = (questionId, answer, realanswer) => {
    if (answer === realanswer) {
      setPassCnt((prev) => prev + 1);
    } else {
      setFailCnt((prev) => prev + 1);
    }

    setAnswerChk((prev) => ({
      ...prev,
      [questionId]: answer,
    }));

    setCurrentQuestionIndex((prev) =>
      prev === selectTheoryData.length - 1 ? 0 : prev + 1
    );

    if (currentQuestionIndex === selectTheoryData.length - 1) {
      setSelectTheoryData([]);
      setAnswerChk({});
      setCurrentQuestionIndex(0);

      if (PassCnt > 2) {
        setPassModalOpen(true);
      } else {
        setFailModalOpen(true);
      }
    }
  };

  const handleOk_Cancel = () => {
    setPassModalOpen(false);
    setFailModalOpen(false);
    setPassCnt(0);
    setFailCnt(0);
    props.ModalClose();
  };

  useEffect(() => {
    const data = [
      {
        questionId: "S000001",
        questionImg: require("../images/quiz/X00008-101.jpg"),
        question: "가방 안에 표창이 있다.",
        RealAnswer: "O",
      },
      {
        questionId: "S000002",
        questionImg: require("../images/quiz/X00015-101.jpg"),
        question: "가방안에 칼이 있다.",
        RealAnswer: "O",
      },
      // {
      //   questionId: "S000003",
      //   questionImg: require("../images/quiz/X03558-101.jpg"),
      //   question: "TEST 3",
      //   RealAnswer: "O",
      // },
      {
        questionId: "S000004",
        questionImg: require("../images/quiz/X03563-101.jpg"),
        question: "가방안에 총이 있다.",
        RealAnswer: "X",
      },
      {
        questionId: "S000005",
        questionImg: require("../images/quiz/X03683-101.jpg"),
        question: "가방안에 면도칼이 없다.",
        RealAnswer: "X",
      },
      {
        questionId: "S000006",
        questionImg: require("../images/quiz/X05508-101.jpg"),
        question: "가방안에 총이 있다.",
        RealAnswer: "O",
      },
      {
        questionId: "S000007",
        questionImg: require("../images/quiz/X05509-101.jpg"),
        question: "가방안에 칼이 있다.",
        RealAnswer: "X",
      },
      {
        questionId: "S000008",
        questionImg: require("../images/quiz/X05510-101.jpg"),
        question: "가방안에 총이 있다.",
        RealAnswer: "O",
      },
      {
        questionId: "S000009",
        questionImg: require("../images/quiz/X05511-101.jpg"),
        question: "가방안에 총이 있다.",
        RealAnswer: "O",
      },
      {
        questionId: "S000010",
        questionImg: require("../images/quiz/X05512-101.jpg"),
        question: "가방안에 총이 없다.",
        RealAnswer: "X",
      },
      {
        questionId: "S000001",
        questionImg: require("../images/quiz/X05513-101.jpg"),
        question: "가방안에 총이 있다.",
        RealAnswer: "O",
      },
      {
        questionId: "S000002",
        questionImg: require("../images/quiz/X05514-101.jpg"),
        question: "가방안에 총이 없다.",
        RealAnswer: "X",
      },
      {
        questionId: "S000003",
        questionImg: require("../images/quiz/X05515-101.jpg"),
        question: "가방안에 칼이 있다.",
        RealAnswer: "X",
      },
      {
        questionId: "S000004",
        questionImg: require("../images/quiz/X05530-101.jpg"),
        question: "가방안에 총이 있다.",
        RealAnswer: "X",
      },
      {
        questionId: "S000005",
        questionImg: require("../images/quiz/X05531-101.jpg"),
        question: "가방안에 칼이 있다.",
        RealAnswer: "X",
      },
      {
        questionId: "S000006",
        questionImg: require("../images/quiz/X05532-101.jpg"),
        question: "가방안에 총이 있다.",
        RealAnswer: "X",
      },
      {
        questionId: "S000007",
        questionImg: require("../images/quiz/X05533-101.jpg"),
        question: "가방안에 칼이 있다.",
        RealAnswer: "X",
      },
      {
        questionId: "S000008",
        questionImg: require("../images/quiz/X05552-101.jpg"),
        question: "가방안에 총이 있다.",
        RealAnswer: "X",
      },
      {
        questionId: "S000009",
        questionImg: require("../images/quiz/X05561-101.jpg"),
        question: "가방안에 칼이 있다.",
        RealAnswer: "X",
      },
      {
        questionId: "S000010",
        questionImg: require("../images/quiz/X05835-101.jpg"),
        question: "가방안에 총이 있다.",
        RealAnswer: "X",
      },
    ];

    const shuffledQuestions = shuffleArray(data);
    const selectedQuestions = shuffledQuestions.slice(0, 5);
    setSelectTheoryData(selectedQuestions);
  }, [props.datetime]);

  // Shuffle function
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <>
      <div
        className="theory_bg"
        style={{ borderRadius: "20px", paddingBottom: "30px" }}
      >
        <div className="theory_con">
          <div className="thetop">
            <div className="theory_bot mt15" style={{ height: "100%" }}>
              <div className="theoryb_right">
                <div
                  id={`question${currentQuestionIndex + 1}`}
                  className="question_detail"
                >
                  <div className="theoryb_box theoryb_box_pd01 theorybr01">
                    <div className="matter01_tit">
                      <div
                        className="mat01tit_left"
                        style={{ fontSize: "28px" }}
                      >
                        문제번호
                        <span>
                          {currentQuestionIndex + 1 < 9
                            ? `0${currentQuestionIndex + 1}`
                            : currentQuestionIndex + 1}
                        </span>
                      </div>
                      <div
                        className="mat01tit_right"
                        style={{ fontSize: "30px" }}
                      >
                        <p className="mat01tit">
                          {selectTheoryData[currentQuestionIndex]?.question}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="theoryb_box theorybr02"
                    style={{ padding: "20px" }}
                  >
                    <Row gutter={[16, 8]}>
                      <Col span={13}>
                        {selectTheoryData[currentQuestionIndex]?.questionImg ===
                        undefined ? (
                          ""
                        ) : (
                          <Image
                            src={
                              selectTheoryData[currentQuestionIndex]
                                ?.questionImg
                            }
                            alt=""
                            style={{ height: "700px" }}
                          />
                        )}
                      </Col>
                      <Col span={11}>
                        <Row gutter={[24, 28]}>
                          <Col span={24}>
                            <ul className="matter01_que">
                              <li
                                style={{
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "13% 0px",
                                }}
                                onClick={() =>
                                  toggleAnswer(
                                    selectTheoryData[currentQuestionIndex]
                                      ?.questionId,
                                    "O",
                                    selectTheoryData[currentQuestionIndex]
                                      ?.RealAnswer
                                  )
                                }
                              >
                                <span className="mo o_off"></span>
                              </li>
                            </ul>
                          </Col>
                          <Col span={24}>
                            <ul className="matter01_que">
                              <li
                                style={{
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "13% 0px",
                                }}
                                onClick={() =>
                                  toggleAnswer(
                                    selectTheoryData[currentQuestionIndex]
                                      ?.questionId,
                                    "X",
                                    selectTheoryData[currentQuestionIndex]
                                      ?.RealAnswer
                                  )
                                }
                              >
                                <span className="mx x_off"></span>
                              </li>
                            </ul>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pass 모달 창 Start */}
      {PassModalOpen && (
        <>
          <Confetti {...confettiOptions} />

          <Modal
            maskClosable={false}
            open={PassModalOpen}
            onOk={handleOk_Cancel}
            onCancel={handleOk_Cancel}
            width="600px"
            style={{
              height: "100%",
              top: 230,
              zIndex: 999,
            }}
            footer={[]}
            closeIcon={
              <CloseCircleOutlined
                style={{ fontSize: "70px", marginRight: "50px" }}
              />
            }
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <br />
              <br />
              <br />
              <br />
              <h2 style={{ fontSize: "36px" }}>문제풀이를 완료 하였습니다.</h2>
              <br />
              <br />
              <h2 style={{ fontSize: "36px", color: "#87d068" }}>
                맞은 문제 {PassCnt}문항
              </h2>
              <br />
              <h2 style={{ fontSize: "36px", color: "#faad14" }}>
                틀린 문제 {FailCnt}문항
              </h2>
              <br />
              <br />
              <h2 style={{ fontSize: "36px" }}>
                축하합니다.
                <br />
                <br />
                <span style={{ fontSize: "45px", color: "#87d068" }}>합격</span>
                하셨습니다.
              </h2>
              <br />
              <br />
            </div>
          </Modal>
        </>
      )}
      {/* Pass 모달 창 End */}

      {/* Fail 모달 창 Start */}
      {FailModalOpen && (
        <>
          {/* <Confetti /> */}
          <Modal
            maskClosable={false}
            open={FailModalOpen}
            onOk={handleOk_Cancel}
            onCancel={handleOk_Cancel}
            width={620}
            centered={true}
            style={{
              height: "100%",
              top: 230,
              zIndex: 999,
            }}
            footer={[]}
            closeIcon={
              <CloseCircleOutlined
                style={{ fontSize: "70px", marginRight: "50px" }}
              />
            }
          >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <br />
              <br />
              <br />
              <br />
              <h2 style={{ fontSize: "36px" }}>문제풀이를 완료 하였습니다.</h2>
              <br />
              <br />
              <h2 style={{ fontSize: "36px", color: "#87d068" }}>
                맞은 문제 {PassCnt}문항
              </h2>
              <br />
              <h2 style={{ fontSize: "36px", color: "#faad14" }}>
                틀린 문제 {FailCnt}문항
              </h2>
              <br />
              <br />
              <h2 style={{ fontSize: "36px" }}>
                아쉽게도~
                <br />
                <br />
                <span style={{ fontSize: "45px", color: "#faad14" }}>
                  불합격
                </span>
                하였습니다.
              </h2>
              <br />
              <br />
            </div>
          </Modal>
        </>
      )}
      {/* Fail 모달 창 End */}
    </>
  );
};
