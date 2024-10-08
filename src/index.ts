import { DeliveryPartnerManager } from './managers/DeliveryPartnerManager';
import { LocBasedDeliveryChargeCalculationStrategy } from './strategies/LocBasedDeliveryChargeCalculationStrategy';
import { OrderManager } from './managers/OrderManager';
import { PushNotificationSender } from './models/PushNotificationSender';
import { UserManager } from './managers/UserManager';
import { Restaurant } from './models/Restaurant';
import { Order } from './models/Order';
import { User } from './models/User';
import { DeliveryMetaData } from './models/DeliveryMetaData';
import { FoodManager } from './managers/FoodManager';

const userManager = new UserManager();
const orderManager = new OrderManager();
const pushNotificationSender = new PushNotificationSender();
const deliveryStrategy = new LocBasedDeliveryChargeCalculationStrategy();
const deliveryManager = new DeliveryPartnerManager(deliveryStrategy);
const foodManager = new FoodManager(orderManager, userManager, deliveryManager);

const user = new User('1', 'Alice', 'alice@example.com');
const restaurant = new Restaurant('1', 'Food Palace', '123 Street');
const order = new Order('1', user.id, restaurant.id);
const deliveryMetaData = new DeliveryMetaData('1', new Date());

userManager.addUser(user);
foodManager.registerUser(user);

orderManager.createOrder(order);
foodManager.placeOrder(order);

foodManager.addRestaurant(restaurant);

const distance = 5;
const deliveryCharge = deliveryStrategy.calculateCharge(distance);
console.log(`Delivery charge for ${distance} km: ${deliveryCharge}`);

const deliveryPartner = deliveryManager.assignPartner(order.id);

pushNotificationSender.sendNotification(user.id, `Your order from ${restaurant.name} is being processed. Delivery charge: ${deliveryCharge}`);

console.log(user.getUserDetails());
console.log(restaurant.getRestaurantDetails());
console.log(order.getOrderDetails());
console.log(deliveryMetaData.getDeliveryDetails());
console.log(`Assigned Delivery Partner: ${deliveryPartner}`);

console.log('Tracking All Orders:');
console.log(foodManager.trackAllOrders());
