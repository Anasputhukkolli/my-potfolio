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
    path: '/Resume.pdf',
    downloadName: 'Muhammed_Anas_Resume.pdf'
  }
};
// ========== END OF RESUME DATA ==========

export default function ResumePage() {
  return (
    <article className="relative bg-black border border-[#1a1a1a] rounded-[32px] p-8 lg:p-12 shadow-2xl overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-3xl -z-10" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] -z-10" />

      <header className="mb-12 relative">
        <div className="absolute -left-8 lg:-left-12 top-0 w-1 h-24 bg-gradient-to-b from-white via-gray-400 to-transparent" />
        
        <h2 className="text-4xl lg:text-5xl font-bold relative pb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Resume
          <span className="absolute bottom-0 left-0 h-[3px] w-16 bg-gradient-to-r from-white to-gray-500 rounded-full">
            <span className="absolute inset-0 bg-gradient-to-r from-white to-transparent animate-pulse" />
          </span>
        </h2>
      </header>

      {/* Experience Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <Briefcase size={24} className="text-white" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white">Experience</h3>
        </div>

        <div className="space-y-8">
          {resumeData.experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white rounded-full" />
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h4 className="text-xl font-semibold text-white mb-2">{exp.title}</h4>
                <p className="text-yellow-400 text-sm mb-3">
                  {exp.company && `${exp.company}${exp.period ? ' | ' : ''}`}{exp.period}
                </p>
                {exp.description.length > 0 && (
                  <ul className="text-gray-400 text-sm space-y-2">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-white mt-1">•</span>
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
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <GraduationCap size={24} className="text-white" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white">Education</h3>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
          <h4 className="text-xl font-semibold text-white mb-2">{resumeData.education.degree}</h4>
          <p className="text-yellow-400 text-sm mb-3">{resumeData.education.institution}</p>
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
            <span>Graduation: {resumeData.education.graduationYear}</span>
            <span>•</span>
            <span>CGPA: {resumeData.education.cgpa}</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <Code size={24} className="text-white" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white">Skills</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(resumeData.skills).map(([category, skillList]) => (
            <div key={category} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <h4 className="text-lg font-semibold text-white mb-4">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <Award size={24} className="text-white" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white">Certifications</h3>
        </div>

        <div className="space-y-4">
          {resumeData.certifications.map((cert, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
              <p className="text-gray-400 text-sm">{cert.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download Resume Button */}
      <div className="flex justify-center pt-8 border-t border-white/10">
        <a
          href={resumeData.resumeFile.path}
          download={resumeData.resumeFile.downloadName}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
        >
          {/* Animated background */}
          <span className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          
          {/* Content */}
          <Download size={24} className="relative z-10 group-hover:animate-bounce" />
          <span className="relative z-10">Download Resume</span>
        </a>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </article>
  );
}