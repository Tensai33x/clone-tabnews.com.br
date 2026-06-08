import database from "infra/database.js";

export default async function status(request, response) {

  const updateAt = new Date().toISOString();
  response.status(200).json({
    update_at: updateAt,
  })
  
}
