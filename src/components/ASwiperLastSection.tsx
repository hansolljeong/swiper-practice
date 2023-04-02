import { WheelEvent } from "react";
import { useSwiper } from "swiper/react";

export default function ASwiperLastSection({ children }: any) {
  const swiper = useSwiper();

  const handleFooterScroll = (event: WheelEvent<HTMLElement>) => {
    if (document) {
      const positionToTop =
        document.getElementById("last")?.getBoundingClientRect().y || 0;
      if (event.deltaY > 0 && positionToTop <= 0) {
        swiper.disable();
      } else if (positionToTop >= 0 && event.deltaY < 0) swiper.enable();
    }
  };
  return (
    <section
      style={{ backgroundColor: "red" }}
      id="last"
      onWheel={handleFooterScroll}
    >
      {children}
    </section>
  );
}
