import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { Shortcut } from "../entities/shortcut.entity";
import { ShortcutsService } from "../shortcuts.service";

@Controller("shortcuts")
export class ShortcutsController {
    constructor(private readonly shortcutsService: ShortcutsService) {
        // nothing
    }

    @Get(":hash")
    findOneByHash(@Param("hash") hash: string): Shortcut | null {
        const record = this.shortcutsService.findOneByHash(hash);
        if (!record) {
            throw new NotFoundException("shortcut not found");
        }
        return record;
    }
}
