import { useSpring } from "@react-spring/core";
import { useInView } from "react-intersection-observer";

export const useEnterExitAnimation = (
  { threshold, springConfig, reverse, defineSpring, ...springProps } = {
    threshold: 0.75,
    springConfig: { mass: 7, tension: 3000, friction: 200 },
    reverse: false,
  }
) => {
  const [ref, inView] = useInView({
    threshold,
  });

  const styles = useSpring({
    config: springConfig,
    reverse: reverse ? !inView : undefined,
    opacity: inView ? 1 : 0,
    ...(defineSpring?.(inView) ?? {}),
    ...springProps,
  });

  return [styles, ref];
};
