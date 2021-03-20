import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Projects extends BaseSchema {
  protected tableName = 'projects'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').nullable()
      table.string('color').nullable()
      table.string('logo').nullable()
      table.string('uid')
      table.string('key').nullable()
      table.string('db_user').nullable()
      table.string('db_password').nullable()
      table.string('db_name').nullable()
      table.string('db_host').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
