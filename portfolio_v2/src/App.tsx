import { Modal } from '@mantine/core';
import './App.css';
import { AboutMeSection } from './components/AboutMeSection/AboutMeSection';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';
import { ResumeSection } from './components/ResumeSection/ResumeSection';
import { SkillsSection } from './components/SkillsSection/SkillsSection';
import { TopSection } from './components/TopSection/TopSection';
import { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { FooterSection } from './components/FooterSection/FooterSection';

function App() {
    const [opened, { open, close }] = useDisclosure(false);
    const [modalElement, setModalElement] = useState<JSX.Element>(<></>);
    const [modalTitle, setModalTitle] = useState("string");

    useEffect(() => {
        fetchProfile();
    }, []);

    async function fetchProfile() {
        // get:
        // resume page images
        // github link
        // linked link
        // resume pdf link
    }

    function openModal(element: JSX.Element, title: string) {
        setModalElement(element);
        setModalTitle(title);
        open();
    }
  return (
    <div className="App">
        <Modal opened={opened} onClose={close} title={modalTitle} fullScreen>
            {modalElement}
        </Modal>
        <TopSection />
        <SkillsSection />
        <ProjectsSection openModal={openModal} />
        <ResumeSection />
        <AboutMeSection />
        <FooterSection />
    </div>
  );
}

export default App;
