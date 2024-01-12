import { FacebookIcon, InstagramIcon, TwitchIcon } from "lucide-react";

export default function Footer() {
  return (
    <div className="max-md:px-5 flex flex-col items-center bg-stone-900 px-16 pb-6 pt-10">
      <span className="max-md:max-w-full flex w-full max-w-[1129px] flex-col items-stretch">
        <div className="max-md:max-w-full max-md:pr-5">
          <div className="max-md:flex-col max-md:items-stretch max-md:gap-0 flex gap-5">
            <div className="max-md:w-full max-md:ml-0 flex w-3/12 flex-col items-stretch">
              <span className="max-md:mt-10 flex flex-col items-stretch">
                <div className="whitespace-nowrap text-base font-medium uppercase tracking-normal text-white">
                  Profile
                </div>
                <div className="max-md:mt-10 mt-11 whitespace-nowrap text-base font-light tracking-normal text-white">
                  FAQ’s
                </div>
                <div className="mt-5 whitespace-nowrap text-base font-light tracking-normal text-white">
                  Pricing plans
                </div>
                <div className="mt-5 whitespace-nowrap text-base font-light tracking-normal text-white">
                  Order tracking
                </div>
                <div className="mt-5 text-base font-light tracking-normal text-white">
                  Returns
                </div>
              </span>
            </div>
            <div className="max-md:w-full max-md:ml-0 ml-5 flex w-[33%] flex-col items-stretch">
              <span className="max-md:mt-10 flex flex-col items-stretch">
                <div className="text-base font-medium uppercase tracking-normal text-white">
                  Recent Posts
                </div>
                <div className="max-md:mt-10 mt-11 whitespace-nowrap text-base font-light tracking-normal text-white">
                  Touch of uniqueness
                </div>
                <div className="mt-5 whitespace-nowrap text-base font-light tracking-normal text-white">
                  Offices you won’t forget
                </div>
                <div className="mt-5 text-base font-light tracking-normal text-white">
                  Cicilan
                </div>
              </span>
            </div>
            <div className="max-md:w-full max-md:ml-0 ml-5 flex w-[28%] flex-col items-stretch">
              <span className="max-md:mt-10 flex grow flex-col items-stretch">
                <div className="text-base font-medium uppercase tracking-normal text-white">
                  CUSTOMER
                </div>
                <div className="max-md:mt-10 mt-11 whitespace-nowrap text-base font-light tracking-normal text-white">
                  Help & contact us
                </div>
                <div className="mt-5 text-base font-light tracking-normal text-white">
                  Return
                </div>
                <div className="mt-6 whitespace-nowrap text-base font-light tracking-normal text-white">
                  Online stores
                </div>
                <div className="mt-6 whitespace-nowrap text-base font-light tracking-normal text-white">
                  Terms & cordition
                </div>
              </span>
            </div>
            <div className="max-md:w-full max-md:ml-0 ml-5 flex w-[14%] flex-col items-stretch">
              <span className="max-md:mt-10 flex flex-col items-stretch">
                <div className="text-base font-medium uppercase tracking-normal text-white">
                  Contact
                </div>
                <div className="mt-10 flex items-stretch gap-5">
                  <FacebookIcon />
                  <TwitchIcon />
                  <InstagramIcon />
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="max-md:max-w-full max-md:mt-10 mt-12 h-px shrink-0 bg-white bg-opacity-10" />
        <div className="max-md:max-w-full mt-6 text-sm font-light tracking-normal text-stone-500">
          © 2014 Nizami cinema. All Right Reserved
          <br />
        </div>
      </span>
    </div>
  );
}
