import { userEmailState } from "@/store/atoms/email";
import axios from "axios";

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
const backendBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL;
interface AccountDetailsProps {
  onPlanChange: (newplan: string) => void;
}
function AccountDetails({ onPlanChange }: AccountDetailsProps) {
  const email = useRecoilValue(userEmailState);
  const [plan, setPlan] = useState("");
  console.log(plan);

  useEffect(() => {
    axios
      .get(`${backendBaseUrl}/customer/subscriptions?email=${email}`)
      .then((response) => {
        const subscriptions = response.data.subscriptions;
        if (subscriptions.length > 0) {
          const productName = subscriptions[0].subscriptions[0].productName;
          console.log("First subscription product name:", productName);
          setPlan(productName);
          onPlanChange(productName);
        } else {
          console.log(subscriptions);
        }
      })
      .catch((error) => {
        console.error("Error fetching subscriptions:", error);
      });
  }, [email, onPlanChange]);

  return <></>;
}

export default AccountDetails;
