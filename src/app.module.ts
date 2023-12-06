import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [ReportsModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
