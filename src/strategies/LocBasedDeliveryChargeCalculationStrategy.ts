import { DeliveryChargeCalculationStrategy } from "./DeliveryChargeCalculationStrategy";

export class LocBasedDeliveryChargeCalculationStrategy implements DeliveryChargeCalculationStrategy {
    calculateCharge(distance: number): number {
        return distance * 10; // Example calculation
    }
}
