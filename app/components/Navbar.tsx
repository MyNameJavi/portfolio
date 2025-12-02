import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              JG
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com/MyNameJavi" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link 
              href="https://www.linkedin.com/in/javier-guevara-698609214" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link 
              href="mailto:javierguevara3@outlook.com" 
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
