import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { ShortcutsController } from "./controllers/shortcuts.controller";
import { ShortcutsResolver } from "./shortcuts.resolver";
import { ShortcutsService } from "./shortcuts.service";

@Module({
    controllers: [ShortcutsController],
    providers: [ShortcutsService, ShortcutsResolver, PrismaService],
})
export class ShortcutsModule {}
