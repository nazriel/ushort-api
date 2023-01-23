import { Controller, Get, Param } from "@nestjs/common";
import { ShortcutsService } from "../shortcuts.service";

@Controller("shortcuts")
export class ShortcutsController {
    constructor(private readonly shortcutsService: ShortcutsService) {
        // nothing
    }
}
