import { FC, useEffect } from "react";
import { AspectRatio, Box, Card, Container, Group, Image, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import "./SkillsSection.css";
import { 
    StackIconJavascript, 
    StackIconTypescript, 
    StackIconReact, 
    StackIconAngular,
    StackIconHtml,
    StackIconCss,
    StackIconMysql,
    StackIconGCP,
    StackIconGithub,
    StackIconFigma,
    StackIconNodejs,
    StackIconJava,
    StackIconC,
    StackIconPHP,
    StackIconPython,
    StackIconKotlin} from "../../images/stack-icons/StackIcons";
import sectionTransitionPatchTop from "../../images/transition-patch-top.png";
import sectionTransitionPatchBottom from "../../images/transition-patch-bottom.png";


const frontendSkills = [
    { icon: StackIconJavascript, name: "JavaScript" },
    { icon: StackIconTypescript, name: "TypeScript" },
    { icon: StackIconReact, name: "React" },
    { icon: StackIconAngular, name: "Angular" },
    { icon: StackIconHtml, name: "HTML" },
    { icon: StackIconCss, name: "CSS" },
];
const backendSkills = [
    { icon: StackIconNodejs, name: "node.js" },
    { icon: StackIconJava, name: "Java" },
    { icon: StackIconC, name: "C/C++" },
    { icon: StackIconPHP, name: "PHP" },
    { icon: StackIconPython, name: "Python" },
    { icon: StackIconKotlin, name: "Kotlin" },
];
const otherSkills = [
    { icon: StackIconMysql, name: "MySQL" },
    { icon: StackIconGCP, name: "Google Cloud Platform" },
    { icon: StackIconGithub, name: "Git" },
    { icon: StackIconFigma, name: "Figma" },
];
const skillsets = [
    { label: "Frontend", list: frontendSkills },
    { label: "Backend", list: backendSkills },
    { label: "Other", list: otherSkills },
];

interface Props {
    addToMenu: (section: string, scroller: () => void) => void
}

export const SkillsSection: FC<Props> = ({ addToMenu }) => {
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
        offset: 60,
    });

    useEffect(() => {
        addToMenu("Skills", scrollIntoView);
    }, []);

    const skillsetColumn = (skillset: { label: string, list: { icon: string, name: string }[] }) => {
        return (
            <Box key={skillset.label}>
                <Title className="skills-subheading">{skillset.label}</Title>
                <Card withBorder>
                    <Stack>
                        {skillset.list.map((skill, index) => (
                            <Group justify="flex-start" gap={8} key={index}>
                                <AspectRatio w={28} ratio={1}>
                                    <Image w="100%" h="100%" fit="contain" src={skill.icon} />
                                </AspectRatio>
                                <Text>{skill.name}</Text>
                            </Group>
                        ))}
                    </Stack>
                </Card>
            </Box>
        );
    }

    return(
        <Box style={{ backgroundColor: "var(--theme-orange)" }} c="#fff" pt={140} pb={180} pos="relative">
            <Image w="100%" src={sectionTransitionPatchTop} pos="absolute" top={0} left={0} style={{ transform: "translateY(-30%)" }} />
            <Container p={40}  w={900} maw="100%" className="wrapper">
                <Title size="h1" fw={400} ref={targetRef}>#Skills</Title>
                <SimpleGrid
                    mt={40}
                    w="100%"
                    cols={{ base: 1, sm: 3, lg: 3 }}
                    verticalSpacing={{ base: 'md', sm: 'xl' }}>
                        {skillsets.map(skillsetColumn)}
                </SimpleGrid>
            </Container>
            <Image w="100%" src={sectionTransitionPatchBottom} pos="absolute" bottom={0} left={0} style={{ transform: "translateY(30%)" }} />
        </Box>
    );
}