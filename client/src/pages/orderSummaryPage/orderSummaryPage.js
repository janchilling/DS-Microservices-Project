import OrderSummary from "../../components/orderSummaryComponent/orderSummary";

export default function OrderSummaryPage() {
    return (
        <div>
            <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Order summary</h2>
                        <div className="mt-6 sm:mt-8">
                            <OrderSummary />
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}