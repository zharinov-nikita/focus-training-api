import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TrainerController } from './trainer.controller'
import { Trainer, TrainerSchema } from './trainer.schema'
import { TrainerService } from './trainer.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Trainer.name, schema: TrainerSchema }]),
  ],
  controllers: [TrainerController],
  providers: [TrainerService],
})
export class TrainerModule {}
