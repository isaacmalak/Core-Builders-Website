import { VisionMobile } from "./vision-mobile";
import { VisionDesktop } from "./vision-desktop";
import { GsapTesting } from "../gsaptesting";

export function Vision() {
  return (
    <>
      <VisionMobile />
      <VisionDesktop />
      {/* <GsapTesting /> */}
    </>
  );
}
