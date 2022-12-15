import mysql from "mysql2/promise";

export default async function getAllProperties(req, res) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "techlife",
    // port: 8889,
    user: "root",
    password: "",
  });
  try {
    const query = ` select * from property inner join maincat on maincat.mid=property.Area
    inner join subcat on subcat.sid=property.Subarea  order by inhome desc, xdat desc
   `;
   const Id_property = query.Id_property;

    const values = [];
    const [data] = await dbconnection.execute(query, values);

    dbconnection.end();

    res.status(200).json({ products: data });
  } catch (error) {
    // unhide to check error
    res.status(500).json({ error: error.message });
  }
}

