export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: 'XSneakers (Final Project)',
    description:
      'Full-stack e-commerce platform with real store flows and database-backed logic.',
    tech: ['React', 'Node.js', 'MySQL', 'TypeScript/JS'],
    github: '',
    live: '',
  },
  {
    title: 'Suspicious File Detector (Python)',
    description:
      'Built a tool to detect suspicious files on a personal computer by analyzing file-system metadata and patterns, focusing on control over data and practical security logic.',
    tech: ['Python', 'File System', 'Pattern Detection'],
    github: '',
    live: '',
  },
  {
    title: 'Attack Logs Analysis System',
    description:
      'Developed a system to process raw attack logs and identify suspicious activity using practical data analysis and database workflows.',
    tech: ['Python', 'MySQL', 'SQL', 'Data Processing'],
    github: '',
    live: '',
  },
  {
    title: 'Azure Cosmos DB Cloud Practice',
    description:
      'Hands-on work with cloud data management: connected .NET code to Azure Cosmos DB to understand storing and managing data outside local environments.',
    tech: ['Azure Cosmos DB', '.NET', 'Cloud Data'],
    github: '',
    live: '',
  },
  {
    title: 'Cisco WAN Network Architecture (Packet Tracer)',
    description:
      'Designed a WAN network architecture using Cisco Packet Tracer as part of computer networking studies (Introduction to Networks).',
    tech: ['Cisco Packet Tracer', 'WAN', 'Routing', 'Networking'],
    github: '',
    live: '',
  },
  {
    title: 'Software Testing & Unit Tests',
    description:
      'Applied software testing across projects including logic validation and edge-case scenarios; built automated unit tests in C# using MSTest.',
    tech: ['C#', 'MSTest', 'Unit Testing', 'Validation', 'Edge Cases'],
    github: '',
    live: '',
  },
];