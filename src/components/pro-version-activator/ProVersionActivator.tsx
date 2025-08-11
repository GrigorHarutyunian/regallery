import React, {useCallback, useState} from "react";
import {useProVersionActivatorContext} from "../../contexts/ProVersionActivatorModalContext";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import PaymentContent from "./components/payment-content/PaymentContent";
import "./proVersionActivator.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ProVersionActivator: React.FC = () => {
    const {isPaymentModalOpen, closePaymentModal, planID} = useProVersionActivatorContext();
    const [email, setEmail] = useState<string>('');
    const [isEmailInvalid, setIsEmailInvalid] = useState<boolean>(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [successMessage, setSuccessMessage] = useState<string | undefined>(undefined);
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

    const onDialogClosed = useCallback(() => {
        setEmail('');
        setIsEmailInvalid(false);
        setStatus('idle');
        setSuccessMessage(undefined);
        setErrorMessage(undefined);
    }, [])

    const onPaymentSuccess = useCallback((successMessage: string) => {
        setStatus('success');
        setSuccessMessage(successMessage);
    }, []);

    const onPaymentError = useCallback((errorMessage: string) => {
        setStatus('error');
        setErrorMessage(errorMessage);
    }, []);

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isPaymentModalOpen}
            onClose={closePaymentModal}
            disableScrollLock
            closeAfterTransition
            slots={{backdrop: Backdrop}}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={isPaymentModalOpen} onExited={onDialogClosed}>
                <div
                    onClick={closePaymentModal}
                    className="pro-version-activator__modal"
                >
                    <div onClick={closePaymentModal}>
                        <CloseIcon
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                verticalAlign: "large",
                                width: "30px",
                                height: "30px",
                                marginBottom: "2px",
                                color: "white",
                                cursor: "pointer",
                            }}
                        />
                    </div>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="pro-version-activator__content"
                    >
                        {status === 'success' &&
                          <div className={'pro-version-activator__result pro-version-activator__result_success'}>
                            <CheckCircleOutlineIcon/>
                            <p>{successMessage}</p>
                          </div>}
                        {status === 'error' &&
                          <div className={'pro-version-activator__result pro-version-activator__result_error'}>
                            <ErrorOutlineIcon/>
                            <p>{errorMessage}</p>
                          </div>}
                        {status === 'idle' && <PaymentContent
                          email={email}
                          setEmail={setEmail}
                          isEmailInvalid={isEmailInvalid}
                          setIsEmailInvalid={setIsEmailInvalid}
                          planID={planID}
                          handleSuccess={onPaymentSuccess}
                          handleError={onPaymentError}
                        />}
                    </div>
                </div>
            </Fade>
        </Modal>
    );
};

export default ProVersionActivator;
