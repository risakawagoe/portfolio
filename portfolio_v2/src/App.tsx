import { Modal } from '@mantine/core';
import './App.css';
import { AboutMeSection } from './components/AboutMeSection/AboutMeSection';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';
import { ResumeSection } from './components/ResumeSection/ResumeSection';
import { SkillsSection } from './components/SkillsSection/SkillsSection';
import { TopSection } from './components/TopSection/TopSection';
import { useEffect, useRef, useState } from 'react';
import { useDisclosure, useListState, useScrollIntoView } from '@mantine/hooks';
import { FooterSection } from './components/FooterSection/FooterSection';

function App() {
    const [opened, { open, close }] = useDisclosure(false);
    const [modalElement, setModalElement] = useState<JSX.Element>(<></>);
    const [modalTitle, setModalTitle] = useState("string");
    const [menu, handlers] = useListState<{ section: string, scroller: () => void }>([]);
    const count = useRef<number>(menu.length);
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>();


    useEffect(() => {
        if(menu.length !== count.current) {
            const uniqueItems = menu.filter((item, index) => menu.findIndex(obj => obj.section === item.section) === index);
            count.current = uniqueItems.length;
            handlers.setState(uniqueItems);
        }else {
            count.current = menu.length;
        }
    }, [menu]);

    function openModal(element: JSX.Element, title: string) {
        setModalElement(element);
        setModalTitle(title);
        open();
    }

    function addToMenu(section: string, scroller: () => void) {
        handlers.append({ section, scroller });
    }

    return (
        <div className="App" ref={targetRef}>
            <Modal opened={opened} onClose={close} title={modalTitle} fullScreen>
                {modalElement}
            </Modal>
            <TopSection menu={menu} />
            <SkillsSection addToMenu={addToMenu} />
            <ProjectsSection addToMenu={addToMenu} openModal={openModal} />
            <ResumeSection addToMenu={addToMenu} />
            <AboutMeSection addToMenu={addToMenu} />
            <FooterSection menu={menu} scrollToPageTop={scrollIntoView} />
        </div>
    );
}

export default App;
