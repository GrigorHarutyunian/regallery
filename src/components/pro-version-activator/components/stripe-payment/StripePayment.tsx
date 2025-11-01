import React, {useCallback} from "react";

interface IStripePaymentProps {
    email: string;
    isEmailInvalid: boolean;
    setIsEmailInvalid: (isEmailInvalid: boolean) => void;
    planID: number;
    handleError: (message: string) => void;
}

const stripePriceIds: Record<number, string> = {
    2: 'price_1SNKx52E9JX99Lm5ICsSnnJT',
    3: 'price_1SNKxd2E9JX99Lm5gtEPPRK7',
};

const StripePayment: React.FC<IStripePaymentProps> = ({
    email,
    isEmailInvalid,
    setIsEmailInvalid,
    planID,
    handleError
}: IStripePaymentProps) => {

    const handleStripePayment = useCallback(async () => {
        if (email === "") {
            setIsEmailInvalid(true);
            handleError("Please provide a valid email address.");
            return;
        }
        
        if (isEmailInvalid) {
            handleError("Please provide a valid email address.");
            return;
        }

        if (!stripePriceIds[planID]) {
            handleError(`Invalid plan ID: ${planID}`);
            return;
        }

        try {
            const response = await fetch("https://regallery.team/core/wp-json/reacgcore/v2/stripe/createCheckoutSession", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    planID: planID,
                    email: email,
                }),
            });

            const result = await response.json();

            if (response.ok && result.url) {
                window.location.href = result.url;
            } else {
                handleError(result.errors?.message || result.message || 'Failed to create Stripe checkout session');
            }
        } catch (e) {
            handleError((e as TypeError).message);
        }
    }, [email, isEmailInvalid, setIsEmailInvalid, planID, handleError]);

    return (
        <div className="stripe-payment-wrapper">
            <button
                onClick={handleStripePayment}
                className="stripe-payment-button"
                type="button"
            >
                <svg 
                    className="stripe-logo" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none"
                >
                    <path 
                        d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.274 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.573-2.354 1.573-1.875 0-4.965-.921-6.99-2.109l-.9 5.494C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" 
                        fill="currentColor"
                    />
                </svg>
                Pay with Stripe
            </button>
        </div>
    );
};

export default StripePayment;
