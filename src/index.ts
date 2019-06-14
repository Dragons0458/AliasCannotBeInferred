import Projects from './api/models/Projects';
import ProjectRecurrence from './api/models/ProjectRecurrence';
import sequelize from './api';

sequelize.databaseVersion().then(version => console.info(`Version: ${version}`)).catch(console.error);


Projects.findAll({
    include: [{
        model: ProjectRecurrence
    }]
}).then(console.log).catch(console.error);
