const Sequelize = require('sequelize');
const colors = require('colors');

const config = require('./config/config.json');
const PORT = config.server.PORT;
const db = require('./db/connectDB')(Sequelize, config);
const server = require('./server')(db, config);

(async function () {
    await db.sequelize.sync();

    // await db.roles.findOrCreate({ where: { name: 'adminstrator' } });
    // await db.roles.findOrCreate({ where: { name: 'user' } });

    server.listen(3000, () => console.log(`Server started on port ${PORT}`.blue));
})();