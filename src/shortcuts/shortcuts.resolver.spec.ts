import { NotFoundException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { Shortcut } from "./entities/shortcut.entity";
import { ShortcutsService } from "./shortcuts.service";
import { ShortcutsResolver } from "./shortcuts.resolver";
import { PrismaService } from "..//prisma.service";

describe("ShortcutsResolver", () => {
    let resolver: ShortcutsResolver;
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ShortcutsResolver, ShortcutsService, PrismaService],
        }).compile();

        resolver = module.get<ShortcutsResolver>(ShortcutsResolver);
    });

    it("should be defined", () => {
        expect(resolver).toBeDefined();
    });

    describe("findOneByHash", () => {
        it("should return a shortcut data for valid hash", () => {
            expect(resolver.findOneByHash("url-0")).toBeDefined();
            expect(resolver.findOneByHash("url-0")).toBeInstanceOf(Shortcut);
            expect(resolver.findOneByHash("url-0")).toHaveProperty("url");
            expect(resolver.findOneByHash("url-0")).toHaveProperty("hash");
        });

        it("should throw NotFoundException for invalid hash", () => {
            expect(() => resolver.findOneByHash("non-existing")).toThrowError(
                NotFoundException,
            );
        });
    });
});
