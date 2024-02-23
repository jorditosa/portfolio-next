"use client"

import Lottie from "lottie-react";
import developerAnimation from "../../public/loffties/developerAnimation.json";

const LottieHome = () => {
  return (
    <div className="flex justify-center">
        <Lottie animationData={developerAnimation} style={{ width: "320px" }} />
    </div>
  )
}
export default LottieHome