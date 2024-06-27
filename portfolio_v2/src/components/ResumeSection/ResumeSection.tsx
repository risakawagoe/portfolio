import { Box, Center, Container, Image, Stack, Title } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import "./ResumeSection.css";

import page1 from "../../images/sample-resume-page1.jpg";
import page2 from "../../images/sample-resume-page2.png";


export const ResumeSection: FC = () => {
    const [pages, setPages] = useState([page1, page2]);
    useEffect(() => {
        fetchResumePages();
    }, []);

    async function fetchResumePages() {
        // get images from backend
    }
    return(
        <Box style={{ backgroundColor: "var(--theme-green)" }} c="#fff" pt={120} pb={120}>
            <Container p={40}  w="100%" maw={520} className="wrapper">
                <Title size="h1" fw={400}>#Resume</Title>
                <Stack gap={8} w="100%" mt={32}>
                    {pages.map(page => <Image src={page} w="100%" fit="contain" />)}
                </Stack>
            </Container>
        </Box>
    );
}