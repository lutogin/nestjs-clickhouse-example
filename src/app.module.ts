import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ClickhouseModule } from './clickhouse/clickhouse.module';

@Module({
  imports: [UserModule, ClickhouseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
