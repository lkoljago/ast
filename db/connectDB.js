const colors = require('colors');
module.exports = (Sequelize, config) => {
    const options = {
        host: config.db.host,
        dialect: 'mysql',
        logging: false,
        define: {
            timestamps: true,
            paranoid: true,
        }
    };
    console.log('Database connection started'.blue);
    
    const sequelize = new Sequelize(config.db.name, config.db.user, config.db.password, options);

    const User = require('./models/user')(Sequelize, sequelize);
    const Child = require('./models/child')(Sequelize, sequelize);
    const ParentRelation = require('./models/parentRelation')(Sequelize, sequelize);
    
    

    // User <-> Role
    User.hasMany(ParentRelation);
    Child.hasMany(ParentRelation);

    

    return {
        users: User,
        child: Child,
        parentRelation: ParentRelation,
        sequelize,
        Sequelize,
    };
};