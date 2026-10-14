import { ImageResponse } from "next/og";

export const alt = "Bitterroot Valley Well Pump Help: well pump repair help in Hamilton, MT and the Bitterroot Valley";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Field-report look from the design system: ink ground, amber readout, river-slate bar.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111a21",
          color: "#ffffff",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, color: "#d8b26a" }}>
          HAMILTON, MONTANA · BITTERROOT VALLEY
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 86, fontWeight: 800, lineHeight: 1, letterSpacing: -3 }}>Well pump repair</div>
          <div style={{ fontSize: 86, fontWeight: 800, lineHeight: 1, letterSpacing: -3 }}>in Hamilton, MT</div>
          <div style={{ fontSize: 34, marginTop: 24, color: "#c8cfcb" }}>
            Connecting homeowners with established local pump companies
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>Bitterroot Valley Well Pump Help</div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <div style={{ display: "flex", fontSize: 20, color: "#c8cfcb", letterSpacing: 2 }}>WATER WELLS IN THE VALLEY</div>
            <div style={{ display: "flex", fontSize: 72, fontWeight: 700, color: "#f2b33d" }}>25,375</div>
          </div>
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 14, display: "flex" }}>
          <div style={{ width: "100%", background: "#2b5d78", display: "flex" }} />
        </div>
      </div>
    ),
    size,
  );
}
