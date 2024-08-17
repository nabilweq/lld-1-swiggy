import { Restaurant } from '../models/Restaurant';
import { User } from '../models/User';
import { Order } from '../models/Order';

export class FoodManager {
    private restaurants: Restaurant[] = [];
    private orders: Order[] = [];
    private users: User[] = [];

    // Add a restaurant
    addRestaurant(restaurant: Restaurant): void {
        this.restaurants.push(restaurant);
        console.log(`Restaurant ${restaurant.name} added successfully.`);
    }

    // Place an order
    placeOrder(order: Order): void {
        this.orders.push(order);
        console.log(`Order ${order.id} placed successfully by User ${order.userId} at Restaurant ${order.restaurantId}.`);
    }

    // Register a user
    registerUser(user: User): void {
        this.users.push(user);
        console.log(`User ${user.name} registered successfully.`);
    }

    // Get a restaurant by ID
    getRestaurantById(restaurantId: string): Restaurant | undefined {
        return this.restaurants.find(restaurant => restaurant.id === restaurantId);
    }

    // Get all orders by a user
    getOrdersByUserId(userId: string): Order[] {
        return this.orders.filter(order => order.userId === userId);
    }

    // List all restaurants
    listAllRestaurants(): Restaurant[] {
        return this.restaurants;
    }
}
