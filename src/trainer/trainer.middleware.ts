import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { LoginTrainerDto } from './dto/login-trainer.dto'
import { TrainerService } from './trainer.service'

@Injectable()
export class TrainerMiddleware implements NestMiddleware {
  constructor(private trainerService: TrainerService) {}
  async use(req: { body: LoginTrainerDto }, res: Response, next: NextFunction) {
    const trainer = req.body
    const isTrainer = await this.trainerService.login(trainer)

    if (isTrainer) {
      return next()
    }

    return res.status(401).json({
      statusCode: 401,
      level: 'error',
      message: 'An error occurred during authorization!',
    })
  }
}
