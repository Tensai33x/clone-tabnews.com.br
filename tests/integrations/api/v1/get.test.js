test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  const responseBody = await response.json();
  expect(response.status).toBe(200);

  expect(responseBody.update_at).toBeDefined();
  expect(responseBody.update_at).toEqual(
    new Date(responseBody.update_at).toISOString(),
  );

  expect(responseBody.dependencies.database.server_version).toBeDefined();
  expect(responseBody.dependencies.database.server_version).toBe("16.0");

  expect(responseBody.dependencies.database.max_connections).toBeDefined();
  expect(responseBody.dependencies.database.max_connections).toBe("100");

  expect(responseBody.dependencies.database.stat_activity).toBeDefined();
  expect(responseBody.dependencies.database.stat_activity).toEqual(1);
});
