// Fungsi untuk mengambil Image
const getImage = (imageName) => {
    try {
        return require(`../assets/img/Tools&SkillsImg/${imageName}.png`);
    } catch (err) {
        console.error(`Image ${imageName} not found!`);
        return null; // Jika gambar tidak ditemukan
    }
};

// Array for Image Tools Here
const tools = [
    {
    "img" : getImage("VSC"),
    "alt" : "Pic of Visual Studio Code",
    },
    {
    "img" : getImage("Unity"),
    "alt" : "Pic of Unity",
    },
    {
    "img" : getImage("Blender"),
    "alt" : "Pic of Unity",
    },
]

// Array for Image Skills Here
const skills = [
    {
    "img" : getImage("HTML5"),
    "alt" : "Logo of JavaScript",
    },
    {
    "img" : getImage("CSS3"),
    "alt" : "Logo of JavaScript",
    },
    {
    "img" : getImage("JavaScript"),
    "alt" : "Logo of JavaScript",
    },
    {
    "img" : getImage("React"),
    "alt" : "Logo of HTML",
    },
    {
    "img" : getImage("NodeJS"),
    "alt" : "Logo of HTML",
    },
    {
    "img" : getImage("MongoDB"),
    "alt" : "Logo of HTML",
    },
]

const ToolsAndSkillsCard = () => {
    // Array for Tools
    const listTools = tools.map(tool =>
        <>
        <div className="card">
            <div className="card-img">
                <img src={tool.img} alt={tool.alt} />
            </div>
        </div>
        </>
    )

    // Array for Skills
    const listSkills = skills.map(skill => 
        <>
        <div className="card">
            <div className="card-img">
                <img src={skill.img} alt={skill.alt} />
            </div>
        </div>
        </>
    )
    return (
        <>
        <div className="card-wrapper">
        <p className="card-title">Tools</p>
            <div>
                {listTools}
            </div>
        </div>

        <div className="card-wrapper">
        <p className="card-title">Skills</p>
            <div>
                {listSkills}
            </div>
        </div>
        </>
    )
}

export default ToolsAndSkillsCard;