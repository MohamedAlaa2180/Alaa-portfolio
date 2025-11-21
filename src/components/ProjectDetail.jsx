import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Building2, User } from 'lucide-react';
import { projects } from '../data';
import ImageLightbox from './ImageLightbox';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === projectId);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const handleBackClick = () => {
    navigate('/', { state: { scrollTo: 'projects' } });
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <button
            onClick={handleBackClick}
            className="text-primary hover:underline"
          >
            Return to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </button>

        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="text-primary opacity-50 font-mono text-2xl sm:text-3xl">{`<`}</span>
            {project.title}
            <span className="text-primary opacity-50 font-mono text-2xl sm:text-3xl">{` />`}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {project.shortDescription}
            <span className="text-gray-400 dark:text-gray-500 font-mono ml-2">;</span>
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            {project.links.playStore && (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ExternalLink size={16} />
                Google Play
              </a>
            )}
            {project.links.appStore && (
              <a
                href={project.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ExternalLink size={16} />
                App Store
              </a>
            )}
            {project.links.other && (
              <a
                href={project.links.other}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
              >
                <ExternalLink size={16} />
                Meta Quest
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Building2 size={16} />
              <span>{project.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{project.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{project.duration}</span>
            </div>
          </div>
        </div>

        {/* Screenshots Section - At the top */}
        {project.images.length > 0 && (
          <div className="bg-gray-50 dark:bg-dark-light rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              <span className="text-primary opacity-50 font-mono">{`[`}</span>
              Screenshots
              <span className="text-primary opacity-50 font-mono">{`]`}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden group cursor-pointer relative"
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                      Click to enlarge
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox */}
        {lightboxOpen && (
          <ImageLightbox
            images={project.images}
            currentIndex={currentImageIndex}
            onClose={closeLightbox}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}

        {/* Videos Section */}
        {project.videos.length > 0 && (
          <div className="bg-gray-50 dark:bg-dark-light rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              <span className="text-primary opacity-50 font-mono">{`{`}</span>
              Videos
              <span className="text-primary opacity-50 font-mono">{`}`}</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {project.videos.map((video, index) => {
                const isYouTube = video.includes('youtube.com') || video.includes('youtu.be');
                return (
                  <div key={index} className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden">
                    {isYouTube ? (
                      <iframe
                        src={video}
                        title={`${project.title} video ${index + 1}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={video}
                        controls
                        className="w-full h-full"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* About the Project */}
        <div className="bg-gray-50 dark:bg-dark-light rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="text-primary opacity-50 font-mono">{`/*`}</span>
            About the Project
            <span className="text-primary opacity-50 font-mono">{`*/`}</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Features */}
        <div className="bg-gray-50 dark:bg-dark-light rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="text-primary opacity-50 font-mono">{`const`}</span> Key Features
            <span className="text-primary opacity-50 font-mono">{` =`}</span>
          </h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">▹</span>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div className="bg-gray-50 dark:bg-dark-light rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="text-primary opacity-50 font-mono">{`export`}</span> Achievements
            <span className="text-primary opacity-50 font-mono">{`;`}</span>
          </h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {project.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Info - At the bottom */}
        <div className="bg-gray-50 dark:bg-dark-light rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            <span className="text-primary opacity-50 font-mono">{`interface`}</span> Project Information
            <span className="text-primary opacity-50 font-mono">{` {}`}</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                Platform
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.platform.map((p, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white dark:bg-dark text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

