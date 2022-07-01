import { Body, Controller, Post, Get } from '@nestjs/common'
import { CreateTrainerDto } from './dto/create-trainer.dto'
import { Trainer } from './trainer.schema'
import { TrainerService } from './trainer.service'

@Controller('api/trainer')
export class TrainerController {
  constructor(private trainerService: TrainerService) {}

  @Post()
  async create(@Body() dto: CreateTrainerDto): Promise<Trainer> {
    return await this.trainerService.create(dto)
  }

  @Get('/login')
  login(): string {
    return 'login'
  }
}
