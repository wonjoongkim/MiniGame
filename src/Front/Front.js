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

  // =====================================================================================
  // 이미지 및 정답 Jquery 세팅 Start
  // =====================================================================================

  // =====================================================================================
  // 이미지 및 정답 Jquery 세팅 End
  // =====================================================================================

  const GameModal = () => {
    setModalOpen(true);
    // setLoading(true);
  };
  const handleOk = () => {
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };
  // 메뉴 Modal 이벤트처리 End

  // useEffect(() => {
  //   // dkdddkkdkdkd
  // }, []);

  return (
    <>
      <div id="wrap" className="mbg mbg_none">
        <div className="tgnb">
          <Typography variant="h1" style={{ fontSize: "48px" }}>
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
                        padding: "40px 0",
                        fontSize: "45px",
                      }}
                    >
                      X-ray MiniGame
                    </p>
                    {/* <h3 style={{ fontSize: "45px" }}>Geust</h3> */}
                  </div>
                  <button
                    type="button"
                    className="edu_btn modal_btn"
                    onClick={() => GameModal()}
                    style={{
                      padding: "60px 0",
                      fontSize: "45px",
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
        <MiniGame ModalClose={handleCancel} datetime={minutes + seconds} />
      </Modal>
      {/* 메뉴 모달 창 End */}
    </>
  );
};
