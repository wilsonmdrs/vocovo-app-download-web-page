import Image, { ImageProps } from "next/image";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #1E0830;
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
`

export const StoreContainer = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
    gap: 50px;
    z-index: 2;
    @media only screen and (max-width:480px) {
        flex-direction: column;
    }
`

export const BackgroundImage = styled(Image)<ImageProps>`
    width: 100%;
    height: 100%;
    position: absolute;
    animation: fadeIn 10s ease-in-out infinite;
    z-index: 0;
    @keyframes fadeIn {
        0% { 
            opacity: 0.5;
        }
        50% {
            opacity:1;
        }
        100% {
            opacity: 0.5;
        }
    }
`

export const Title = styled.h3`
    color: white;
    font-size: 2rem;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
`

export const Icon = styled(Image)<ImageProps>`
    width: auto;
    height: 50px;
`

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
        background-color: #F97C62;
    }
`

export const ButtonLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
`

export const ButtonLabel = styled.p`
    color: white;
    font-size: 1.5rem;
    margin: 0;
    height: 100%;
`

export const ButtonSubLabel = styled.p`
    color: white;
    font-size: 1rem;
    margin: 0;
    height: 100%;
    font-weight: 300;
`
