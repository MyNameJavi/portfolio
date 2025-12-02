import Image from "next/image";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";

export default function Home() {
  // Placeholder project data
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A brief description of your first project",
      imageUrl: "/placeholder-project.jpg",
      githubUrl: "https://github.com/yourusername/project1"
    },
    {
      id: 2,
      title: "Project 2",
      description: "A brief description of your second project",
      imageUrl: "/placeholder-project.jpg",
      githubUrl: "https://github.com/yourusername/project2"
    },
    {
      id: 3,
      title: "Project 3",
      description: "A brief description of your third project",
      imageUrl: "/placeholder-project.jpg",
      githubUrl: "https://github.com/yourusername/project3"
    },
    {
      id: 4,
      title: "Project 4",
      description: "A brief description of your fourth project",
      imageUrl: "/placeholder-project.jpg",
      githubUrl: "https://github.com/yourusername/project4"
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
                src="/headshot-placeholder.jpg"
                alt="Javier Guevara headshot"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, my name is Javier Guevara
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I&apos;m a passionate developer with expertise in building modern web applications. 
            With a strong foundation in full-stack development, I create elegant solutions 
            to complex problems. I specialize in React, Next.js, and cutting-edge web technologies, 
            constantly learning and adapting to new challenges in the ever-evolving tech landscape.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
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
