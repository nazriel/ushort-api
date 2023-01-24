/* istanbul ignore file */

import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: "shortcut " })
export class Shortcut {
    @Field(() => ID)
    hash: string;

    @Field()
    url: string;

    @Field()
    visits: number;

    constructor(partial: Partial<Shortcut>) {
        Object.assign(this, partial);
    }
}
