import {
  AbsoluteFill,
  Composition,
  Easing,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// Colors pulled from ../../tokens.json
const BRAND = "#6e5fd8";
const DARK = "#25292e";
const MUTED = "#9b9a97";
const BG = "#fcfcfc";

export const MyComposition = () => {
  return (
    <Composition
      id="MyComp"
      component={MyComponent}
      durationInFrames={120}
      fps={30}
      width={1280}
      height={720}
    />
  );
};

const Title: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame, fps, config: { damping: 12, mass: 0.6 } });

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: 140,
          fontWeight: 600,
          letterSpacing: -4,
          color: DARK,
          transform: `scale(${interpolate(pop, [0, 1], [0.6, 1])})`,
          opacity: pop,
        }}
      >
        Oda <span style={{ color: BRAND }}>Plays</span>
      </div>
    </AbsoluteFill>
  );
};

const Underline: React.FC = () => {
  const frame = useCurrentFrame();
  const width = interpolate(frame, [0, 20], [0, 420], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          marginTop: 220,
          height: 10,
          width,
          borderRadius: 5,
          background: BRAND,
        }}
      />
    </AbsoluteFill>
  );
};

const Tagline: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [0, 15], [20, 0], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          marginTop: 340,
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: 36,
          color: MUTED,
          opacity,
          transform: `translateY(${y}px)`,
        }}
      >
        press start ▸
      </div>
    </AbsoluteFill>
  );
};

export const MyComponent: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  // Fade the whole scene out over the last 15 frames
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 15, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp" },
  );

  return (
    <AbsoluteFill style={{ background: BG, opacity: fadeOut }}>
      <Title />
      <Sequence from={15}>
        <Underline />
      </Sequence>
      <Sequence from={35}>
        <Tagline />
      </Sequence>
    </AbsoluteFill>
  );
};
