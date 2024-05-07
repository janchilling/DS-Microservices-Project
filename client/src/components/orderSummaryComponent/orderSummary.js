import usePayment from "../../hooks/usePayment";
import {useState} from "react";
import LoadingSpinner from "../loadingSpinnerComponent/loadingSpinnerComponent";

export default function OrderSummary() {

    const token = localStorage.getItem("token");
    console.log(token)

    const [product, setProduct] = useState({
        name: "Go FullStack with KnowledgeHut",
        price: 1000,
        productOwner: "KnowledgeHut",
        description:
            "This beginner-friendly Full-Stack Web Development Course is offered online in blended learning mode, and also in an on-demand self-paced format.",
        quantity: 1,
        image: "https://wallpapers.com/images/featured/super-funny-pictures-u2ybmp92cuyfb6fm.jpg",
    });
    const { makePayment } = usePayment();
    const [isLoading, setIsLoading] = useState(false);

    const handlePayment = async () => {
        setIsLoading(true);
        await makePayment(product, token);
        setIsLoading(false);
    };

    return (
        <div>
            <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
                <table className="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                        <td className="whitespace-nowrap py-4 md:w-[384px]">
                            <div className="flex items-center gap-4">
                                <a href="#" className="flex items-center aspect-square w-10 h-10 shrink-0">
                                    <img className="h-auto w-full max-h-full dark:hidden" src="https://wallpapers.com/images/featured/super-funny-pictures-u2ybmp92cuyfb6fm.jpg" alt="imac image" />
                                </a>
                                <a href="#" className="hover:underline">Course Name</a>
                            </div>
                        </td>
                        <td className="p-4 text-base font-normal text-gray-900 dark:text-white">x1</td>
                        <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">USD 50</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="mt-4 space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Payment Breakdown</h4>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <dl className="flex items-center justify-between gap-4">
                            <dt className="text-gray-500 dark:text-gray-400">Course Price</dt>
                            <dd className="text-base font-medium text-gray-900 dark:text-white">USD 50</dd>
                        </dl>
                        <dl className="flex items-center justify-between gap-4">
                            <dt className="text-gray-500 dark:text-gray-400">Discount</dt>
                            <dd className="text-base font-medium text-green-500">-USD 0</dd>
                        </dl>
                        <dl className="flex items-center justify-between gap-4">
                            <dt className="text-gray-500 dark:text-gray-400">Tax</dt>
                            <dd className="text-base font-medium text-gray-900 dark:text-white">USD 0</dd>
                        </dl>
                    </div>
                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                        <dt className="text-lg font-bold text-gray-900 dark:text-white">Total</dt>
                        <dd className="text-lg font-bold text-gray-900 dark:text-white">$7,191.00</dd>
                    </dl>
                </div>
                <div className="flex items-start sm:items-center">
                    <input id="terms-checkbox-2" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label htmlFor="terms-checkbox-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> I agree with the <a href="#" title="" className="text-primary-700 underline hover:no-underline dark:text-primary-500">Terms and Conditions</a> of use of the Website Name </label>
                </div>
                <div className="gap-4 sm:flex sm:items-center">
                    <button type="button" className="w-full rounded-lg  border border-gray-200 bg-black px-5  py-2.5 text-sm font-medium text-white hover:bg-gray-100 hover:text-black focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Return to Courses</button>
                    <button onClick={handlePayment} type="submit" className="w-full rounded-lg border border-gray-200 bg-orange-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-100 hover:text-black focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 relative">
                        {isLoading && <LoadingSpinner />}
                        Buy Course
                    </button>
                </div>
            </div>
        </div>
    );
};
