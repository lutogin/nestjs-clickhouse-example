import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
  ) {}

  @Get()
  async getAll() {
    return this.userService.getAll();
  }

  @Get('/:id')
  async get(@Param('id') id: number) {
    return this.userService.getById(id);
  }

  @Post()
  async create(@Body() body) {
    return this.userService.create(body);
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() body
  ) {
    return this.userService.update(id, body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
