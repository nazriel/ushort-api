import { Injectable } from "@nestjs/common";
import { Shortcut } from "./entities/shortcut.entity";

@Injectable()
export class ShortcutsService {
    private readonly shortcuts: Record<string, Shortcut> = {};

    constructor() {
        for (let i = 0; i < 10; i++) {
            this.shortcuts[`url-${i}`] = new Shortcut({
                hash: `url-${i}`,
                url: `https://google.com/${i}`,
                visits: 0,
            });
        }
    }

    findOneByHash(hash: string): Shortcut | null {
        return this.shortcuts[hash] ?? null;
    }
}
