import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogController } from './blog/blog.controller';
import { BlogModule } from './blog/blog.module';
import { BlogService } from './blog/blog.service';
import { DatabaseConfig } from './configs/database';
import { config } from './constants/config';
import { UserController } from './users/user.controller';
import { UserModule } from './users/user.module';
import { UserService } from './users/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    BlogModule,
    UserModule,
  ],
  controllers: [AppController, BlogController, UserController],
  providers: [AppService, BlogService, UserService],
})
export class AppModule {}
