import { Box } from "@mui/system";

export default function RichText({
  value,
  textAlign,
}: {
  value: string;
  textAlign: any;
}) {
  return (
    <Box
      dangerouslySetInnerHTML={{ __html: value }}
      textAlign={textAlign || "start"}
      fontFamily={"DM Sans"}
      sx={{ padding: 1 }}
    />
  );
}
