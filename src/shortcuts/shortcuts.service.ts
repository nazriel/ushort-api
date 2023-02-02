import { Injectable } from "@nestjs/common";
import { Shortcut } from "./entities/shortcut.entity";
import { PrismaService } from "../prisma.service";

@Injectable()
export class ShortcutsService {
    private readonly shortcuts: Record<string, Shortcut> = {};

    constructor(private readonly prisma: PrismaService) {
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

    async testPrisma(): Promise<Shortcut> {
        await this.prisma.shortcuts.create({
            data: {
                hash: "url-0",
                url: "https://google.com/0",
                visits: 0,
            },
        });

        return this.prisma.shortcuts.findUnique({
            where: {
                hash: "url-0",
            },
        });
    }
}
