import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './modules/customer/customer.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Sushil:OvRSmgaFpbJFmqk8@cluster0.wil0o.mongodb.net/hackathon-backend', { useNewUrlParser: true }),
    CustomerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
