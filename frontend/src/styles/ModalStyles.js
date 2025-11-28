import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(4,9,20,0.45);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index: 60;
`;

export const ModalContent = styled.div`
  width: 460px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 12px 40px rgba(13,40,77,0.18);
`;
