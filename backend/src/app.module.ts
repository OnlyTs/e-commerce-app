import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListingsModule } from './routes/listings/listings.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomConfigModule } from './config.module';

@Module({
  imports: [
    ListingsModule,
    CustomConfigModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
