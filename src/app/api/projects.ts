import type { NextApiRequest, NextApiResponse } from "next";
import dbConnection from "@/lib/db";
import Project from "@/models/project";
import { error } from "console";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnection();

try {

    switch (req.method) {

    case "GET": {

        const projects = await Project.find();
        return res.status(200).json(projects);

    }
    
        case "POST": {

            const { title, description, image, link } = req.body;
            if (!title || !description || !image|| !link )
                return res.status(400).json({
            message: "campos obligatorios"
        });

        }
    }

        } catch (error: unknown) {
            console.error("Error en /api/projects:", error);
            if (error instanceof Error) {
            return res.status(500).json({
                message: "Error interno del servidor",
                error: error.message,
            } )}};

              return res.status(500).json({
      message: "Error interno del servidor",
      error: String(error),
    });
     
}
