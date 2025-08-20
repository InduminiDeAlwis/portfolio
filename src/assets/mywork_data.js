import project1_img from '../assets/project_1.png'
import project2_img from '../assets/project_2.png'
import project3_img from '../assets/project_3.png'
import project4_img from '../assets/project_4.png'
//import project5_img from '../assets/project_5.png'
//import project6_img from '../assets/project_6.png'

const mywork_data = [
    {
        w_no: 1,
        w_name: "Portfolio Website",
        w_img: project1_img,
        description: "A personal portfolio showcasing my projects and skills.",
        technologies: ["React", "CSS", "JavaScript"],
        category: "Web Development",
        github: "https://github.com/username/portfolio",
        live: "https://yourportfolio.com",
        date: "2025-01-05",
        status: "Completed"
    },
    {
        w_no: 2,
        w_name: "E-commerce App",
        w_img: project2_img,
        description: "An online store with cart and payment integration.",
        technologies: ["React", "Node.js", "MongoDB"],
        category: "Full Stack",
        github: "https://github.com/username/ecommerce",
        live: "https://yourecommerce.com",
        date: "2025-02-01",
        status: "Ongoing"
    },
    {
        w_no: 3,
        w_name: "Blog Platform",
        w_img: project3_img,
        description: "A simple blog platform with markdown support.",
        technologies: ["Next.js", "TailwindCSS", "Firebase"],
        category: "Web App",
        github: "https://github.com/username/blog",
        live: "https://yourblog.com",
        date: "2025-01-20",
        status: "Completed"
    },
    {
        w_no: 4,
        w_name: "Chat Application",
        w_img: project4_img,
        description: "A real-time chat app with socket.io integration.",
        technologies: ["React", "Socket.IO", "Express"],
        category: "Web App",
        github: "https://github.com/username/chatapp",
        live: "https://yourchatapp.com",
        date: "2025-02-10",
        status: "Ongoing"
    },
]
 
export default mywork_data;