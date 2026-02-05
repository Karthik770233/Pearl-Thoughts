import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'basu123',
      database: 'DrAppointmentDB',
      entities: [User],
      synchronize: true,   // Auto create tables (dev only)
    }),
  ],
})
export class AppModule {}
