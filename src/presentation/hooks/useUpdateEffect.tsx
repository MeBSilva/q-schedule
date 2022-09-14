import React from "react";

function useUpdateEffect(
  effect: React.EffectCallback,
  dependencies?: React.DependencyList
) {
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    effect();
  }, dependencies);
}

export default useUpdateEffect;
