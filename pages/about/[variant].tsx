import { Grid, Stack, Typography } from "@mui/material";
import RichText from "../../components/RichText";
import type { NextPage } from "next";
import { Box } from "@mui/system";

export async function getStaticPaths(context: any) {
  return {
    paths: [{ params: { variant: "1" } }, { params: { variant: "2" } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const structure = await fetch(
    `https://mzwxudq4dacyiihtsyv3qdnbku0vopsx.lambda-url.ap-southeast-1.on.aws/?about-us=${params?.variant}`
  );

  const res = await structure.json();
  const { message } = res;

  return {
    props: {
      res: message,
    },
  };
}

const ComponentChooser = ({
  blockType,
  blockProps,
  gridProps,
  children,
  isResponsive,
}: any) => {
  return (
    <Grid columns={gridProps} item>
      {{
        "rich-text": <RichText {...blockProps} />,
        image: (
          <img
            {...{ ...blockProps, borderRadius: null }}
            width="100%"
            style={{ borderRadius: `${blockProps["borderRadius"] * 3}px` }}
          />
        ),
        header: (
          <Typography {...blockProps} fontWeight="bold">
            About Us
          </Typography>
        ),
        hstack: (
          <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
            {(children || [])?.map((a: any, index: number) => {
              return <ComponentChooser key={index} {...a} />;
            })}
          </Stack>
        ),
      }[blockType as string] || <></>}
    </Grid>
  );
};

const Home: NextPage = ({ res }: any) => {
  const { aboutUs } = res;
  return (
    <Box
      width={{ xs: "100vw", md: 800, lg: 1200 }}
      sx={{ margin: "auto", pt: 5 }}
    >
      <Grid container columns={12} spacing={{ xs: 2, md: 5, lg: 8 }}>
        {(aboutUs || [])?.map((a: any, index: number) => {
          return <ComponentChooser key={index} {...a} />;
        })}
      </Grid>
    </Box>
  );
};

export default Home;
