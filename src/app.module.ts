import { CommonModule } from "./common/common.module"
import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"

@Module({
  imports: [CommonModule],
  controllers: [AppController],
})
export class AppModule {}
