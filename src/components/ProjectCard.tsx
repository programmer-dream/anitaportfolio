import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { ArrowUpRight } from "./Icons";

/** Project tile linking to its case study. */
export default function ProjectCard({ project, index, large = false }: { project: Project; index?: number; large?: boolean }) {
  return (
    <Link href={`/work/${project.slug}`} className={`pcard spot ${large ? "pcard--large" : ""}`}>
      <div className="pcard__media">
        <Image
          src={project.cover}
          alt={`${project.title} website`}
          fill
          sizes={large ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 420px, (min-width: 700px) 50vw, 100vw"}
        />
        <span className="pcard__cat">{project.category}</span>
        <span className="pcard__go" aria-hidden>
          <ArrowUpRight size={20} />
        </span>
      </div>
      <div className="pcard__body">
        <div className="pcard__top">
          {index !== undefined && <span className="pcard__num">{String(index + 1).padStart(2, "0")}</span>}
          <span className="pcard__industry">{project.industry}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="chips chips--sm">
          {project.tags.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
