import { Body, Controller, Post, Get } from '@nestjs/common'
import { CreateTrainerDto } from './dto/create-trainer.dto'
import { Trainer } from './trainer.schema'
import { TrainerService } from './trainer.service'
import { hashSync } from 'bcryptjs'
import { LoginTrainerDto } from './dto/login-trainer.dto'
import { Response } from 'express'

@Controller('api/trainer')
export class TrainerController {
  constructor(private trainerService: TrainerService) {}

  @Post()
  async create(@Body() dto: CreateTrainerDto): Promise<Trainer> {
    const password = hashSync(dto.password, 4)
    return await this.trainerService.create({ ...dto, password })
  }

  @Get('/login')
  async login(@Body() dto: LoginTrainerDto, res: Response): Promise<Trainer> {
    return await this.trainerService.findOne(dto)
  }
}
