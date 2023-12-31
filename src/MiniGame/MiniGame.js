import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Image, Modal } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import Confetti from "react-confetti";
import "../css/theory.css";

export const MiniGame = (props) => {
  const { confirm } = Modal;

  const [visible, setVisible] = useState(false);

  const [PassModalOpen, setPassModalOpen] = useState(false); // 합격 Modal창
  const [FailModalOpen, setFailModalOpen] = useState(false); // 불합격 Modal창

  const [selectTheoryData, setSelectTheoryData] = useState([]);
  const [answerChk, setAnswerChk] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [PassCnt, setPassCnt] = useState(0);
  const [FailCnt, setFailCnt] = useState(0);
  const [viewImg, setViewImg] = useState(true);
  const [answerClicked_O, setAnswerClicked_O] = useState(false);
  const [answerClicked_X, setAnswerClicked_X] = useState(false);

  const confettiOptions = {
    gravity: 0.15, // 1보다 큰 값으로 설정하면 컨페티가 빠르게 떨어집니다.
  };

  const toggleAnswer = (questionId, answer, realanswer) => {
    if (answer === "O") {
      setAnswerClicked_O(true);

      setTimeout(() => {
        setAnswerClicked_O(false);
      }, 400);
    } else {
      setAnswerClicked_X(true);

      setTimeout(() => {
        setAnswerClicked_X(false);
      }, 400);
    }

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
      setViewImg(false);

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
    setViewImg(true);
    setPassCnt(0);
    setFailCnt(0);
    props.ModalClose();
  };

  useEffect(() => {
    const data = [
      {
        questionId: "S000001",
        questionImg: require("../images/quiz/X00008-101.jpg"),
        question: "이 엑스레이 사진에 표창이 확인됩니까?",
        RealAnswer: "O",
      },
      {
        questionId: "S000002",
        questionImg: require("../images/quiz/X00015-101.jpg"),
        question: "이 엑스레이 사진에 날카로운 물체가 있습니까?",
        RealAnswer: "O",
      },
      {
        questionId: "S000003",
        questionImg: require("../images/quiz/X03558-101.jpg"),
        question: "이 엑스레이 사진에 물품이 의심되어 가방을 열어봐야 할까요? ",
        RealAnswer: "X",
      },
      {
        questionId: "S000004",
        questionImg: require("../images/quiz/X03563-101.jpg"),
        question: "이 엑스레이 사진에 총기가 확인됩니까?",
        RealAnswer: "X",
      },
      {
        questionId: "S000005",
        questionImg: require("../images/quiz/X03683-101.jpg"),
        question: "이 엑스레이 사진에 총기가 확인됩니까?.",
        RealAnswer: "X",
      },
      {
        questionId: "S000006",
        questionImg: require("../images/quiz/X05508-101.jpg"),
        question: "이 엑스레이 사진에 총기가 확인됩니까?",
        RealAnswer: "O",
      },
      {
        questionId: "S000007",
        questionImg: require("../images/quiz/X05509-101.jpg"),
        question: "이 엑스레이 사진에 위험물질이 확인됩니끼?",
        RealAnswer: "O",
      },
      {
        questionId: "S000008",
        questionImg: require("../images/quiz/X05510-101.jpg"),
        question: "이 엑스레이 사진에 총기류가 있습니까?",
        RealAnswer: "O",
      },
      {
        questionId: "S000009",
        questionImg: require("../images/quiz/X05511-101.jpg"),
        question: "이 엑스레이 사진에 무기가 확인됩니까?",
        RealAnswer: "O",
      },
      {
        questionId: "S000010",
        questionImg: require("../images/quiz/X05512-101.jpg"),
        question: "이 엑스레이 사진에 총기류가 있습니까?",
        RealAnswer: "O",
      },
      {
        questionId: "S000011",
        questionImg: require("../images/quiz/X05513-101.jpg"),
        question: "이 엑스레이 사진에 금지물품이 확인됩니까?",
        RealAnswer: "O",
      },
      {
        questionId: "S000012",
        questionImg: require("../images/quiz/X05514-101.jpg"),
        question: "이 엑스레이 사진에 금지물품이 확인됩니까?",
        RealAnswer: "X",
      },
      {
        questionId: "S000013",
        questionImg: require("../images/quiz/X05515-101.jpg"),
        question: "이 엑스레이 사진에 위험물이 확인됩니까?",
        RealAnswer: "X",
      },
      {
        questionId: "S000014",
        questionImg: require("../images/quiz/X05530-101.jpg"),
        question: "이 엑스레이 사진에 날카로운 물체가 획인됩니까?",
        RealAnswer: "O",
      },
      {
        questionId: "S000015",
        questionImg: require("../images/quiz/X05531-101.jpg"),
        question: "이 엑스레이 사진에 동물이 확인됩니까?",
        RealAnswer: "X",
      },
      {
        questionId: "S000016",
        questionImg: require("../images/quiz/X05532-101.jpg"),
        question: "이 엑스레이 사진에 동물이 확인됩니까?",
        RealAnswer: "X",
      },
      {
        questionId: "S000017",
        questionImg: require("../images/quiz/X05533-101.jpg"),
        question: "이 엑스레이 사진에 수류탄이 확인됩니까?.",
        RealAnswer: "X",
      },
      {
        questionId: "S000018",
        questionImg: require("../images/quiz/X05552-101.jpg"),
        question: "이 엑스레이 사진에 총기가 확인됩니까?",
        RealAnswer: "X",
      },
      {
        questionId: "S000019",
        questionImg: require("../images/quiz/X05561-101.jpg"),
        question: "이 엑스레이 사진에 위험물이 있나요?",
        RealAnswer: "X",
      },
      {
        questionId: "S000020",
        questionImg: require("../images/quiz/X05835-101.jpg"),
        question: "이 엑스레이 사진에 금지물품이 확인됩니까?",
        RealAnswer: "O",
      },

      // 2023-11-08 추가
      {
        questionId: "S000021",
        questionImg: require("../images/quiz/X00100-101.jpg"),
        question: "이 엑스레이 사진에 수갑이 확인됩니까?",
        RealAnswer: "O",
      },
      {
        questionId: "S000022",
        questionImg: require("../images/quiz/X00833-101.jpg"),
        question: "이 엑스레이 사진에 폭발물이 확인됩니까?",
        RealAnswer: "O",
      },
      {
        questionId: "S000023",
        questionImg: require("../images/quiz/X00847-101.jpg"),
        question: "이 엑스레이 사진에 공구류의 물품이 있나요?",
        RealAnswer: "O",
      },
      {
        questionId: "S000024",
        questionImg: require("../images/quiz/X00858-101.jpg"),
        question: "이 엑스레이 사진에 위험한 물품이 있나요?",
        RealAnswer: "O",
      },
      {
        questionId: "S000025",
        questionImg: require("../images/quiz/X00863-101.jpg"),
        question: "이 엑스레이 사진은 안전하다 확인됩니까?",
        RealAnswer: "X",
      },
      {
        questionId: "S000026",
        questionImg: require("../images/quiz/X00925-101.jpg"),
        question: "이 엑스레이 사진에 폭발물이 확인됩니까?",
        RealAnswer: "X",
      },
      {
        questionId: "S000027",
        questionImg: require("../images/quiz/X00977-101.jpg"),
        question:
          "이 엑스레이 사진에 인화성물질(가스성 스프레이)이 확인됩니까?",
        RealAnswer: "O",
      },
      {
        questionId: "S000028",
        questionImg: require("../images/quiz/X01020-101.jpg"),
        question: "이 엑스레이 사진에 장난감 총이 확인됩니까?",
        RealAnswer: "O",
      },
      {
        questionId: "S000029",
        questionImg: require("../images/quiz/X01047-101.jpg"),
        question: "이 엑스레이 사진에 폭발물로 보이는 물품이 있나요?",
        RealAnswer: "O",
      },
      {
        questionId: "S000030",
        questionImg: require("../images/quiz/X01293-101.jpg"),
        question: "이 엑스레이 사진에 날카로운 물품이 있나요?",
        RealAnswer: "O",
      },
      {
        questionId: "S000031",
        questionImg: require("../images/quiz/X01314-101.jpg"),
        question: "이 엑스레이 사진에 주류(와인) 물품이 있나요?",
        RealAnswer: "X",
      },
      {
        questionId: "S000032",
        questionImg: require("../images/quiz/X01316-101.jpg"),
        question: "이 엑스레이 사진은 안전한 가방으로 확인됩니까?",
        RealAnswer: "X",
      },
      {
        questionId: "S000033",
        questionImg: require("../images/quiz/X01332-101.jpg"),
        question: "이 엑스레이 사진에 장난감총이 확인됩니까?",
        RealAnswer: "O",
      },
      {
        questionId: "S000034",
        questionImg: require("../images/quiz/X01405-101.jpg"),
        question: "이 엑스레이 사진에 위험한 물품이 2가지 이상으로 확인됩니까?",
        RealAnswer: "X",
      },
      {
        questionId: "S000035",
        questionImg: require("../images/quiz/X01544-101.jpg"),
        question: "이 엑스레이 사진의 물품이 안전하다고 확인됩니까?",
        RealAnswer: "X",
      },
      {
        questionId: "S000036",
        questionImg: require("../images/quiz/X01589-101.jpg"),
        question: "이 엑스레이 사진에 칼이 있나요?",
        RealAnswer: "O",
      },
      {
        questionId: "S000037",
        questionImg: require("../images/quiz/X01748-101.jpg"),
        question: "이 엑스레이 사진에 운동기구가 들어있나요?",
        RealAnswer: "O",
      },
      {
        questionId: "S000038",
        questionImg: require("../images/quiz/X01777-101.jpg"),
        question: "이 엑스레이 사진에 폭발물로 의심가는 물품이 있나요?",
        RealAnswer: "O",
      },
      {
        questionId: "S000039",
        questionImg: require("../images/quiz/X01926-101.jpg"),
        question:
          "이 엑스레이 사진에서 2가지 이상 의심스러운 위험한 물품이 있는지 확인됩니까?",
        RealAnswer: "X",
      },
      {
        questionId: "S000040",
        questionImg: require("../images/quiz/X01967-101.jpg"),
        question: "이 엑스레이 사진에서 표창이 확인됩니까?",
        RealAnswer: "O",
      },
      {
        questionId: "S000041",
        questionImg: require("../images/quiz/X00100-101.jpg"),
        question: "이 엑스레이 사진에 총기가 있나요?",
        RealAnswer: "O",
      },
      {
        questionId: "S000042",
        questionImg: require("../images/quiz/X00103-101.jpg"),
        question: "이 엑스레이 사진에 금지물품이 있나요?",
        RealAnswer: "X",
      },
      {
        questionId: "S000043",
        questionImg: require("../images/quiz/X00104-101.jpg"),
        question: "이 엑스레이 사진에 전기/전자제품이 있나요?",
        RealAnswer: "X",
      },
      {
        questionId: "S000044",
        questionImg: require("../images/quiz/X00105-101.jpg"),
        question: "이 엑스레이 사진에 폭발물이 확인되나요?",
        RealAnswer: "X",
      },
      {
        questionId: "S000045",
        questionImg: require("../images/quiz/X00106-101.jpg"),
        question: "이 엑스레이 사진에 금속제품이 있나요?",
        RealAnswer: "O",
      },
      // {
      //   questionId: "S000046",
      //   questionImg: require("../images/quiz/X00108-101.jpg"),
      //   question: "이 엑스레이 사진에 동물이 있나요?",
      //   RealAnswer: "X",
      // },
      // {
      //   questionId: "S000047",
      //   questionImg: require("../images/quiz/X00109-101.jpg"),
      //   question: "이 엑스레이 사진에 우산이 있나요?",
      //   RealAnswer: "O",
      // },
      // {
      //   questionId: "S000048",
      //   questionImg: require("../images/quiz/X00116-101.jpg"),
      //   question: "이 엑스레이 사진에 폭발물로 의심되는 물품이 있나요?",
      //   RealAnswer: "O",
      // },
      // {
      //   questionId: "S000049",
      //   questionImg: require("../images/quiz/X00117-101.jpg"),
      //   question: "이 엑스레이 사진에 의심스러운 물품이 있나요?",
      //   RealAnswer: "O",
      // },
      // {
      //   questionId: "S000050",
      //   questionImg: require("../images/quiz/X00119-101.jpg"),
      //   question: "이 엑스레이 사진에 날카로운 칼이 있나요?",
      //   RealAnswer: "X",
      // },
      // {
      //   questionId: "S000051",
      //   questionImg: require("../images/quiz/X00120-101.jpg"),
      //   question: "이 엑스레이 사진에 위장한 무기가 있나요?",
      //   RealAnswer: "X",
      // },
      {
        questionId: "S000052",
        questionImg: require("../images/quiz/X00121-101.jpg"),
        question: "이 엑스레이 사진에 후레쉬가 있나요?",
        RealAnswer: "O",
      },
      {
        questionId: "S000053",
        questionImg: require("../images/quiz/X00122-101.jpg"),
        question: "이 엑스레이 사진에 망원경으로 확인됩니까?",
        RealAnswer: "O",
      },
      {
        questionId: "S000054",
        questionImg: require("../images/quiz/X00123-101.jpg"),
        question: "이 엑스레이 사진에 전자담배가 있나요?",
        RealAnswer: "O",
      },
      {
        questionId: "S000055",
        questionImg: require("../images/quiz/X00124-101.jpg"),
        question: "이 엑스레이 사진에 통조림 캔이 있나요?",
        RealAnswer: "O",
      },
      // {
      //   questionId: "S000056",
      //   questionImg: require("../images/quiz/X00127-101.jpg"),
      //   question: "이 엑스레이 사진에 공구용품이 있나요?",
      //   RealAnswer: "O",
      // },
      // {
      //   questionId: "S000057",
      //   questionImg: require("../images/quiz/X00128-101.jpg"),
      //   question: "이 엑스레이 사진에 신발이 두 켤레가 확인되나요?",
      //   RealAnswer: "X",
      // },
      // {
      //   questionId: "S000058",
      //   questionImg: require("../images/quiz/X00131-101.jpg"),
      //   question: "이 엑스레이 사진에 노트북이 있나요?",
      //   RealAnswer: "X",
      // },
      {
        questionId: "S000059",
        questionImg: require("../images/quiz/X00132-101.jpg"),
        question: "이 엑스레이 사진에 작은칼이 확인되나요?",
        RealAnswer: "O",
      },
      {
        questionId: "S000060",
        questionImg: require("../images/quiz/X00133-101.jpg"),
        question: "이 엑스레이 사진에 볼펜이 확인되나요?",
        RealAnswer: "X",
      },
    ];

    const shuffledQuestions = shuffleArray(data);
    const selectedQuestions = shuffledQuestions.slice(0, 5);
    setSelectTheoryData(selectedQuestions);
  }, [answerChk]);

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

  const handleMouseEvent = (falg) => {
    props.cursorEvent(falg);
  };

  return (
    <>
      <div
        className="theory_bg"
        style={{ borderRadius: "20px", paddingBottom: "30px", cursor: "none" }}
      >
        <div className="theory_con">
          <div className="thetop">
            <div className="theory_bot mt15" style={{ height: "100%" }}>
              <div className="theoryb_right">
                <div
                  id={`question${currentQuestionIndex + 1}`}
                  className="question_detail"
                >
                  <div className="theoryb_box theoryb_box_pd01 theorybr02">
                    <div className="matter01_tit">
                      <div className="mat01tit_left">
                        문제번호
                        <span>
                          {currentQuestionIndex + 1 < 9
                            ? `0${currentQuestionIndex + 1}`
                            : currentQuestionIndex + 1}
                        </span>
                        {/* {selectTheoryData[currentQuestionIndex]?.questionId} */}
                      </div>
                      <div
                        className="mat01tit_right"
                        style={{ fontSize: "30px" }}
                      >
                        <p className="mat01tit">
                          {viewImg === false
                            ? ""
                            : selectTheoryData[currentQuestionIndex]?.question}
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
                        ) : viewImg === false ? (
                          ""
                        ) : (
                          <Image
                            src={
                              selectTheoryData[currentQuestionIndex]
                                ?.questionImg
                            }
                            preview={{
                              visible,
                              scaleStep: "0.1",
                              src: selectTheoryData[currentQuestionIndex]
                                ?.questionImg,
                              onVisibleChange: (value) => {
                                setVisible(value);
                              },
                              width: `${window.innerWidth * 0.5}px`,
                            }}
                            alt="이미지 확대"
                            style={{ height: "700px" }}
                          />
                        )}
                      </Col>
                      <Col span={11}>
                        <Row gutter={[24, 28]}>
                          <Col span={24}>
                            <ul className="matter02_que">
                              <li
                                style={{
                                  zIndex: 99999,
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "8% 0px",
                                  cursor: "none",
                                }}
                                onMouseOver={() => handleMouseEvent(true)}
                                onMouseOut={() => handleMouseEvent(false)}
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
                                <span
                                  className={
                                    answerClicked_O
                                      ? "mo o_off clicked"
                                      : "mo o_off"
                                  }
                                ></span>
                              </li>
                            </ul>
                          </Col>
                          <Col span={24}>
                            <ul className="matter02_que">
                              <li
                                style={{
                                  zIndex: 99999,
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "8% 0px",
                                  // backgroundColor: "#df793d",
                                  cursor: "none",
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
                                onMouseOver={() => handleMouseEvent(true)}
                                onMouseOut={() => handleMouseEvent(false)}
                              >
                                <span
                                  className={
                                    answerClicked_X
                                      ? "mx x_off clicked"
                                      : "mx x_off"
                                  }
                                ></span>
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
                  style={{
                    fontSize: "70px",
                    marginRight: "50px",
                    cursor: "none",
                  }}
                  onMouseOver={() => handleMouseEvent(true)}
                  onMouseOut={() => handleMouseEvent(false)}
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
                <h2 style={{ fontSize: "36px" }}>
                  문제풀이를 완료 하였습니다.
                </h2>
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
                  <span style={{ fontSize: "45px", color: "#87d068" }}>
                    합격
                  </span>
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
                  style={{
                    fontSize: "70px",
                    marginRight: "50px",
                    cursor: "none",
                  }}
                  onMouseOver={() => handleMouseEvent(true)}
                  onMouseOut={() => handleMouseEvent(false)}
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
                <h2 style={{ fontSize: "36px" }}>
                  문제풀이를 완료 하였습니다.
                </h2>
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
      </div>
    </>
  );
};
