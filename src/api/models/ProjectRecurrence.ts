import {
    Table,
    Column,
    Model,
    ForeignKey,
    BelongsTo,
    IsInt,
    Length,
    HasMany,
    DataType
} from 'sequelize-typescript';

import Projects from './Projects';

@Table({
    tableName: 'project_recurrence'
})
export default class ProjectRecurrence extends Model<ProjectRecurrence> {

    @ForeignKey(() => Projects)
    @IsInt
    @Column
    project_id: number;

    @BelongsTo(() => Projects, 'project_id')
    projectIdObject: Projects;

    @Length({min: 0, max: 1, msg: 'Is active error'})
    @IsInt
    @Column(DataType.TINYINT)
    is_active: number;

    @HasMany(() => Projects, 'project_recurrence_id')
    projects: Projects[];

}
