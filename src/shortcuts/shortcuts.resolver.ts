import { NotFoundException } from "@nestjs/common";
import { Resolver, Query, Args } from "@nestjs/graphql";
import { Shortcut } from "./entities/shortcut.entity";
import { ShortcutsService } from "./shortcuts.service";

@Resolver(() => Shortcut)
export class ShortcutsResolver {
    constructor(private readonly shortcutsService: ShortcutsService) {}

    @Query(() => Shortcut, { name: "shortcut" })
    findOneByHash(@Args("hash") hash: string): Shortcut | null {
        const record = this.shortcutsService.findOneByHash(hash);
        if (!record) {
            throw new NotFoundException("shortcut not found");
        }
        return record;
    }
}
