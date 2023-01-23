import { Module } from "@nestjs/common";
import { ShortcutsModule } from "./shortcuts/shortcuts.module";

@Module({
    imports: [ShortcutsModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
