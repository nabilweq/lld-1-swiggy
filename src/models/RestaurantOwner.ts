export class RestaurantOwner {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    getOwnerDetails(): string {
        return `Owner ID: ${this.id}, Name: ${this.name}`;
    }
}
