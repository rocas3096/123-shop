import React, { useContext, useEffect } from "react";
import "./WelcomeModal.css";
import { DrawersContext } from "../context/drawersContext";
import Exit from "./shared/Exit";
import Loading from "./shared/Loading";
function WelcomeModal({ business_name }) {
  const { welcomeModal, setWelcomeModal, toggleBackdrop } =
    useContext(DrawersContext);

  return (
    <div className={`WelcomeModal ${welcomeModal && "active"}`}>
      <div className="WelcomeModal-header">
        <div
          onClick={() => setWelcomeModal(false)}
          className="WelcomeModal-header-exit"
        >
          <Exit width={18} height={18} stroke="black" />
        </div>
      </div>
      <div className="WelcomeModal-content">
        <div className="WelcomeModal-content-title">
          Welcome, {business_name ? business_name : "Unknown Friend"}! Let us
          formerly meet
        </div>
        <div className="scrollable-content">
          <p>
            We are 123Shop, vendors can establish their virtual shops within
            minutes. Plus, we offer a unique perk - shoppers on our platform can
            discover and support businesses they know by seeing them listed.
            Experience the convenience of buying and selling under one virtual
            roof.
          </p>
          <p>
            Seamlessly manage multiple businesses under one account, allowing
            you to showcase and sell an array of products effortlessly. Whether
            you're a visionary entrepreneur or an established brand, our
            user-friendly interface empowers you to add and operate multiple
            companies with ease. Maximize your reach, streamline management, and
            amplify your potential for success. The future of selling starts
            here, and it's all within your grasp. Join us in revolutionizing how
            you manage and scale your businesses.
          </p>
          <p>
            A 123 reminder to set your prices strategically. Properly priced
            products not only attract customers but also maximize your
            profitability. Don't underestimate the power of finding that sweet
            spot where value meets affordability.
          </p>
          <p>
            You've successfully completed the first step. Now, it's time to set
            up your menu. Once you've added all of the items, go ahead and click
            the "Start Selling" button to begin your sales journey!
          </p>
        </div>

        <button
          onClick={() => setWelcomeModal(false)}
          className="w-[200px] relative py-[10px] m-auto block mt-[60px] text-white bg-secondary"
        >
          SETUP MENU 👍
        </button>
      </div>
    </div>
  );
}

export default WelcomeModal;
