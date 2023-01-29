import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { PlayerCreateDto, PlayerUpdateDto } from './tdos';
@Controller('v1/players')
export class PlayersController {
  @Post()
  async create(@Body() player: PlayerCreateDto) {
    return player;
  }
  @Put()
  update(@Body() player: PlayerUpdateDto) {
    return 'updatePlayer';
  }
}
