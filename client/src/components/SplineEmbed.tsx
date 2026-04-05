import { useEffect, useRef } from "react";

type SplineEmbedProps = {
  title: string;
  sceneUrl?: string;
  iframeSrc?: string;
  loading?: "lazy" | "eager";
  className?: string;
};

const SPLINE_VIEWER_SCRIPT_ID = "spline-viewer-script";
const SPLINE_VIEWER_SCRIPT_SRC = "https://unpkg.com/@splinetool/viewer@1.10.66/build/spline-viewer.js";

function ensureSplineViewerScript() {
  if (typeof document === "undefined") {
    return;
  }

  if (document.getElementById(SPLINE_VIEWER_SCRIPT_ID)) {
    return;
  }

  const script = document.createElement("script");
  script.id = SPLINE_VIEWER_SCRIPT_ID;
  script.type = "module";
  script.src = SPLINE_VIEWER_SCRIPT_SRC;
  document.head.appendChild(script);
}

export default function SplineEmbed({
  title,
  sceneUrl,
  iframeSrc,
  loading = "lazy",
  className = "",
}: SplineEmbedProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sceneUrl || !containerRef.current) {
      return;
    }

    ensureSplineViewerScript();

    const viewer = document.createElement("spline-viewer");
    viewer.setAttribute("url", sceneUrl);
    viewer.setAttribute("loading-anim-type", "spinner-small-dark");
    viewer.setAttribute("loading", loading);
    viewer.style.width = "100%";
    viewer.style.height = "100%";
    viewer.style.display = "block";
    viewer.style.background = "transparent";

    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(viewer);

    return () => {
      viewer.remove();
    };
  }, [sceneUrl, loading]);

  if (sceneUrl) {
    return <div ref={containerRef} aria-label={title} className={className} />;
  }

  if (!iframeSrc) {
    return null;
  }

  return (
    <iframe
      title={title}
      src={iframeSrc}
      className={className}
      loading={loading}
      allow="autoplay; fullscreen; xr-spatial-tracking"
      allowFullScreen
    />
  );
}
