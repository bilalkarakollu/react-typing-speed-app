import styled, { createGlobalStyle } from "styled-components";
import { GlobalStyleProps } from "../types/Global.styled";

export const GlobalStyle = createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #312E38;
        color: #FFF;
        -webkit-font-smoothing: antialiased;
    }
`;

export const Flex = styled.div<GlobalStyleProps>`
  display: flex;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  overflow: ${(props) => props.overflow};
  align-items: ${(props) => props.alignItems};
  flex-wrap: ${(props) => props.flexWrap};
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  min-width: ${(props) => props.minWidth};
  min-height: ${(props) => props.minHeight};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.background};
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;
  margin-left: ${(props) => props.ml}px;
  margin-right: ${(props) => props.mr}px;
  padding-top: ${(props) => props.pt}px;
  padding-bottom: ${(props) => props.pb}px;
  padding-left: ${(props) => props.pl}px;
  padding-right: ${(props) => props.pr}px;
  color: ${(props) => props.color};
`;

export const Button = styled.button<GlobalStyleProps>`
  display: flex;
  align-items: center;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  margin: ${({ my }) => (my ? my : "0")}px ${({ mx }) => (mx ? mx : "0")}px;
  padding: ${({ py }) => (py ? py : "0")}px ${({ px }) => (px ? px : "0")}px;
`;
