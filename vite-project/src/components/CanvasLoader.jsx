import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
        <span className="canvas-loader"/>
      <p
        className="canvas-loader"
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress !== 0 ? `${progress.toFixed(2)} %` : 'loading...'}
      </p>
    </Html>
  );
};

export default CanvasLoader;
