import { Box, Container, Title } from "@mantine/core";
import { FC } from "react";
import "./AboutMeSection.css";


export const AboutMeSection: FC = () => {
    return(
        <Box pt={120} pb={120}>
            <Container p={40}  w={880} maw="100%">
            <Title size="h1" fw={400}>#About me</Title>
            </Container>
        </Box>
    );
}