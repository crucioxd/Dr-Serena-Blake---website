"use client";

// components/RatesAndInsurance.jsx

export default function RatesAndInsurance() {
  return (
    <section className="bg-[#92B4B1] py-20 text-center ">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-3xl md:text-4xl font-serif mb-8">
          Rates and Insurance
        </p>

        <p className="text-lg font-light mb-4">Indiviual Session Fee – $200</p>
        <p className="text-lg font-light mb-8">Couples Session Fee – $240</p>

        <p className="mb-4 font-light">
          I accept both private pay and insurance. I am in-network with BCBS and
          Aetna.
        </p>

        <p className="font-light">
          For out-of-network plans, I’ve partnered with Mentaya using{" "}
          <a
            href="https://www.mentaya.com/" // Replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-800 transition-colors"
          >
            this tool
          </a>{" "}
          to help you check your eligibility for reimbursement for my services.
        </p>
      </div>
    </section>
  );
}
