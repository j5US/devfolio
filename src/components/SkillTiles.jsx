function SkillTiles() {
    const skills = ["c++", "javascript", "python", "c", "java", "html", "css", "tailwindcss",
        "react", "nodejs", "mongodb", "mysql", "git", "postman", "nextjs","windows",
        "linux", "visual studio code", "apache netbeans", "figma", "adobe photoshop", "canva"
    ];
    // const progLang = ["c++", "javascript", "python", "c", "java",];
    // const framework = ["html", "css", "tailwindcss", "react", "nodejs",];
    // const db = ["mongodb", "mysql",];
    // const others = ["git", "postman",];
    // const os = ["microsoft windows", "linux",];
    // const ide = ["visual studio code", "apache netbeans",];
    // const design = ["figma", "adobe photoshop", "canva"];

    return (
        <ul className="flex flex-wrap gap-2 poppins-regular text-[0.92rem]">
            {skills.map(skill =>
                <li
                    key={skill}
                    className="border-2 border-link-border px-3 py-1 rounded-full 
                    min-w-12 flex justify-center items-center outline outline-0 outline-link-border
                    hover:outline-[4px] transition-all duration-200 cursor-pointer"
                >
                    <span>{skill}</span>
                </li>
            )}         

        </ul>
    );
}

export default SkillTiles;
