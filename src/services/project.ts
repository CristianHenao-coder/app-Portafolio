import axios from "axios";

const API_URL = "/api/projects";

export const getProjects = async () => {
  const res = await fetch("/api/projects");
  if (!res.ok) throw new Error("Error al cargar los proyectos");
  return res.json();
};



export const createProject = async (data: unknown) => {
  const res = await fetch("/api/projects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear el proyecto");
  return res.json();
};
