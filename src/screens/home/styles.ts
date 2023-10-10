import Image, { ImageProps } from "next/image";
import styled from "styled-components";

// const HEIGHT = window.innerHeight;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #1e0830;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

export const StoreContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
  gap: 50px;
  z-index: 2;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const BackgroundImage = styled(Image)<ImageProps>`
  width: 100%;
  height: 100%;
  min-height: 768px;
  position: absolute;
  animation: fadeIn 10s ease-in-out infinite;
  z-index: 0;
  object-fit: "cover";
  @keyframes fadeIn {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export const Title = styled.h3`
  color: white;
  font-size: 2rem;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  text-align: center;
  animation: initialAnimation 0.5s ease-in;

  @keyframes initialAnimation {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.2;
  }
`;

export const Icon = styled(Image)<ImageProps>`
  width: auto;
  height: 50px;
`;

export const Button = styled.button`
  display: flex;
  gap: 16px;
  padding: 1rem;
  min-width: 300px;
  border-radius: 15px;
  min-height: 70px;
  background-color: black;
  border: none;
  justify-content: center;
  align-items: center;
  scale: 1;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  transition-property: scale, background-color;
  &:hover {
    scale: 1.1;
    background-color: #f97c62;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #f97c62;
    &:hover {
      scale: 1;
      background-color: #f97c62;
    }
  }
`;

export const ButtonLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
`;

export const ButtonLabel = styled.p`
  color: white;
  font-size: 1.5rem;
  margin: 0;
  height: 100%;
`;

export const ButtonSubLabel = styled.p`
  color: white;
  font-size: 1rem;
  margin: 0;
  height: 100%;
  font-weight: 300;
`;
export const Link = styled.a``;
