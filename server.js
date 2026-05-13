const express = require("express");
const sql = require("mssql/msnodesqlv8");
const path = require("path");

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const dbConfig = {
  connectionString:
    "Driver={ODBC Driver 17 for SQL Server};Server=A102PCPREPOD\\A102PCPREPOD;Database=students-Marina;Trusted_Connection=Yes;",
  driver: "msnodesqlv8",
};

app.get("/users", async (req, res) => {
  const connection = await sql.connect(dbConfig);

  const result = await connection.request().query("SELECT * FROM dbo.users");

  res.json(result.recordset);
});

app.post("/users", async (req, res) => {
  const { name, email, psw} = req.body;
  const connection = await sql.connect(dbConfig);

  await connection
    .request()
    .input("name", sql.VarChar, name)
    .input("password", sql.Int, group_id).query(`
      INSERT INTO dbo.users( name, email, psw)
      VALUES (@name, @email, @psw)
    `);

  res.send("OK");
});

app.listen(3000, () => {
  console.log("Server started on port 3000!, http://localhost:3000");
});

