import { Module } from '@nestjs/common';
import { ClickhouseModule } from '../clickhouse/clickhouse.module';
import { ClickhouseService } from '../clickhouse/clickhouse.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: ClickhouseService,
      useFactory: () => new ClickhouseService('users'),
    },
  ]
})
export class UserModule {}
