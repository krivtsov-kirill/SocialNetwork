// const mysql = require(`mysql2`);
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: "SocialNet",
//     password: "Kirill3kvk",
//     port: 3306
// });
// const sql = `create table if not exists users(
//     id int primary key auto_increment,
//     name varchar(255) not null,
//     age int not null
//   )`;

//   connection.query(sql, function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });
 
// const users = [
//     ["Bob", 22],
//     ["Alice", 25],
//     ["Kate", 28]
//   ];
//   const sql2 = `INSERT INTO users(name, age) VALUES ?`;
   
//   connection.query(sql2, [users], function(err, results) {
//       if(err) console.log(err);
//       console.log(results);
//   });
 
