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
        <p>Email: your-email@example.com</p>
        <p>Use the contact form in the main site for direct messages.</p>
      </div>
    ),
  },
};

export function SectionPanel({ section, onClose }: { section: SectionName; onClose: () => void }) {
  return (
    <Html center distanceFactor={8} style={{ pointerEvents: 'auto', zIndex: 10 }}>
      <div style={{
        background: 'rgba(20,20,30,0.97)',
        color: 'white',
        padding: 24,
        borderRadius: 16,
        boxShadow: '0 8px 32px #000a',
        minWidth: 320,
        maxWidth: 420,
        position: 'relative',
      }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 8, right: 12, background: 'none', color: '#fff', border: 'none', fontSize: 22, cursor: 'pointer' }}>&times;</button>
        <h2 style={{ marginTop: 0 }}>{sectionData[section].title}</h2>
        {sectionData[section].content}
      </div>
    </Html>
  );
}
