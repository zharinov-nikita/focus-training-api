import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class AppMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const isApiKey = req.headers?.['api-key']
    if (isApiKey) {
      const apiKeyClient = req.headers['api-key']
      const apiKeyServer = 1
    }
  }
}
