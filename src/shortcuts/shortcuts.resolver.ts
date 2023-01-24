import { NotFoundException } from "@nestjs/common";
import { Shortcut } from "./entities/shortcut.entity";
import { ShortcutsService } from "./shortcuts.service";

export class ShortcutsResolver {
    constructor(private readonly shortcutsService: ShortcutsService) {}

    findOneByHash(hash: string): Shortcut | null {
        return new Shortcut({ hash });
    }
}
