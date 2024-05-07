const stripe = require('stripe')('sk_test_51PDNzJEaSJ1mlAjv1zaGF4uGLyEflJ9EgCGtk1n3y0OAuCtl1ghc5i8V7hlld5k0nCUc74eTAYCLneLZQpuTyi6800uzPy4mvt');

const createCheckoutSession = async (req, res) => {
    const { product } = req.body;
    console.log(product)

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: product.name,
                            images: [product.image],
                        },
                        unit_amount: product.price * 100,
                    },
                    quantity: product.quantity,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:3000/',
            cancel_url: 'http://localhost:3000/',
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'Failed to create checkout session' });
    }
};

module.exports = {
    createCheckoutSession,
};
