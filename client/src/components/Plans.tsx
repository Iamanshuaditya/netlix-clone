import { useRecoilState } from "recoil";
import { selectedPlanState } from "@/store/atoms/subscriptionState";
import StripeCheckout from "@/_auth/Stripe";
import { userEmailState } from "@/store/atoms/email";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { auth } from "../firebase/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

function Plans() {
  const [user] = useAuthState(auth);
  const [selectedPlan, setSelectedPlan] = useRecoilState(selectedPlanState);
  const [userEmail] = useRecoilState(userEmailState);
  const stripePromise = loadStripe(
    "pk_test_51OfhrwG8kvu8uWqC9K8TVIYYBtsQJLAfefBZ3eu0xAhOb1nL2LVGLL2epB7YdBHWK7kxX0804fbnh9G1YlVX1ije00U4VfIM1R"
  );

  const navigate = useNavigate();
  const [sessionId, setSessionId] = useState<string | null>(null);
  useEffect(() => {
    const checkSubscriptionStatus = async () => {
      console.log(user);
      if (!user) return;

      if (!auth.currentUser) {
        console.error("Current user is null");
        return;
      }
      const token = await auth.currentUser.getIdToken();

      console.log(token);
      try {
        const response = await fetch(
          "http://localhost:4242/check-subscription-status",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: token,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          const subscriptionStatus = data.subscriptionStatus;

          if (subscriptionStatus) {
            navigate("/profile");
          } else {
            navigate("/login/plans");
          }
        } else {
          console.error(
            "Failed to check subscription status:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error checking subscription status:", error);
      }
    };

    checkSubscriptionStatus();
  }, [navigate, user]);

  useEffect(() => {
    const createCheckoutSession = async () => {
      try {
        const response = await fetch(
          "http://localhost:4242/create-checkout-session",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              lookup_key: selectedPlan || null,
              user_email: userEmail || "",
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log({ sessiondata: data });
          const sessionId = data.sessionId;
          setSessionId(sessionId);
          redirectToCheckout(sessionId);
        } else {
          console.error(
            "Failed to create checkout session:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error creating checkout session:", error);
      }
    };

    if (selectedPlan && userEmail) {
      createCheckoutSession();
    }
  }, [selectedPlan, userEmail, setSessionId]);

  const redirectToCheckout = async (sessionId: string) => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        console.error("Stripe has not been initialized.");
        return;
      }
      const { error } = await stripe.redirectToCheckout({
        sessionId: sessionId ?? "",
      });
      if (error) {
        console.error("Error redirecting to checkout:", error);
      }
    } catch (error) {
      console.error("Error redirecting to checkout:", error);
    }
  };
  console.log("this is session_id", sessionId);
  return (
    <div className="mx-44 my-12 flex flex-col gap-8 mb-28  2xl:w-[148%] maxWidth:w-[345%] xl:my-0  xl:ml-6 xl:pl-[6em] xl:gap-32">
      <h1 className="text-[#f8fafc] text-4xl  font-bold xl:text-4xl w-full xl:text-[7em] xl:leading-[1em] ">
        Choose the plan that’s right for you
      </h1>
      <div className="flex w-full flex-col gap-4 xl:text-6xl xl:gap-12">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-7 w-7 text-red-600 xl:h-28 xl:w-28"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span className="text-neutral-500 dark:text-neutral-400 ">
            Watch on your phone, tablet, laptop, and TV
          </span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-7 w-7 text-red-600 xl:h-28 xl:w-28"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span className="text-neutral-500 dark:text-neutral-400">
            Unlimited movies and TV shows
          </span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-7 w-7 text-red-600 xl:h-28 xl:w-28"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span className="text-neutral-500 dark:text-neutral-400">
            Change or cancel your plan anytime
          </span>
        </div>
      </div>
      <section>
        <div className="overflow-x-auto">
          <div dir="ltr" className="min-w-[30rem] py-2.5 relative text-white">
            <div className="grid grid-cols-[10em,10em,10em,10em] justify-end gap-5 xl:w-[160%] xl:gap-80">
              <div
                className={`grid aspect-square w-28 cursor-pointer place-items-center rounded bg-red-600 font-medium  xl:rounded-2xl xl:w-96 xl:text-5xl ${
                  selectedPlan === "mobile" ? "opacity-100" : "opacity-70"
                }`}
                onClick={() => setSelectedPlan("mobile")}
              >
                Mobile
              </div>
              <div
                className={`grid aspect-square w-28 cursor-pointer place-items-center rounded xl:rounded-2xl bg-red-600 font-medium  xl:w-96 xl:text-5xl ${
                  selectedPlan === "basic" ? "opacity-100" : "opacity-70"
                }`}
                onClick={() => setSelectedPlan("basic")}
              >
                Basic
              </div>
              <div
                className={`grid aspect-square w-28 cursor-pointer place-items-center rounded xl:rounded-2xl bg-red-600 font-medium  xl:w-96 xl:text-5xl ${
                  selectedPlan === "standard" ? "opacity-100" : "opacity-70"
                }`}
                onClick={() => setSelectedPlan("standard")}
              >
                Standard
              </div>
              <div
                className={`grid aspect-square w-28 cursor-pointer place-items-center rounded xl:rounded-2xl bg-red-600 font-medium  xl:w-96 xl:text-5xl ${
                  selectedPlan === "premium" ? "opacity-100" : "opacity-70"
                }`}
                onClick={() => setSelectedPlan("premium")}
              >
                Premium
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-2 text-sm text-neutral-500 dark:text-neutral-400 xl:text-6xl xl:leading-[1.5em]">
          <p>
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all resolutions. See our
            <a
              target="_blank"
              className="text-blue-400 hover:underline"
              href="/terms-of-use"
            >
              Terms of Use
            </a>{" "}
            for more details.
          </p>
          <p>
            Only people who live with you may use your account. Watch on 4
            different devices at the same time with Premium, 2 with Standard,
            and 1 with Basic and Mobile.
          </p>
        </div>
        <div className="mt-10 grid w-full place-items-center">
          <form
            action="http://localhost:4242/create-checkout-session"
            method="POST"
          >
            <input
              type="hidden"
              name="lookup_key"
              value={selectedPlan || "null"}
            />
            <input type="hidden" name="user_email" value={userEmail || ""} />

            <button
              type="submit"
              className="grid items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:text-white dark:hover:bg-red-700 h-10 px-4 py-2 w-full max-w-sm rounded xl:text-7xl  "
              aria-label="Subscribe to selected plan "
              disabled={!selectedPlan}
            >
              Subscribe
            </button>
            <StripeCheckout />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Plans;
