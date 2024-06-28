import { Box, Container, Flex, Group, Image, Pill, Text, UnstyledButton } from "@mantine/core";
import { FC } from "react";
import timmy from "../../images/timmy.png";
import "./FooterSection.css";
import { LinkButtons } from "../templates/LinkButtons";

interface Props {
    menu: Array<{ section: string, scroller: () => void }>
    scrollToPageTop: () => void
}

export const FooterSection: FC<Props> = ({ menu, scrollToPageTop }) => {
    const menuItem = (item: { section: string, scroller: () => void }, index: number) => (
        <Pill key={index} fz={12} fw={500} size="lg" className="menuItem" onClick={item.scroller}>#{item.section}</Pill>
    );

    const publishedYear = 2024;
    const currentYear = (new Date()).getFullYear();

    return(
        <Box pt={64} pb={32}>
            <Container p={40}  w={900} maw="100%" className="wrapper">
                <Flex justify="space-between" align="center" id="footerFlex">
                    <Box>
                        <Group justify="flex-start" gap={8} w="100%" id="footerLinks">
                            <LinkButtons />
                        </Group>
                        <Group gap={8} mt={16} mb={16} id="footerMenu">
                            {menu.map((item, index) => menuItem(item, index))}
                        </Group>
                        <Text size="xs" c="dimmed">&copy; {publishedYear}{publishedYear < currentYear && `-${currentYear}`} Risa Kawagoe</Text>
                    </Box>
                    <Box>
                        <UnstyledButton w={140} h={140} style={{ borderRadius: "100%" }} id="pageTopBtn" onClick={scrollToPageTop} >
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