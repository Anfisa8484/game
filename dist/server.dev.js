"use strict";

var express = require("express");

var sql = require("mssql/msnodesqlv8");

var path = require("path");

var PORT = 3000;
var app = express();
app.use(express.json());
app.use(express["static"](path.join(__dirname, "public")));
var dbConfig = {
  connectionString: "Driver={ODBC Driver 17 for SQL Server};Server=A102PCPREPOD\\A102PCPREPOD;Database=students-Marina;Trusted_Connection=Yes;",
  driver: "msnodesqlv8"
};
app.get("/users", function _callee(req, res) {
  var connection, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(sql.connect(dbConfig));

        case 2:
          connection = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(connection.request().query("SELECT * FROM dbo.users"));

        case 5:
          result = _context.sent;
          res.json(result.recordset);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.post("/users", function _callee2(req, res) {
  var _req$body, name, email, psw, connection;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, psw = _req$body.psw;
          _context2.next = 3;
          return regeneratorRuntime.awrap(sql.connect(dbConfig));

        case 3:
          connection = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(connection.request().input("name", sql.VarChar, name).input("password", sql.Int, group_id).query("\n      INSERT INTO dbo.users( name, email, psw)\n      VALUES (@name, @email, @psw)\n    "));

        case 6:
          res.send("OK");

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.listen(3000, function () {
  console.log("Server started on port 3000!, http://localhost:3000");
});
//# sourceMappingURL=server.dev.js.map
