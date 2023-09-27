import Image from "next/image"
import { BackgroundImage, Button, ButtonLabel, ButtonLabelContainer, Container, Icon, LogoContainer, StoreContainer, ButtonSubLabel, Title } from "./styles"

import {default as AppleIcon} from '@assets/apple.svg'
import {default as PlayStoreIcon} from '@assets/google-play.svg'
import {default as VocovoIcon} from '@assets/vocovo-log.svg'
import Background from '@assets/backgroundImage.png'
import { useCustomParams } from "@/hooks/useCustomParams"
const Home = () => {


    const { installAppFromAppStore, installAppFromGooglePlay} = useCustomParams()

    return (
        <Container>
            <BackgroundImage src={Background} alt="background image" loading="lazy"/>
            <LogoContainer>
                <Image src={VocovoIcon} alt="vocovo icon"  width={200}/>
                <Title>Download Our Application!</Title>
            </LogoContainer>
            <StoreContainer>
                <a href="elpvocovo://">

            <Button>
                <Icon src={AppleIcon} alt="apple icon" />
                <ButtonLabelContainer>
                    <ButtonSubLabel>GET IT ON </ButtonSubLabel>
                    <ButtonLabel>App Store </ButtonLabel>
                </ButtonLabelContainer>
            </Button>
                </a>
            <Button onClick={installAppFromGooglePlay}>
                <Icon src={PlayStoreIcon} alt="play store icon"  />
                <ButtonLabelContainer>
                    <ButtonSubLabel>GET IT ON</ButtonSubLabel>
                    <ButtonLabel>Google Play </ButtonLabel>
                </ButtonLabelContainer>
            </Button>
            </StoreContainer>
        </Container>
    )
}

export default Home