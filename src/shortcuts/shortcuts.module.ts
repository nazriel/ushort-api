import { Module } from "@nestjs/common";
import { ShortcutsController } from "./controllers/shortcuts.controller";
import { ShortcutsResolver } from "./shortcuts.resolver";
import { ShortcutsService } from "./shortcuts.service";

@Module({
    controllers: [ShortcutsController],
    providers: [ShortcutsService, ShortcutsResolver],
})
export class ShortcutsModule {}
