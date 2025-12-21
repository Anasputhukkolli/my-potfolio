import { Metadata } from 'next';
import { Briefcase, Download, GraduationCap, Award, Code } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume | Anas Portfolio',
  description: 'Full Stack Web Developer and React Native Developer - Experience, Education, and Skills',
};

// ========== RESUME DATA - EDIT HERE ==========
const resumeData = {
  experiences: [
    {
      title: 'Co-Founder',
      company: 'KALKUS',
      period: 'Apr 2025 – Present',
      description: []
    },
    {
      title: 'Web Developer (Full-Time)',
      company: 'ZAPPQ',
      period: 'Mar 2025 – Oct 2025',
      description: []
    },
    {
      title: 'Full Stack Web Developer Intern (Django)',
      company: 'TALROP / STEYP',
      period: 'Nov 2022 – Dec 2023',
      description: [
        'Developed web applications using Django, working on both front-end and back-end',
        'Improved skills in Frontend, Django Backend, DevOps'
      ]
    },
    {
      title: 'App Developer Intern (React Native)',
      company: 'TALROP / STEYP',
      period: 'Feb 2024 – Apr 2024',
      description: [
        'Built cross-platform mobile applications with React Native'
      ]
    },
    {
      title: 'GenAI Intern',
      company: 'TALROP / STEYP',
      period: 'Aug 2024 – Current',
      description: [
        'Worked as part of a team focused on developing generative AI solutions'
      ]
    },
    {
      title: 'Master Tutor',
      company: 'STEYP',
      period: '',
      description: [
        'Manage and mentor a team of students'
      ]
    },
    {
      title: 'IEEE MEA SB',
      company: '',
      period: 'Jan 2024 – Present',
      description: [
        'Web Master | 01/2024 – 02/2025',
        'IAS Vice Chairperson | 02/2025 – Present',
        'Speaker of Web Development Workshop'
      ]
    },
    {
      title: 'Animator Intern',
      company: 'GTECH MULEARN',
      period: 'May 2023 – Dec 2024',
      description: [
        'Animator which helped to improve skills in Blender'
      ]
    },
    {
      title: 'TACS MEA',
      company: '',
      period: 'May 2024 – Present',
      description: [
        'Design Lead | May 2024 – May 2025',
        'Head Coordinator | May 2025 – Present'
      ]
    }
  ],

  education: {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'APJ Abdul Kalam Technological University (KTU), Kerala',
    graduationYear: '2026',
    cgpa: '7.1'
  },

  skills: {
    'Frontend': ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Next.js'],
    'Backend': ['Django'],
    'Databases': ['MySQL', 'PostgreSQL', 'Firebase'],
    'Mobile Development': ['React Native', 'Firebase'],
    'Hosting': ['Digital Ocean', 'Hostinger', 'XAMPP'],
    'Design Tools': ['Photoshop', 'Canva', 'Figma'],
    'Animation': ['Blender', 'After Effects'],
    'Version Control': ['Git', 'GitHub']
  },

  certifications: [
    {
      title: 'Django Full Stack Developer',
      date: 'December 2023'
    },
    {
      title: 'React Native App Developer',
      date: 'April 2024'
    },
    {
      title: '7-Month Experience Certificate - Web Developer',
      date: 'Full-time Employee'
    }
  ],

  resumeFile: {
    path: './file/Cv.pdf',
    downloadName: 'Muhammed_Anas_Resume.pdf'
  }
};
// ========== END OF RESUME DATA ==========

export default function ResumePage() {
  return (
    <article className="relative bg-black  p-8 lg:p-12  overflow-hidden font-mono">
      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-cyan-500"></div>
      <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-pink-500"></div>
      <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-pink-500"></div>
      <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-cyan-500"></div>

      {/* Animated border lines */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"></div>
      <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-pulse"></div>
      <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent animate-pulse"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />

      <header className="mb-12 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-cyan-500"></div>
            <div className="w-2 h-2 bg-pink-500"></div>
            <div className="w-2 h-2 bg-cyan-500"></div>
          </div>
          <span className="text-xs text-cyan-400 uppercase tracking-widest">RESUME_FILE</span>
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-bold relative pb-6 text-cyan-300 tracking-wider">
          {'CURRICULUM_VITAE'}
          <span className="absolute bottom-0 left-0 h-[2px] w-32 bg-gradient-to-r from-cyan-500  to-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></span>
        </h2>

        
      </header>

      {/* Experience Section */}
      <section className="mb-12 relative z-10">
        <div className="flex items-center gap-3 mb-6 p-4 bg-cyan-500/5 border border-cyan-500/30">
          <div className="p-2 bg-cyan-500/20 border border-cyan-500">
            <Briefcase size={20} className="text-cyan-400" />
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-cyan-400 uppercase tracking-wide">Experience_Log</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
        </div>

        <div className="space-y-6">
          {resumeData.experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-cyan-500/30 hover:border-cyan-500 transition-all duration-300">
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-cyan-500 rotate-45" />
              <div className="bg-black/30 border border-cyan-500/30 p-5 hover:bg-cyan-500/5 hover:border-cyan-500/50 transition-all duration-300 relative">
                {/* Corner decorations */}
                <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-cyan-500/50"></div>
                <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-pink-500/50"></div>

                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="text-lg font-semibold text-gray-200">{exp.title}</h4>
                  <span className="text-xs text-cyan-500/70 whitespace-nowrap">
                    [{String(index + 1).padStart(2, '0')}]
                  </span>
                </div>
                <p className=" text-sm mb-3 uppercase tracking-wide">
                  {exp.company && `${exp.company}${exp.period ? ' | ' : ''}`}{exp.period}
                </p>
                {exp.description.length > 0 && (
                  <ul className="text-gray-400 text-sm space-y-2">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">&gt;</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12 relative z-10">
        <div className="flex items-center gap-3 mb-6 p-4 bg-cyan-500/5 border border-cyan-500/30">
          <div className="p-2 bg-cyan-500/20 border border-cyan-500">
            <GraduationCap size={20} className="text-cyan-400" />
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-cyan-400 uppercase tracking-wide">Education_Data</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
        </div>

        <div className="bg-black/30 border border-cyan-500/30 p-6 hover:bg-cyan-500/5 hover:border-cyan-500/50 transition-all duration-300 relative">
          <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-cyan-500/50"></div>
          <div className="absolute top-1 right-1 w-3 h-3 border-r border-t border-pink-500/50"></div>
          <div className="absolute bottom-1 left-1 w-3 h-3 border-l border-b border-pink-500/50"></div>
          <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-cyan-500/50"></div>

          <h4 className="text-lg font-semibold text-gray-200 mb-2">{resumeData.education.degree}</h4>
          <p className=" text-sm mb-3 uppercase">{resumeData.education.institution}</p>
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
            <span className="text-cyan-400">Graduation:</span>
            <span>{resumeData.education.graduationYear}</span>
            <span className="text-cyan-500/50">|</span>
            <span className="text-cyan-400">CGPA:</span>
            <span>{resumeData.education.cgpa}</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12 relative z-10">
        <div className="flex items-center gap-3 mb-6 p-4 bg-cyan-500/5 border border-cyan-500/30">
          <div className="p-2 bg-cyan-500/20 border border-cyan-500">
            <Code size={20} className="text-cyan-400" />
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-cyan-400 uppercase tracking-wide">Skills_Matrix</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(resumeData.skills).map(([category, skillList]) => (
            <div key={category} className="bg-black/30 border border-cyan-500/30 p-5 hover:bg-cyan-500/5 hover:border-cyan-500/50 transition-all duration-300 relative">
              <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-cyan-500/50"></div>
              <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-pink-500/50"></div>

              <h4 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 text-xs text-gray-300 uppercase">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-12 relative z-10">
        <div className="flex items-center gap-3 mb-6 p-4 bg-cyan-500/5 border border-cyan-500/30">
          <div className="p-2 bg-cyan-500/20 border border-cyan-500">
            <Award size={20} className="text-cyan-400" />
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-cyan-400 uppercase tracking-wide">Certifications</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
        </div>

        <div className="space-y-4">
          {resumeData.certifications.map((cert, index) => (
            <div key={index} className="bg-black/30 border border-cyan-500/30 p-5 hover:bg-cyan-500/5 hover:border-cyan-500/50 transition-all duration-300 relative">
              <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-cyan-500/50"></div>
              <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-pink-500/50"></div>

              <div className="flex items-start justify-between gap-4">
                <h4 className="text-base font-semibold text-gray-200">{cert.title}</h4>
                <span className="text-xs text-cyan-500/70 whitespace-nowrap">
                  [{String(index + 1).padStart(2, '0')}]
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-2">{cert.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download Resume Button */}
      <div className="flex justify-center pt-8 border-t border-cyan-500/30 relative z-10">
        <a
          href={resumeData.resumeFile.path}
          download={resumeData.resumeFile.downloadName}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-cyan-500/10 border border-cyan-500 text-cyan-400 font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]"
        >
          {/* Corner accents */}
          <span className="absolute top-0 left-0 w-3 h-3 border-l border-t border-cyan-500"></span>
          <span className="absolute top-0 right-0 w-3 h-3 border-r border-t border-pink-500"></span>
          <span className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-pink-500"></span>
          <span className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-cyan-500"></span>

          <span className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></span>
          
          <Download size={24} className="relative z-10 group-hover:animate-bounce" />
          <span className="relative z-10 uppercase tracking-wide">&gt; Download_Resume</span>
        </a>
      </div>

      {/* Terminal footer */}
     
    </article>
  );
}