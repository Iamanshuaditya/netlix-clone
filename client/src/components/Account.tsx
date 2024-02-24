import { ChevronDown, ChevronRight, CreditCard } from "lucide-react";

function Account() {
  return (
    <div className="text-white relative top-10">
      <section className="  px-96  ">
        <div>
          <div className="space-y-2.5 ">
            <h1 className="text-3xl sm:text-4xl">Account</h1>
            <div className="flex items-center gap-2.5 mb-10">
              <CreditCard />
              <p className="text-sm font-medium text-neutral-500 ">
                Member since February 21, 2024
              </p>
            </div>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            className="shrink-0 h-[1px] w-full bg-neutral-600 my-3"
          ></div>
          <div className="flex flex-col gap-5 text-neutral-100">
            <div className="space-y-5">
              <h2 className="text-lg text-neutral-400 sm:text-xl">
                MEMBERSHIP &amp; BILLING
              </h2>
              <p>anshuadiNametya825301@gmail.com</p>
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 h-[1px] w-full bg-neutral-700"
            ></div>
            <a
              aria-label="Navigate to update account page"
              className="flex items-center justify-between gap-4 hover:underline"
              href="/account/users/clr2sa49n0000l108vzzez9hk"
            >
              Update account
              <ChevronRight />
            </a>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 h-[1px] w-full bg-neutral-700"
            ></div>
            <p>Your plan renews on March 21, 2024.</p>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 h-[1px] w-full bg-neutral-700"
            ></div>
            <button
              className="inline-flex items-center justify-center text-sm font-medium ring-offset-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-800 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 bg-slate-50 text-slate-900 hover:bg-red-600 hover:text-slate-100 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-red-600 dark:hover:text-slate-100 h-10 px-4 py-2 rounded-none"
              type="button"
              aria-label="Cancel membership"
            >
              Cancel Membership
            </button>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 h-[1px] w-full bg-neutral-600"
            ></div>
            <div className="space-y-5">
              <h2 className="text-lg text-neutral-400 sm:text-xl">
                PLAN DETAILS
              </h2>
              <div className="flex items-center gap-2">
                <p>Mobile</p>
                <span className="rounded-sm px-1 text-neutral-100 ring-2 ring-slate-100">
                  480p
                </span>
              </div>
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 h-[1px] w-full bg-neutral-700"
            ></div>
            <a
              aria-label="Navigate to plans page"
              className="flex items-center justify-between gap-4 hover:underline"
              href="/login/plans"
            >
              Change plan
              <ChevronRight />
            </a>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 h-[1px] w-full bg-neutral-600"
            ></div>
            <div className="space-y-2">
              <h2 className="text-lg text-neutral-400 sm:text-xl">PROFILE</h2>
              <div className="w-full" data-orientation="vertical">
                <div
                  data-state="closed"
                  data-orientation="vertical"
                  className="border-b border-neutral-700"
                >
                  <h3
                    data-orientation="vertical"
                    data-state="closed"
                    className="flex"
                  >
                    <button
                      type="button"
                      aria-controls="radix-:r3:"
                      aria-expanded="false"
                      data-state="closed"
                      data-orientation="vertical"
                      id="radix-:r2:"
                      className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
                      data-radix-collection-item=""
                    >
                      <div className="flex items-center gap-4">
                        <img
                          alt="Classic profile icon (blue)"
                          loading="lazy"
                          width="60"
                          height="60"
                          decoding="async"
                          data-nimg="1"
                          className="rounded object-cover text-transparent"
                          src="https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057683/netflx-web/jsnafhixioxnblla2b1n.webp"
                        ></img>
                        <p>ansuaditya</p>
                      </div>
                      <ChevronDown />
                    </button>
                  </h3>
                  <div
                    data-state="closed"
                    id="radix-:r3:"
                    role="region"
                    aria-labelledby="radix-:r2:"
                    data-orientation="vertical"
                    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all px-1"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Account;
