import { Html } from '@react-three/drei';
import { useState, type JSX } from 'react';
import { services, experiences, projects } from '../constants';

export type SectionName = 'about' | 'experience' | 'projects' | 'contact';

export const sectionData: Record<SectionName, { title: string; content: JSX.Element }> = {
  about: {
    title: 'About',
    content: (
      <div style={{ maxWidth: 400 }}>
        <h2>About Me</h2>
        <p>I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.</p>
        <ul>
          {services.map((s) => (
            <li key={s.title}>{s.title}</li>
          ))}
        </ul>
      </div>
    ),
  },
  experience: {
    title: 'Experience',
    content: (
      <div style={{ maxWidth: 400 }}>
        <h2>Experience</h2>
        <ul>
          {experiences.map((exp) => (
            <li key={exp.title} style={{ marginBottom: 8 }}>
              <b>{exp.title}</b> at {exp.company_name} <br />
              <small>{exp.date}</small>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  projects: {
    title: 'Projects',
    content: (
      <div style={{ maxWidth: 400 }}>
        <h2>Projects</h2>
        <ul>
          {projects.map((p) => (
            <li key={p.name} style={{ marginBottom: 8 }}>
              <b>{p.name}</b>: {p.description}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  contact: {
    title: 'Contact',
    content: (
      <div style={{ maxWidth: 400 }}>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:your-email@example.com" style={{ color: '#93c5fd', textDecoration: 'underline' }}>your-email@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: '#6ee7b7', textDecoration: 'underline' }}>linkedin.com/in/yourprofile</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: '#fca5a5', textDecoration: 'underline' }}>github.com/yourusername</a></p>
        <p>Use the contact form in the main site for direct messages.</p>
      </div>
    ),
  },
};

export function SectionPanel({ section, onClose }: { section: SectionName; onClose: () => void }) {
  return (
    <Html center distanceFactor={8} style={{ pointerEvents: 'auto', zIndex: 10 }}>
      <div
        style={{
          background: 'rgba(20,20,30,0.97)',
          color: 'white',
          padding: 32,
          borderRadius: 24,
          boxShadow: '0 12px 48px #000b',
          minWidth: 340,
          maxWidth: 480,
          position: 'relative',
          border: '1.5px solid #444',
          backdropFilter: 'blur(8px)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 12,
            right: 18,
            background: 'rgba(40,40,60,0.7)',
            color: '#fff',
            border: 'none',
            fontSize: 26,
            borderRadius: '50%',
            width: 36,
            height: 36,
            cursor: 'pointer',
            boxShadow: '0 2px 8px #0006',
            transition: 'background 0.2s',
          }}
          onMouseOver={e => (e.currentTarget.style.background = '#444')}
          onMouseOut={e => (e.currentTarget.style.background = 'rgba(40,40,60,0.7)')}
          aria-label="Close section panel"
        >
          &times;
        </button>
        <h2 style={{ marginTop: 0, marginBottom: 16, fontSize: 28, letterSpacing: 1 }}>{sectionData[section].title}</h2>
        <div style={{ fontSize: 17, lineHeight: 1.7 }}>{sectionData[section].content}</div>
      </div>
    </Html>
  );
}
