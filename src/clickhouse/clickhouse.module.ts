import { Module } from '@nestjs/common';
import { ClickhouseService } from './clickhouse.service';
import { ClickhouseController } from './clickhouse.controller';

@Module({
  providers: [
    {
      provide: ClickhouseService,
      useFactory: () => new ClickhouseService(null),
    },
  ],
  controllers: [ClickhouseController],
  exports: [ClickhouseService]
})
export class ClickhouseModule {}
