import { Module } from "@nestjs/common";
import { ShortcutsController } from "./controllers/shortcuts.controller";
import { ShortcutsService } from "./shortcuts.service";

@Module({
    controllers: [ShortcutsController],
    providers: [ShortcutsService],
})
export class ShortcutsModule {}
