import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ShortcutsModule } from "./shortcuts/shortcuts.module";

@Module({
    imports: [
        ShortcutsModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: "schema.gql",
            debug: true,
            playground: true,
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
