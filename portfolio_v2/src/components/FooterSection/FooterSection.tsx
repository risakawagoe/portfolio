import { Box, Button, Center, Container, Flex, Group, Image, Pill, Stack, Text, UnstyledButton } from "@mantine/core";
import { FC } from "react";
import linkedinLogo from "../../images/logos/logos_linkedin.png";
import githubLogo from "../../images/logos/logos_github.png";
import resumeLogo from "../../images/logos/logos_resume.png";
import timmy from "../../images/timmy.png";
import "./FooterSection.css";

export const FooterSection: FC = () => {
    return(
        <Box pt={64} pb={32}>
            <Container p={40}  w={900} maw="100%" className="wrapper">
                <Flex justify="space-between" align="center" id="footerFlex">
                    <Box>
                        <Group justify="flex-start" gap={8} w="100%" id="footerLinks">
                            <Button variant="default"><Image w={56} src={linkedinLogo} /></Button>
                            <Button variant="default"><Image w={56} src={githubLogo} /></Button>
                            <Button variant="default"><Image w={56} src={resumeLogo} /></Button>
                        </Group>
                        <Group gap={8} mt={16} id="footerMenu">
                            <Pill fz={12} fw={500} size="lg" className="menuItem">#Skills</Pill>
                            <Pill fz={12} fw={500} size="lg" className="menuItem">#Projects</Pill>
                            <Pill fz={12} fw={500} size="lg" className="menuItem">#Resume</Pill>
                            <Pill fz={12} fw={500} size="lg" className="menuItem">#About me</Pill>
                        </Group>
                    </Box>
                    <Box>
                        <UnstyledButton w={140} h={140} style={{ borderRadius: "100%" }} id="pageTopBtn" >
                            <Flex w="100%" h="100%" direction="column" justify="center" align="center" gap={4} pb={4}>
                                <Image src={timmy} w="60%" h="60%" />
                                <Text size="sm">Page Top</Text>
                            </Flex>
                        </UnstyledButton>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}