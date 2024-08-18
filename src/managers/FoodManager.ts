import { Restaurant } from '../models/Restaurant';
import { User } from '../models/User';
import { Order } from '../models/Order';

export class FoodManager {
    private restaurants: Restaurant[] = [];
    private orders: Order[] = [];
    private users: User[] = [];

    addRestaurant(restaurant: Restaurant): void {
        this.restaurants.push(restaurant);
        console.log(`Restaurant ${restaurant.name} added successfully.`);
    }

    placeOrder(order: Order): void {
        this.orders.push(order);
        console.log(`Order ${order.id} placed successfully by User ${order.userId} at Restaurant ${order.restaurantId}.`);
    }

    registerUser(user: User): void {
        this.users.push(user);
        console.log(`User ${user.name} registered successfully.`);
    }

    getRestaurantById(restaurantId: string): Restaurant | undefined {
        return this.restaurants.find(restaurant => restaurant.id === restaurantId);
    }

    getOrdersByUserId(userId: string): Order[] {
        return this.orders.filter(order => order.userId === userId);
    }

    listAllRestaurants(): Restaurant[] {
        return this.restaurants;
    }
}
