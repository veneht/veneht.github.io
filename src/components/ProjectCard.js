import Me from "../assets/img/projectsImg/me.png"
import MyBlog from "../assets/img/projectsImg/myBlog.png"

const card = [
    {
    "title" : "My Website" ,
    "img" : MyBlog,
    "alt" : "Pic of Website",
    "link" : "https://veoveneht.my.id/",
    },
    {
    "title" : "Calculator" ,
    "img" : Me,
    "alt" : "Pic of Calculator",
    "link" : "https://veoveneht.my.id/calculator",
    },
]

const ProjectCard = () => {
    const list = card.map(post =>
            <>
            <div class="card">
                <div className="card-img">
                    <img src={post.img} alt={post.alt} />
                    <p>
                        <a href={post.link}>{post.title}</a>
                    </p>
                </div>
            </div>
            </>
        )
    return (
        <>
            <p className="card-title">Projects</p>
            <div>
            {list}
            </div>
        </>
        )
}

export default ProjectCard;