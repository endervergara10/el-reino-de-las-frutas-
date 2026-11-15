import React from "react";
import {
  AbsoluteFill,
  Composition,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  registerRoot
} from "remotion";

const FruitEpisode = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const apple = spring({
    frame,
    fps,
    config: { damping: 12 }
  });

  const banana = spring({
    frame: frame - 45,
    fps,
    config: { damping: 10 }
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(#87CEEB, #FFE5A0)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        textAlign: "center"
      }}
    >
      <div style={{ fontSize: 65, marginBottom: 25 }}>
        🍃 EL REINO DE LAS FRUTAS 🍃
      </div>

      <div
        style={{
          fontSize: 150,
          transform: `translateY(${interpolate(apple, [0, 1], [200, 0])}px)`
        }}
      >
        🍎
      </div>

      <div
        style={{
          fontSize: 120,
          transform: `translateY(${interpolate(banana, [0, 1], [200, 0])}px)`
        }}
      >
        🍌
      </div>

      <div style={{ fontSize: 38, fontWeight: "bold", color: "#713B18" }}>
        ¡Una aventura está por comenzar!
      </div>
    </AbsoluteFill>
  );
};

const Root = () => (
  <Composition
    id="ReinoDeLasFrutas"
    component={FruitEpisode}
    durationInFrames={450}
    fps={30}
    width={1080}
    height={1920}
  />
);

registerRoot(Root);
