import { NotFoundException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { ShortcutsService } from "../shortcuts.service";
import { ShortcutsController } from "./shortcuts.controller";

describe("ShortcutsController", () => {
    let controller: ShortcutsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ShortcutsController],
            providers: [ShortcutsService],
        }).compile();

        controller = module.get<ShortcutsController>(ShortcutsController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });

    it("should return a shortcut data for valid hash", () => {
        expect(controller.findOneByHash("url-0")).toBeDefined();
        expect(controller.findOneByHash("url-0")).toHaveProperty("url");
        expect(controller.findOneByHash("url-0")).toHaveProperty("hash");
    });

    it("should throw NotFoundException for invalid hash", () => {
        expect(() => controller.findOneByHash("non-existing")).toThrowError(
            NotFoundException,
        );
    });
});
