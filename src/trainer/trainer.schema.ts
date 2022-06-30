import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type TrainerDocument = Trainer & Document

@Schema()
export class Trainer {
  @Prop({ type: String, required: true, unique: false })
  name: string

  @Prop({ type: String, required: true, unique: true })
  email: string

  @Prop({ type: String, required: true, unique: true })
  login: string

  @Prop({ type: String, required: true, unique: false })
  password: string
}

export const TrainerSchema = SchemaFactory.createForClass(Trainer)
