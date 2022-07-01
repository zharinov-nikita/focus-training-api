import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { LoginTrainerDto } from './dto/login-trainer.dto'
import { TrainerService } from './trainer.service'
import { compareSync } from 'bcryptjs'

@Injectable()
export class TrainerMiddleware implements NestMiddleware {
  constructor(private trainerService: TrainerService) {}
  async use(req: { body: LoginTrainerDto }, res: Response, next: NextFunction) {
    const { login, password } = req.body
    const trainer = await this.trainerService.login({ login })

    if (!trainer) {
      return res.status(403).json({
        statusCode: 403,
        level: 'error',
        message: 'There is no such user!',
      })
    }

    const isPassword = compareSync(password, trainer.password)

    if (isPassword) {
      return next()
    }

    return res.status(401).json({
      statusCode: 401,
      level: 'error',
      message: 'Invalid username or password is specified!',
    })
  }
}
