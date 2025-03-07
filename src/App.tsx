import styled from 'styled-components';
import { createBrowserRouter, Route, Routes, RouterProvider } from "react-router-dom";

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MainHome from './components/MainHome.tsx';
import MainEducation from './components/MainEducation';
import MainExperience from './components/MainExperience';
import MainProjects from './components/MainProjects';
import MainSkills from './components/MainSkills';
import MainInterests from './components/MainInterests';

const PageWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;    
    background-color: azure;

    @media screen and (max-width: 750px){
        min-height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: azure;
    }
`;

function Root() {
    return (
        <PageWrapper>
            <Header />
            <ContentWrapper>
                <Nav />
                <Routes>
                    <Route path="/" element={<MainHome />}/>
                    <Route path="/education" element={<MainEducation />}/>
                    <Route path="/experience" element={<MainExperience />}/>
                    <Route path="/projects" element={<MainProjects />}/>
                    <Route path="/skills" element={<MainSkills />}/>
                    <Route path="/interests" element={<MainInterests />}/>
                </Routes>
            </ContentWrapper>
            <Footer />
        </PageWrapper>
    );
}

const router = createBrowserRouter(
    [
        { path: "*", Component: Root }
    ]
);

export default function App() {
    return <RouterProvider router={router} />
}