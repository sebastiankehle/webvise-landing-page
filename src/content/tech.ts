import {
  SiClaude,
  SiDocker,
  SiDrizzle,
  SiHuggingface,
  SiLangchain,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTypeorm,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export const techContent = {
  headline: {
    primary: "Built with Modern Tech",
    secondary: "Leveraging cutting-edge technologies for optimal performance",
  },
  technologies: [
    {
      name: "Next.js",
      icon: SiNextdotjs,
      url: "https://nextjs.org",
    },
    {
      name: "React",
      icon: SiReact,
      url: "https://react.dev",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      url: "https://www.typescriptlang.org",
    },
    {
      name: "Nest.js",
      icon: SiNestjs,
      url: "https://nestjs.com",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      url: "https://tailwindcss.com",
    },
    {
      name: "shadcn/ui",
      icon: SiShadcnui,
      url: "https://ui.shadcn.com",
    },
    {
      name: "Prisma",
      icon: SiPrisma,
      url: "https://www.prisma.io",
    },
    {
      name: "Drizzle",
      icon: SiDrizzle,
      url: "https://orm.drizzle.team",
    },
    {
      name: "TypeORM",
      icon: SiTypeorm,
      url: "https://typeorm.io",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      url: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      url: "https://www.mongodb.com",
    },
    {
      name: "Redis",
      icon: SiRedis,
      url: "https://redis.io",
    },
    {
      name: "Supabase",
      icon: SiSupabase,
      url: "https://supabase.com",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      url: "https://vercel.com",
    },
    {
      name: "OpenAI",
      icon: SiOpenai,
      url: "https://openai.com",
    },
    {
      name: "Claude",
      icon: SiClaude,
      url: "https://claude.ai",
    },
    {
      name: "LangChain",
      icon: SiLangchain,
      url: "https://js.langchain.com",
    },
    {
      name: "Hugging Face",
      icon: SiHuggingface,
      url: "https://huggingface.co",
    },
    {
      name: "TensorFlow",
      icon: SiTensorflow,
      url: "https://tensorflow.org",
    },
    {
      name: "Docker",
      icon: SiDocker,
      url: "https://www.docker.com",
    },
  ],
} as const;
