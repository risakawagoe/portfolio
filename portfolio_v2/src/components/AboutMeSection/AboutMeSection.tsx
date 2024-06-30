import { AspectRatio, BackgroundImage, Box, Collapse, Container, Image, Paper, Title, TypographyStylesProvider } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import { useScrollIntoView } from "@mantine/hooks";
import { getProfile } from "../../controllers/profile-controller";
import { Carousel } from "@mantine/carousel";
import messageBackground from "../../images/message-bg.jpg";
import { ContactForm } from "../templates/ContactForm";
import { MessageCard } from "../templates/MessageCard";

interface Props {
    addToMenu: (section: string, scroller: () => void) => void
}

export const AboutMeSection: FC<Props> = ({ addToMenu }) => {
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
        offset: 60,
    });
    const [introduction, setIntroduction] = useState("Currently not available.");
    const [album, setAlbum] = useState<string[]>([]);
    const [contactFormActive, setContactFormActive] = useState(false);


    useEffect(() => {
        addToMenu("About me", scrollIntoView);
        fetchProfile();
        // eslint-disable-next-line
    }, []);


    async function fetchProfile() {
        const result = await getProfile();
        if(result.success) {
            const data = result.data;
            if("introduction" in data && typeof data.introduction === "string") {
                setIntroduction(data.introduction);
            }
            if("album" in data && typeof Array.isArray(data.album) && data.album.every((item: any) => typeof item === "string")) {
                setAlbum([...data.album]);
            }
        }
    }


    return(
        <Box pt={120}>
            <Container p={40}  w={880} maw="100%" className="wrapper">
                <Title size="h1" fw={400} ref={targetRef} mb={32}>#About me</Title>
                <Carousel loop withIndicators>
                    {album.map((picture, index) => (
                        <Carousel.Slide key={index}>
                            <AspectRatio ratio={2}>
                                <Image src={picture} fit="cover" />
                            </AspectRatio>
                        </Carousel.Slide>
                    ))}
                </Carousel>
                <TypographyStylesProvider mt={12}>
                    <div dangerouslySetInnerHTML={{ __html: introduction }} />
                </TypographyStylesProvider>
                
                <Paper shadow="md" mt={64}>
                    <BackgroundImage src={messageBackground}>
                        <MessageCard />
                        <Collapse in={contactFormActive} transitionDuration={500}>
                            <ContactForm close={() => setContactFormActive(false)} />
                        </Collapse>
                    </BackgroundImage>
                </Paper>
            </Container>
        </Box>
    );
}