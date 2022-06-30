import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class AppMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const isApiKey = req.headers?.['api-key']
    if (isApiKey) {
      const apiKeyClient = req.headers['api-key']
      const apiKeyServer = process.env['api-key']

      if (apiKeyClient === apiKeyServer) {
        return next()
      }

      return res.status(401).json({
        statusCode: 401,
        level: 'error',
        message: 'The wrong key was specified when logging in to the api!',
      })
    }
    return res.status(403).json({
      statusCode: 403,
      level: 'error',
      message: 'Access for unauthorized users is prohibited!',
    })
  }
}
