export default function Banner2({ src }: { src: string }) {
  return (
    <img
      src={src}
      style={{
        minHeight: 10,
        width: "100%",
      }}
    />
  );
}
