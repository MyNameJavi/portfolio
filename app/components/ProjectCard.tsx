import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  imagePosition?: string;
  objectFit?: 'cover' | 'contain';
}

export default function ProjectCard({ title, description, imageUrl, githubUrl, imagePosition = 'center', objectFit = 'cover' }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={objectFit === 'contain' ? 'object-contain' : 'object-cover'}
          style={{ objectFit: objectFit, objectPosition: imagePosition }}
        />
      </div>
      <div className="p-4 flex flex-col grow">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 grow">
          {description}
        </p>
        <Link 
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mt-auto"
        >
          View Project
          <ExternalLink size={16} />
        </Link>
      </div>
    </div>
  );
}
