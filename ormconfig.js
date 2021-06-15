const srcConfig = {
    type: "mariadb",
    host: "database-asa.cbjt4dawcwnt.sa-east-1.rds.amazonaws.com",
    username: "root",
    password: "00000000",
    port: 3306,
    database: "asa_tb2",
    synchronize: true,
    entities: ["src/models/**.ts"],
    logging: false,
    insecureAuth: true,
};
const distConfig = {
    type: "mariadb",
    host: "database-asa.cbjt4dawcwnt.sa-east-1.rds.amazonaws.com",
    username: "root",
    password: "00000000",
    port: 3306,
    database: "asa_tb2",
    synchronize: true,
    entities: ["dist/src/models/**.js"],
    logging: false,
    insecureAuth: true,
};
console.log(process.env.TS_NODE, "NODE ENV");
module.exports = process.env.TS_NODE ? srcConfig : distConfig;

