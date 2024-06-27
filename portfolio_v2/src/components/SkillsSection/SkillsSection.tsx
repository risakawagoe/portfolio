import { Box, Card, Container, Flex, Group, Image, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { FC } from "react";
import "./SkillsSection.css";
import reactIcon from "../../images/react-icon.png";

export const SkillsSection: FC = () => {
    const frontendSkills = [
        { icon: null, name: "JavaScript" },
        { icon: null, name: "TypeScript" },
        { icon: null, name: "React" },
        { icon: null, name: "Angular" },
        { icon: null, name: "HTML" },
        { icon: null, name: "CSS" },
    ];
    const backendSkills = [
        { icon: null, name: "node.js" },
        { icon: null, name: "Java" },
        { icon: null, name: "C/C++" },
        { icon: null, name: "PHP" },
        { icon: null, name: "Python" },
        { icon: null, name: "Kotlin" },
    ];
    const otherSkills = [
        { icon: null, name: "MySQL" },
        { icon: null, name: "Google Cloud Platform" },
        { icon: null, name: "Git" },
        { icon: null, name: "Figma" },
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
                                                <Image w={28} src={reactIcon} />
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