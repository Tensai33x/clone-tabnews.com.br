import database from "infra/database.js";

export default async function status(request, response) {
  const updateAt = new Date().toISOString();
  const serverVersion = await database.query("SHOW server_version");
  const serverVersionResult = serverVersion.rows[0].server_version;
  const maxConnections = await database.query("SHOW max_connections;");
  const maxConnectionsResult = maxConnections.rows[0].max_connections;
  const statActivity = await database.query(
    "SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'local_user';",
  );
  const statActivityResult = statActivity.rows[0].count;

  response.status(200).json({
    update_at: updateAt,
    server_version: serverVersionResult,
    max_connections: maxConnectionsResult,
    stat_activity: statActivityResult,
  });
}
