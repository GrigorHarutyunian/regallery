import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "./PayPalModal.css";
import { usePayPalModal } from "../../../contexts/PayPalModalContext";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useState } from "react";
import { CreateOrderData } from "@paypal/paypal-js";
import { OnApproveData } from "@paypal/paypal-js";
import { OnApproveActions } from "@paypal/paypal-js";
import { SelectChangeEvent } from "@mui/material";
import PayPalFormControl from "./PayPalFormControl";
const PayPalModal: React.FC = () => {
  const { isOpenModal, handleCloseModal } = usePayPalModal();
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState<string>(options.currency ?? "USD");

  const onCurrencyChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setCurrency(value);
    dispatch({
      type: "resetOptions" as any,
      value: {
        ...options,
        currency: value,
      },
    });
  };

  const onCreateOrder = (_data: CreateOrderData, actions: { order: any }) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "8.99",
          },
        },
      ],
    });
  };

  const onApproveOrder = async (
    _data: OnApproveData,
    actions: OnApproveActions
  ) => {
    if (!actions.order) {
      console.error("Order object not present.");
      return Promise.reject("Missing order.");
    }

    const details = await actions.order!.capture();
    if (!details.payer || !details.payer.name) {
      alert("Transaction completed, but payer information is missing.");
      return;
    }
    const name = details.payer.name.given_name;
    alert(`Transaction completed by ${name}`);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpenModal}
      onClose={handleCloseModal}
      disableScrollLock
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpenModal}>
        <div onClick={handleCloseModal} className="pay-pal__modal">
          <div onClick={handleCloseModal}>
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
            className="pay-pal__content"
          >
            <div className="pay-pal__checkout">
              {isPending ? (
                <p>LOADING...</p>
              ) : (
                <>
                  <PayPalFormControl
                    onChange={onCurrencyChange}
                    currency={currency}
                  />
                  <PayPalButtons
                    style={{
                      layout: "vertical",
                      color: "gold", // 'gold', 'blue', 'silver', 'white', 'black'
                      shape: "rect", // 'pill' or 'rect'
                      label: "buynow", // 'paypal', 'checkout', 'pay', 'buynow', 'installment'
                      height: 45,
                    }}
                    createOrder={(data, actions) =>
                      onCreateOrder(data, actions)
                    }
                    onApprove={(data, actions) => onApproveOrder(data, actions)}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default PayPalModal;
