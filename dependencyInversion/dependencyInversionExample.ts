class Store {
    // shopee: Shopee;

    // //for Shopee
    // constructor(user: string) {
    //     this.shopee = new Shopee(user);
    // }

    // purchaseBike(quantity: number) {
    //     this.shopee.makePayment(200*quantity*23000);
    // }

    // purchaseHelmet(quantity: number) {
    //     this.shopee.makePayment(15*quantity*23000);
    // }

    // for Paypal
    paypal: Paypal;
    user: string;
    constructor(user: string) {
        this.paypal = new Paypal();
        this.user = user;
    }

    purchaseBike(quantity: number) {
        this.paypal.makePayment(this.user, 200*quantity);
    }

    purchaseHelmet(quantity: number) {
        this.paypal.makePayment(this.user, 15*quantity);
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

class Paypal {
    makePayment(user: string, amountInDollars: number) {
        console.log(`${user} made payment of $${amountInDollars} with Paypal`)
    }
}

const store = new Store('Thien');

// //For Shopee
// store.purchaseBike(1);
// store.purchaseHelmet(1);

//For Paypal
store.purchaseBike(1);
store.purchaseHelmet(1);