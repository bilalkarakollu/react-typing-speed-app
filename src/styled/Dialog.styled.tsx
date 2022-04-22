import styled from "styled-components";

interface StyledProps {
    open?: boolean;
}

export const Dialog = styled.div<StyledProps>`
  display: ${({open}) => open ? "block" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const DialogContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: #fff;
  color: black;
  border-radius: 4px;
  padding: 20px;
`;
