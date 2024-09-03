  const mysql=require("mysql");
const connection1 = mysql.createConnection({
  host: process.env.DB1_HOST,
  user: process.env.DB1_USER,
  password: process.env.DB1_PASSWORD,
  database: process.env.DB1_DATABASE,
});
connection1.connect((err) => {
  if (err) {
    console.error("Error occurred in connection1:", err.message);
  } else {
    console.log("SQL connection success in sih database");
  }
});

module.exports=connection1;