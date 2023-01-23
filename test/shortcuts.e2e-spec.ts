import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import { ShortcutsModule } from "./../src/shortcuts/shortcuts.module";

describe("Shortcuts", () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [ShortcutsModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it("should be initialized", () => {
        expect(app).toBeDefined();
    });
});
