export default function Banner1({ src }: { src: string }) {
  return (
    <img
      src={src}
      style={{
        width: "100%",
        borderRadius: "10px",
        minHeight: 10,
      }}
    />
  );
}
