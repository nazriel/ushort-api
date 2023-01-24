import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import { AppModule } from "./../src/app.module";
import * as request from "supertest";

describe("Shortcuts", () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it("should be initialized", () => {
        expect(app).toBeDefined();
    });

    describe("REST query to findOneByHash", () => {
        it("should provide shortcut when it exists", () => {
            return request(app.getHttpServer())
                .get("/shortcuts/url-1")
                .expect(200);
        });

        it("should return 404 when shortcut does not exist", () => {
            return request(app.getHttpServer())
                .get("/shortcuts/non-existing")
                .expect(404);
        });
    });
});
