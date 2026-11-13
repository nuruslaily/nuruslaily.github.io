import type { IconType } from "react-icons";
import { FiCode } from "react-icons/fi";
import {
  SiCodeigniter,
  SiCss,
  SiDart,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const techIcons: Record<string, IconType> = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  "html/css": SiHtml5,
  html: SiHtml5,
  css: SiCss,
  "tailwind css": SiTailwindcss,
  tailwindcss: SiTailwindcss,
  "node.js": SiNodedotjs,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  php: SiPhp,
  codeigniter: SiCodeigniter,
  flutter: SiFlutter,
  dart: SiDart,
  "vite.js": SiVite,
  vite: SiVite,
  "material ui": SiMui,
  "rest api": TbApi,
  "rest apis": TbApi,
  git: SiGit,
};

export default function TechIcon({
  name,
  className = "h-4 w-4",
}: {
  name: string;
  className?: string;
}) {
  const Icon = techIcons[name.trim().toLowerCase()] ?? FiCode;
  return <Icon className={`shrink-0 ${className}`} aria-hidden="true" />;
}
