import { useContext } from "react"
import ThemesContext from "../context/themes"
import ProjectView from "../components/ProjectView"

// import forkifyImg from "../assets/images/projects/project-forkify.png"
// import forkifyImgDk from "../assets/images/projects/project-forkify-dark.png"
// import portfolioImg from "../assets/images/projects/project-portfolio.png"
// import portfolioImgDk from "../assets/images/projects/project-portfolio-dark.png"
// import oasisImg from "../assets/images/projects/project-the-wild-oasis.png"
// import oasisImgDk from "../assets/images/projects/project-the-wild-oasis-dark.png"
// import oasisImg from "../assets/images/projects/twow.png"
// import oasisImgDk from "../assets/images/projects/twow-dr.png"

import project1 from "../assets/images/projects/twow.png"
import project1Dk from "../assets/images/projects/twow-dr.png"

import project2 from "../assets/images/projects/project-examfusion.png"
import project2Dk from "../assets/images/projects/project-examfusion-dark.png"

import natoursImg from "../assets/images/projects/project-natours.png"
import natoursImgDk from "../assets/images/projects/project-natours-dark.png"


const Projects = function () {
    const { isDarkEnabled } = useContext(ThemesContext);
    const portrait1 =
        <ProjectView
            projectImage={!isDarkEnabled ? project1 : project1Dk}
            projectTitle={"Wild Oasis"}
            // projectLink={"https://forkify-project-dev.netlify.app/"}
            projectLink={"/wild-oasis"}
        />

    const portrait2 =
        <ProjectView
            projectImage={!isDarkEnabled ? project2 : project2Dk}
            // projectImage={!isDarkEnabled ? portfolioImg : portfolioImgDk}
            projectTitle={"ExamFusion"}
            projectLink={"/examfusion"}
        />

    const landscape =
        <ProjectView
            projectImage={!isDarkEnabled ? natoursImg : natoursImgDk}
            projectTitle={"Natours"}
            // projectLink={"https://natours-app-7ddr.onrender.com/"}
            projectLink={"/natours"}
        />

    return {
        landscape,
        portrait1,
        portrait2,
    }
}

export default Projects;