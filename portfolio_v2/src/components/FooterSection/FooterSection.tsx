import { Box, Container, Flex, Group, Image, Pill, Text, UnstyledButton } from "@mantine/core";
import { FC } from "react";
import timmy from "../../images/timmy.png";
import "./FooterSection.css";
import { LinkButtons } from "../templates/LinkButtons";

export const FooterSection: FC = () => {
    return(
        <Box pt={64} pb={32}>
            <Container p={40}  w={900} maw="100%" className="wrapper">
                <Flex justify="space-between" align="center" id="footerFlex">
                    <Box>
                        <Group justify="flex-start" gap={8} w="100%" id="footerLinks">
                            <LinkButtons />
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