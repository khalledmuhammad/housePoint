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

export  async function getImage(req,res) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "techlife",
    // port: 8889,
    user: "root",
    password: "",
  });

  try {

    const imagequery = ` select * from image where cat=${req.Id_property} and main=1 limit 1 `

    const values = [];

    const [images] = await dbconnection.execute(imagequery, values);
    dbconnection.end();


    
    res.status(200).json({ images: images });

} catch (error) {
  // unhide to check error
  res.status(500).json({ error: error.message });
}
  
}