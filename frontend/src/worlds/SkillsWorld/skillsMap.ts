export interface SkillNode {
    id: string;
    label: string;
    category: "frontend" | "backend" | "ai" | "tools";
    x: number;
    y: number;
    description: string;
    stack?: string[];
}

export const skillsMap: SkillNode[] = [
    {
        id: "react",
        label: "React",
        category: "frontend",
        x: 2,
        y: 2,
        description:
            "Component-driven UI development with hooks, state management, and accessibility-first patterns.",
        stack: ["Hooks", "Zustand", "Framer Motion"]
    },
    { 
        id: "ts", 
        label: "TypeScript", 
        category: "frontend", 
        x: 4, 
        y: 2,
        description:
            "TypeScript is a strongly typed programming language that builds on JavaScript.",
        stack: ["TypeScript", "Jest", "ESLint"]
    },

    {
        id: "fastapi",
        label: "FastAPI",
        category: "backend",
        x: 2,
        y: 5,
        description:
            "High-performance Python APIs with async support, schema validation, and OpenAPI documentation.",
        stack: ["Pydantic", "JWT", "PostgreSQL"]
    },
        {
            id: "node", label: "Node.js", category: "backend", x: 4, y: 5,
            description: ""
        },

    {
        id: "ml", label: "Machine Learning", category: "ai", x: 6, y: 3,
        description: ""
    },
    {
        id: "nlp", label: "NLP", category: "ai", x: 6, y: 5,
        description: ""
    },

    {
        id: "git", label: "Git", category: "tools", x: 3, y: 7,
        description: ""
    },
];
