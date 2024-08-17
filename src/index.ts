import { DeliveryPartnerManager } from './managers/DeliveryPartnerManager';
import { LocBasedDeliveryChargeCalculationStrategy } from './strategies/LocBasedDeliveryChargeCalculationStrategy';
import { OrderManager } from './managers/OrderManager';
import { PushNotificationSender } from './models/PushNotificationSender';
import { UserManager } from './managers/UserManager';
import { Restaurant } from './models/Restaurant';
import { Order } from './models/Order';
import { User } from './models/User';
import { RestaurantOwner } from './models/RestaurantOwner';
import { DeliveryMetaData } from './models/DeliveryMetaData';

// Create instances of necessary classes
const userManager = new UserManager();
const orderManager = new OrderManager();
const pushNotificationSender = new PushNotificationSender();
const deliveryStrategy = new LocBasedDeliveryChargeCalculationStrategy(); // Now implements IDeliveryPartnerMatchingStrategy
const deliveryManager = new DeliveryPartnerManager(deliveryStrategy);

// Sample data
const user = new User('1', 'Alice', 'alice@example.com');
const restaurant = new Restaurant('1', 'Food Palace', '123 Street');
const order = new Order('1', user.id, restaurant.id);
const owner = new RestaurantOwner('1', 'Bob');
const deliveryMetaData = new DeliveryMetaData('1', new Date());

// Add user
userManager.addUser(user);

// Create order
orderManager.createOrder(order);

// Assign delivery partner
const deliveryPartner = deliveryManager.assignPartner(order.id);

// Send push notification
pushNotificationSender.sendNotification(user.id, `Your order from ${restaurant.name} is being processed.`);

// Output details
console.log(user.getUserDetails());
console.log(restaurant.getRestaurantDetails());
console.log(order.getOrderDetails());
console.log(owner.getOwnerDetails());
console.log(deliveryMetaData.getDeliveryDetails());
console.log(`Assigned Delivery Partner: ${deliveryPartner}`);