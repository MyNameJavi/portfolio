import Image from "next/image";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";

export default function Home() {
  // Project data
  const projects: Array<{
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
    imagePosition?: string;
    objectFit?: 'cover' | 'contain';
  }> = [
    {
      id: 1,
      title: "Ziocorps Medspa Website",
      description: "A modern medical spa website currently in development, featuring elegant design and user-friendly navigation.",
      imageUrl: "/images/ziocorps.png",
      githubUrl: "https://ami-website-lovat.vercel.app/",
      imagePosition: "center",
      objectFit: "contain"
    },
    {
      id: 2,
      title: "Bookstore RESTful API",
      description: "A comprehensive RESTful API for managing a bookstore system with full CRUD operations and database integration.",
      imageUrl: "/images/bookstore.png",
      githubUrl: "https://github.com/pabloehc/cen4010-team-9-bookstore",
      imagePosition: "center"
    },
    {
      id: 3,
      title: "ChatterBox Mobile App",
      description: "A mobile messaging application where I contributed to the contacts feature, enabling seamless user connections.",
      imageUrl: "/images/chatterbox.png",
      githubUrl: "https://github.com/Mobile-CodeCraft/ChatterBoxApp",
      imagePosition: "top"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "My personal portfolio website built with Next.js, showcasing my projects and skills with modern web technologies.",
      imageUrl: "/images/portfolio.png",
      githubUrl: "https://github.com/MyNameJavi/portfolio",
      imagePosition: "top"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto mb-6 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4E03AQGam-cfRYlhLA/profile-displayphoto-shrink_800_800/B4EZbUwASeGQAk-/0/1747326076436?e=1766016000&v=beta&t=tGe13RSKK-dmByWmdgeWtYhJMhJpOmAShIISrjU56vA"
                alt="Javier Guevara headshot"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, my name is Javier Guevara
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I graduated with a Bachelor&apos;s degree in Computer Science from Florida International University in August 2025. 
            With experience in both full-stack development and IT support, I build web applications using React and 
            Next.js alongside backend technologies like Spring Boot, Node.JS, and SQL. 
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
                imagePosition={project.imagePosition}
                objectFit={project.objectFit}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Get In Touch
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
