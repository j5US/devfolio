import { useContext } from "react"
import ThemesContext from "../context/themes"

import natoursImg from "../assets/images/projects/project-natours.png"
import natoursImgDk from "../assets/images/projects/project-natours-dark.png"

import forkifyImg from "../assets/images/projects/project-forkify.png"
import forkifyImgDk from "../assets/images/projects/project-forkify-dark.png"

// import portfolioImg from "../assets/images/projects/project-portfolio.png"
// import portfolioImgDk from "../assets/images/projects/project-portfolio-dark.png"

import oasisImg from "../assets/images/projects/project-the-wild-oasis.png"
import oasisImgDk from "../assets/images/projects/project-the-wild-oasis-dark.png"

import ProjectView from "../components/ProjectView"

const Projects = function () {
    const { isDarkEnabled } = useContext(ThemesContext);
    const landscape =
        <ProjectView
            projectImage={!isDarkEnabled ? natoursImg : natoursImgDk}
            projectTitle={"Natours"}
            projectLink={"https://natours-app-7ddr.onrender.com/"}
        />
    const portrait1 =
        <ProjectView
            projectImage={!isDarkEnabled ? forkifyImg : forkifyImgDk}
            projectTitle={"Forkify"}
            projectLink={"https://forkify-project-dev.netlify.app/"}
        />
    const portrait2 =
        <ProjectView
            projectImage={!isDarkEnabled ? oasisImg : oasisImgDk}
            // projectImage={!isDarkEnabled ? portfolioImg : portfolioImgDk}
            projectTitle={"Wild Oasis"}
            projectLink={"https://the-wild-oasis-gray-chi.vercel.app/"}
        />

    return {
        landscape,
        portrait1,
        portrait2,
    }
}

export default Projects;