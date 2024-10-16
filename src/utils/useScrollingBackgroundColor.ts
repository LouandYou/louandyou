import React from "react";
import { useRouter } from "next/dist/client/router";

interface IProps {
  elements: () => HTMLElement[];
  root?: Element | null;
  offset?: number;
}

export default function useScrollingBackgroundColor(props: IProps) {
  const router = useRouter();

  const [elementMap, setElementMap] = React.useState<Map<string, boolean>>(
    new Map()
  );

  const isLandingPage = React.useMemo(() => {
    let isLandingPage = false;
    for (const [sectionId, isVisible] of elementMap.entries()) {
      if (isVisible) {
        const element = document.getElementById(sectionId);
        if (element) {
          isLandingPage = element.getAttribute("is-landing-page") === "true";
          break;
        }
      }
    }
    return isLandingPage;
  }, [elementMap]);

  const checkScrolledToTop = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      setElementMap((value) => {
        if (!value) return value;

        const newMap = new Map(value);
        entries.forEach((entry) => {
          newMap.set(
            entry.target.getAttribute("id") || "",
            entry.isIntersecting
          );
        });
        return newMap;
      });
    },
    []
  );

  React.useEffect(() => {
    const map = new Map();
    const elements = props.elements();
    elements.forEach((element, idx) => {
      const id = element.getAttribute("id");
      map.set(id, idx === 0);
    });
    setElementMap(map);

    const observer = new IntersectionObserver(checkScrolledToTop, {
      root: props.root,
      rootMargin: `-${props.offset || 0}px`,
    });
    Array.from(map.keys()).forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  return isLandingPage;
}
