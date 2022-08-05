import { Box } from "@mui/system";

export default function RichText({ value }: { value: string }) {
  return <Box dangerouslySetInnerHTML={{ __html: value }} />;
}
