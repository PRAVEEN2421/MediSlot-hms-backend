import Razorpay from 'razorpay';

const razorpayInstance = new Razorpay({
    key_id: 'rzp_test_SKsF3eSssXSq5B',
    key_secret: 'W6XG5K054cB87qY29jX8DStY',
});

razorpayInstance.orders.create({
    amount: 10000,
    currency: "INR",
    receipt: "test_123"
}).then(console.log).catch(console.error);
