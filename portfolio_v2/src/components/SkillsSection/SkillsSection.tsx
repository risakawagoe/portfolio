import { AspectRatio, Box, Card, Container, Flex, Group, Image, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { FC } from "react";
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

export const SkillsSection: FC = () => {
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
    return(
        <Box style={{ backgroundColor: "var(--theme-orange)" }} c="#fff" pt={120} pb={120}>
            <Container p={40}  w={900} maw="100%" className="wrapper">
                <Title size="h1" fw={400}>#Skills</Title>
                <SimpleGrid
                    mt={40}
                    w="100%"
                    cols={{ base: 1, sm: 3, lg: 3 }}
                    verticalSpacing={{ base: 'md', sm: 'xl' }}>
                        {skillsets.map(skillset => (
                            <Box>
                                <Title className="skills-subheading">{skillset.label}</Title>
                                <Card withBorder>
                                    <Stack>
                                        {skillset.list.map(skill => (
                                            <Group justify="flex-start" gap={8}>
                                                <AspectRatio w={28} ratio={1}>
                                                    <Image w="100%" h="100%" fit="contain" src={skill.icon} />
                                                </AspectRatio>
                                                <Text>{skill.name}</Text>
                                            </Group>
                                        ))}
                                    </Stack>
                                </Card>
                            </Box>
                        ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}