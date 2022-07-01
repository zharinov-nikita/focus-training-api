import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TrainerController } from './trainer.controller'
import { TrainerMiddleware } from './trainer.middleware'
import { Trainer, TrainerSchema } from './trainer.schema'
import { TrainerService } from './trainer.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Trainer.name, schema: TrainerSchema }]),
  ],
  controllers: [TrainerController],
  providers: [TrainerService],
})
export class TrainerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TrainerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
