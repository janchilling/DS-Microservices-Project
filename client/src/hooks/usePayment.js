import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const usePayment = () => {
    const makePayment = async (product) => {
        const stripe = await loadStripe('pk_test_51PDNzJEaSJ1mlAjvQjxA4Zhdhzesxxk6Hkhon3cCcnGbcVenbtWgWExR6kzsfSYZ2aGtZ2obQTCcQFpSdV5gmQd900uF1WkFSr');
        const body = { product };
        const headers = {
            "Content-Type": "application/json",
        };

        try {
            const response = await axios.post(
                "http://localhost:3003/checkout/create-checkout-session",
                body,
                { headers }
            );

            const session = response.data;

            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (result.error) {
                console.log(result.error);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return { makePayment };
};

export default usePayment;
