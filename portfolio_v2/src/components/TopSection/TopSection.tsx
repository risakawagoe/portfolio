import { Box, Center, Container, Flex, Group, Image, Pill, Text, Title } from "@mantine/core";
import { FC } from "react";
import "./TopSection.css";
import helloGif from "../../images/hello.gif";
import { LinkButtons } from "../templates/LinkButtons";

interface Props {
    menu: Array<{ section: string, scroller: () => void }>
}

export const TopSection: FC<Props> = ({ menu }) => {
    const menuItem = (item: { section: string, scroller: () => void }, index: number) => (
        <Pill key={index} fz={12} fw={500} size="lg" className="menuItem" onClick={item.scroller}>#{item.section}</Pill>
    );

    return(
        <Flex direction="column" justify="space-between" mih="100vh" gap={60} pb={100}>
            <Container w="100%" p={16} maw="100%">
                <Group justify="flex-end" gap={8} w="100%"  id="quickAccessLinks">
                    <LinkButtons />
                </Group>
            </Container>
            <Container p={40} w={900} maw="100%">
                <Flex justify="space-between" align="center" gap={32} id="heroSection">
                    <Box>
                        <Title fz={36}>Hi I'm <span className="theme-orange">Risa</span>!</Title>
                        <Text fz={28} className="responsive-text-lg">A web developer and a lifelong learner.</Text>
                        <Group gap={8} mt={16}>
                            {menu.map((item, index) => menuItem(item, index))}
                        </Group>
                    </Box>
                    <Box>
                        <Image src={helloGif} w={200} />
                    </Box>
                </Flex>
            </Container>
            <Container w="100%">
                <Center w="100%">
                    <section id="scrollBtn" className="fadein">
                        <a onClick={menu.at(0)?.scroller} style={{ cursor: "pointer" }}><span></span>Scroll</a>
                    </section>
                </Center>
            </Container>
        </Flex>
    );
}