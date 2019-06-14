import {Sequelize} from 'sequelize-typescript';

import {IP_DB_MYSQL, NAME_DB_MYSQL, PORT_DB_MYSQL, USER_DB_MYSQL, USER_PASSWORD_DB_MYSQL} from '../../consts';

export default new Sequelize({
    database: NAME_DB_MYSQL,
    dialect: 'mysql',
    host: IP_DB_MYSQL,
    username: USER_DB_MYSQL,
    password: USER_PASSWORD_DB_MYSQL,
    port: parseInt(PORT_DB_MYSQL, 10),
    modelPaths: [
        `${__dirname}/../models`
    ]
});
