export class PushNotificationSender {
    sendNotification(userId: string, message: string): void {
        console.log(`Sending notification to ${userId}: ${message}`);
    }
}
