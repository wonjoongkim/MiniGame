/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import "./CustomModal.css"; // 스타일 파일을 import
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import main_plus from "../images/main/plus.png";
import fail_color from "../images/learning/fail_color.png";

import { MiniGame } from "../MiniGame";

export const Front = () => {
  const currentDateTime = new Date();
  const minutes = currentDateTime.getMinutes();
  const seconds = currentDateTime.getSeconds();

  const { confirm } = Modal;
  const [ModalOpen, setModalOpen] = useState(false); // 메뉴 Modal창
  const [loading, setLoading] = useState(false);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleCursor = (flag) => {
    if (flag === true) {
      handleMouseOver();
    } else {
      handleMouseOut();
    }
  };

  // =====================================================================================
  // 이미지 및 정답 Jquery 세팅 Start
  // =====================================================================================

  // =====================================================================================
  // 이미지 및 정답 Jquery 세팅 End
  // =====================================================================================

  const GameModal = () => {
    setModalOpen(true);
    setIsHovering(false);
  };

  const handleOk = () => {
    setModalOpen(false);
  };

  const handleCancel = () => {
    setIsHovering(false);
    setModalOpen(false);
  };
  // 메뉴 Modal 이벤트처리 End

  // 마우스 커서 효과처리 Start
  const handleMouseMove = (e) => {
    const customCursor = document.getElementById("custom-cursor");
    if (customCursor) {
      customCursor.style.left = e.pageX + "px";
      customCursor.style.top = e.pageY + "px";
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  // 마우스 커서 효과처리 End

  return (
    <>
      <div className="App">
        <div
          id="custom-cursor"
          className={isHovering ? "custom-cursor-hover" : "custom-cursor"}
        ></div>
        <div id="wrap" className="mbg mbg_none">
          <div className="tgnb">
            <Typography variant="h1" style={{ fontSize: "58px" }}>
              X-ray Security <span>Training</span>
            </Typography>
          </div>
          <div id="wlayer">
            <div className="mcontent">
              <div className="main_con">
                <div className="main_left">
                  <div className="main_info">
                    <div className="minfo_top">
                      <p
                        style={{
                          fontSize: "30px",
                        }}
                      >
                        X-Ray MiniGame
                        <br />
                        <div
                          style={{
                            padding: "120px 0 20px 0",
                            fontSize: "45px",
                            color: "#41be4f",
                          }}
                        >
                          당신은 미래 항공 보안요원!
                        </div>
                        <div
                          style={{ padding: "20px 0 0 0", fontSize: "29px" }}
                        >
                          실제 상황을 MiniGame으로 체험하세요.
                        </div>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="edu_btn modal_btn"
                      onClick={() => GameModal()}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      style={{
                        cursor: "none",
                        padding: "60px 0",
                        fontSize: "55px",
                        borderRadius: "25px",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "800",
                          textShadow: "0px 2px 3px rgba(0,0,25,0.8)",
                        }}
                      >
                        Game Start
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 메뉴 모달 창 Start */}
        <Modal
          closable={false}
          maskClosable={false}
          open={ModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width="100%"
          style={{
            height: "100px",
            top: 30,
            zIndex: 999,
          }}
          footer={[]}
        >
          <MiniGame
            ModalClose={handleCancel}
            // datetime={minutes + seconds}
            cursorEvent={handleCursor}
          />
        </Modal>
        {/* 메뉴 모달 창 End */}
      </div>
    </>
  );
};
