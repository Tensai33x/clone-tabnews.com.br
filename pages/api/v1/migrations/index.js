import { join } from "node:path";
import migrationRunner from "node-pg-migrate";
export default async function status(request, response) {
  if (request.method === "POST") {
    const migrations = await migrationRunner({
      dryRun: false,
      dir: join("infra", "migrations"),
      verbose: true,
      direction: "up",
      migrationsTable: "pgmigrations",
    });
    return response.status(200).json(migrations);
  }
  if (request.method === "GET") {
    const migrations = await migrationRunner({
      dryRun: false,
      dir: join("infra", "migrations"),
      verbose: true,
      direction: "up",
      migrationsTable: "pgmigrations",
    });
    return response.status(200).json(migrations);
  }
  return response.status(405).end;
}
