import { Controller, Get } from '@nestjs/common';
import { ClickhouseService } from './clickhouse.service';

@Controller('clickhouse')
export class ClickhouseController {
  constructor(
    private clickhouseService: ClickhouseService,
  ) {}

  @Get()
  async ping() {
    return this.clickhouseService.ping();
  }
}
