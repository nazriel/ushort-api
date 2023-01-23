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
});
