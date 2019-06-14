import {
    Table,
    Column,
    Model,
    Length,
	ForeignKey,
	BelongsTo,
	IsInt,
	HasMany
} from 'sequelize-typescript';

import ProjectRecurrence from './ProjectRecurrence';

@Table({
    tableName: 'projects'
})
export default class Projects extends Model<Projects> {

	@Length({min: 0, max: 200, msg: 'Description error'})
	@Column
	description: string;

	@ForeignKey(() => ProjectRecurrence)
	@IsInt
	@Column
	project_recurrence_id: number;

	@BelongsTo(() => ProjectRecurrence, 'project_recurrence_id')
	projectRecurrenceIdObject: ProjectRecurrence;

	@HasMany(() => ProjectRecurrence, 'project_id')
	projectsRecurrences: ProjectRecurrence[];

}
