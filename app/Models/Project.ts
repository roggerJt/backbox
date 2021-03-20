import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Project extends BaseModel {
  public static table = 'projects'

  @column({ isPrimary: true })
  public id: number

  @column()

  public name: string
  @column()

  public color: string
  @column()

  public logo: string
  @column()

  public uid: string
  @column()

  public key: string
  @column()

  public db_user: string
  @column()

  public db_password: string
  @column()

  public db_name: string
  @column()

  public db_host: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
