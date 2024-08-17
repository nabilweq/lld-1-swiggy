export class Order {
    id: string;
    userId: string;
    restaurantId: string;

    constructor(id: string, userId: string, restaurantId: string) {
        this.id = id;
        this.userId = userId;
        this.restaurantId = restaurantId;
    }

    getOrderDetails(): string {
        return `Order ID: ${this.id}, User ID: ${this.userId}, Restaurant ID: ${this.restaurantId}`;
    }
}
