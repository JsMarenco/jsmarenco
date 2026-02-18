import {
  type ComponentPropsWithoutRef,
  createElement,
  type ElementType,
  forwardRef,
  type ReactElement,
} from "react";

type MotionExtraProps = {
  animate?: unknown;
  initial?: unknown;
  transition?: unknown;
  viewport?: unknown;
  whileInView?: unknown;
};

type MotionComponent<T extends ElementType> = (
  props: ComponentPropsWithoutRef<T> & MotionExtraProps,
) => ReactElement | null;

const buildMotionComponent = <T extends ElementType>(tag: T) => {
  const MotionTag = forwardRef<
    unknown,
    ComponentPropsWithoutRef<T> & MotionExtraProps
  >((props, ref) => {
    const sanitizedProps = { ...props } as Record<string, unknown>;
    delete sanitizedProps.animate;
    delete sanitizedProps.initial;
    delete sanitizedProps.transition;
    delete sanitizedProps.viewport;
    delete sanitizedProps.whileInView;
    return createElement(tag, { ...sanitizedProps, ref });
  });
  MotionTag.displayName = `motion.${String(tag)}`;
  return MotionTag as MotionComponent<T>;
};

const cache = new Map<string, MotionComponent<ElementType>>();

const motion = new Proxy({} as Record<string, MotionComponent<ElementType>>, {
  get: (_, property) => {
    const tag = String(property);
    if (!cache.has(tag)) {
      cache.set(tag, buildMotionComponent(tag as ElementType));
    }
    return cache.get(tag);
  },
});

export { motion };
