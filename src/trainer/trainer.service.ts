import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Trainer, TrainerDocument } from './trainer.schema'
import { CreateTrainerDto } from './dto/create-trainer.dto'
import { LoginTrainerDto } from './dto/login-trainer.dto'

@Injectable()
export class TrainerService {
  constructor(
    @InjectModel(Trainer.name) private trainerModel: Model<TrainerDocument>
  ) {}

  async create(dto: CreateTrainerDto): Promise<Trainer> {
    return await this.trainerModel.create(dto)
  }

  async login(dto: LoginTrainerDto) {
    return await this.trainerModel.findOne(dto)
  }
}
