import { useState, useEffect } from "react";

function ProductDisplay() {
  return <section></section>;
}

const SuccessDisplay = ({ sessionId }: { sessionId: string }) => {
  return (
    <section>
      <div className="product Box-root text-white">
        <div className="description Box-root">
          <h3>Subscription to starter plan successful!</h3>
        </div>
      </div>
      <form action="http://localhost:4242/create-portal-session" method="POST">
        <input
          type="hidden"
          id="session-id"
          name="session_id"
          value={sessionId}
        />
        <button id="checkout-and-portal-button" type="submit">
          Manage your billing information
        </button>
      </form>
    </section>
  );
};

interface MessageProps {
  message: string;
}

const Message: React.FC<MessageProps> = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function StripeCheckout() {
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setSuccess(true);
      const sessionId = query.get("session_id");
      setSessionId(sessionId);
    }

    if (query.get("canceled")) {
      setSuccess(false);
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  if (!success && message === "") {
    return <ProductDisplay />;
  } else if (success && sessionId) {
    return <SuccessDisplay sessionId={sessionId} />;
  } else {
    return <Message message={message} />;
  }
}
