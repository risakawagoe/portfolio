import { Box, Button, Center, Container, Flex, Group, Image, Pill, Text, Title } from "@mantine/core";
import { FC } from "react";
import "./TopSection.css";
import helloGif from "../../images/hello.gif";
import linkedinLogo from "../../images/logos/logos_linkedin.png";
import githubLogo from "../../images/logos/logos_github.png";
import resumeLogo from "../../images/logos/logos_resume.png";

export const TopSection: FC = () => {
    return(
        <Flex direction="column" justify="space-between" mih="100vh" gap={60} pb={64}>
            <Container w="100%" p={16} maw="100%">
                <Group justify="flex-end" gap={8} w="100%"  id="quickAccessLinks">
                    <Button variant="default"><Image w={56} src={linkedinLogo} /></Button>
                    <Button variant="default"><Image w={56} src={githubLogo} /></Button>
                    <Button variant="default"><Image w={56} src={resumeLogo} /></Button>
                </Group>
            </Container>
            <Container p={40} w={900} maw="100%">
                <Flex justify="space-between" align="center" gap={32} id="heroSection">
                    <Box>
                        <Title fz={36}>Hi I'm <span className="theme-orange">Risa</span>!</Title>
                        <Text fz={28} className="responsive-text-lg">A web developer and a lifelong learner.</Text>
                        <Group gap={8} mt={16}>
                            <Pill fz={12} fw={500} size="lg" className="menuItem">#Skills</Pill>
                            <Pill fz={12} fw={500} size="lg" className="menuItem">#Projects</Pill>
                            <Pill fz={12} fw={500} size="lg" className="menuItem">#Resume</Pill>
                            <Pill fz={12} fw={500} size="lg" className="menuItem">#About me</Pill>
                        </Group>
                    </Box>
                    <Box>
                        <Image src={helloGif} w={200} />
                    </Box>
                </Flex>
            </Container>
            <Container w="100%">
                <Center w="100%">
                    <section id="scrollBtn">
                        <a href="#thanks"><span></span>Scroll</a>
                    </section>
                </Center>
            </Container>
        </Flex>
    );
}