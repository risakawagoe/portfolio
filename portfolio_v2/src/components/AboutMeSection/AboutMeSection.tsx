import { Box, Center, Container, Image, Stack, Text, Title } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import "./AboutMeSection.css";
import { useScrollIntoView } from "@mantine/hooks";

interface Props {
    addToMenu: (section: string, scroller: () => void) => void
}


export const AboutMeSection: FC<Props> = ({ addToMenu }) => {
    const [introduction, setIntroduction] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");

    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
        offset: 60,
    });

    useEffect(() => {
        // fetch introduction from backend (rich text editor content)
        addToMenu("About me", scrollIntoView);
    }, []);

    return(
        <Box pt={120}>
            <Container p={40}  w={880} maw="100%">
                <Title size="h1" fw={400} ref={targetRef} mb={32}>#About me</Title>
                <Image fallbackSrc="https://placehold.co/600x400?text=Placeholder" />
                <Text mt={12}>{introduction}</Text>

                <Stack ta="center" p={32} mt={64} ml="auto" mr="auto" gap={8} maw={520} ff="'Delicious Handrawn', cursive">
                    <Text fz={24}>Thank you for visiting my web portfolio!</Text>
                    <Text fz={24}>Feel free to contact me by email or linkedin, and have a great rest of your day!</Text>
                    <Text fz={24} ta="right">Risa</Text>
                </Stack>
            </Container>
        </Box>
    );
}