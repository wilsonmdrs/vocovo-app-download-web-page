import { ScaleLoader } from "react-spinners";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  min-height: 768px;
  background-color: #1e0830;
  overflow-y: scroll;
`;

export const Spinner = styled(ScaleLoader).attrs(() => ({
  color: "#F97C62",
}))``;
