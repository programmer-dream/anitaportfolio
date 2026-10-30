"use client";

import { useState } from "react";
import { categories, projects } from "@/content/projects";
import ProjectCard from "./ProjectCard";

/** All projects with category filter tabs. */
export default function WorkGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="filters" role="tablist" aria-label="Filter projects">
        {categories.map((c) => {
          const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
          return (
            <button key={c} role="tab" aria-selected={filter === c} className={`filter ${filter === c ? "is-active" : ""}`} onClick={() => setFilter(c)}>
              {c}
              <span>{count}</span>
            </button>
          );
        })}
      </div>
      <div className="work-grid" key={filter}>
        {list.map((p) => (
          <div key={p.slug} className="work-grid__item">
            <ProjectCard project={p} index={projects.indexOf(p)} />
          </div>
        ))}
      </div>
    </>
  );
}
