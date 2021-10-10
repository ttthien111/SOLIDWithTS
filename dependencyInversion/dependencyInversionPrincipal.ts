class Store {
    paymentProcessor: ShopeePaymentProcessor | PaypalPaymentProcessor;
    constructor(paymentProcessor: ShopeePaymentProcessor | PaypalPaymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBike(quantity: number) {
        this.paymentProcessor.pay(200 * quantity);
    }

    purchaseHelmet(quantity: number) {
        this.paymentProcessor.pay(15 * quantity);
    }

}

class ShopeePaymentProcessor {
    user: string;
    shopee: Shopee;

    constructor(user: string) {
        this.shopee = new Shopee(user);
        this.user = user;
    }

    pay(amountInVND: number) {
        this.shopee.makePayment(amountInVND * 23000)
    }
}

class Shopee {
    userName: string;

    constructor(user: string) {
        this.userName = user;
    }

    makePayment(amountInVND: number) {
        console.log(`${this.userName} made payment of VND${amountInVND} with Shopee`)
    }
}

class PaypalPaymentProcessor {

    paypal: Paypal;
    user: string;

    constructor(user: string) {
        this.user = user;
        this.paypal = new Paypal();
    }

    pay(amountInDollars: number) {
        this.paypal.makePayment(this.user, amountInDollars)
    }
}

class Paypal {
    makePayment(user: string, amountInDollars: number) {
        console.log(`${user} made payment of $${amountInDollars} with Paypal`)
    }
}

const store = new Store(new ShopeePaymentProcessor('Thien'));

store.purchaseBike(1);
store.purchaseHelmet(1);