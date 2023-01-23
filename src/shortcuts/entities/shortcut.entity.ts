/* istanbul ignore file */

export class Shortcut {
    hash: string;
    url: string;
    visits: number;

    constructor(partial: Partial<Shortcut>) {
        Object.assign(this, partial);
    }
}
