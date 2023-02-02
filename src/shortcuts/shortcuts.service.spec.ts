import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../prisma.service";
import { ShortcutsService } from "./shortcuts.service";

describe("ShortcutsService", () => {
    let service: ShortcutsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ShortcutsService, PrismaService],
        }).compile();

        service = module.get<ShortcutsService>(ShortcutsService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });

    describe("findOneByHash", () => {
        it("should return valid shortcut for existing object", () => {
            expect(service.findOneByHash("url-1")).toBeDefined();
        });

        it("should return null for non-existing object", () => {
            expect(service.findOneByHash("non-existing")).toBeNull();
        });
    });

    describe("testPrisma", () => {
        it("should return valid shortcut for existing object", async () => {
            expect(await service.testPrisma()).toBeDefined();
        });
    });
});
