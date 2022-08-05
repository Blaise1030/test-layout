import { Grid, Stack, Typography } from "@mui/material";
import RichText from "../components/RichText";
import type { NextPage } from "next";
import { Box } from "@mui/system";

export async function getStaticProps(context: any) {
  console.log(context);
  await fetch(
    "https://mzwxudq4dacyiihtsyv3qdnbku0vopsx.lambda-url.ap-southeast-1.on.aws/?about-us=1"
  );
  await fetch(
    "https://mzwxudq4dacyiihtsyv3qdnbku0vopsx.lambda-url.ap-southeast-1.on.aws/?about-us=2"
  );
  const res = {
    aboutUs: [
      {
        blockType: "header",
        blockProps: {
          variant: "h5",
          textAlign: "center",
        },
        gridProps: {
          xs: 12,
        },
      },
      {
        blockType: "image",
        blockProps: {
          src: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
          borderRadius: 2,
        },
        gridProps: {
          xs: 12,
        },
      },
      {
        blockType: "rich-text",
        blockProps: {
          value: `<h1>HTML Ipsum Presents</h1><p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>`,
        },
        gridProps: {
          xs: 12,
        },
      },
      {
        blockType: "hstack",
        blockProps: {
          responsiveStack: true,
        },
        gridProps: {
          xs: 12,
        },
        children: [
          {
            blockType: "image",
            blockProps: {
              src: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
              borderRadius: 2,
            },
            gridProps: {
              xs: 6,
            },
          },
          {
            blockType: "rich-text",
            blockProps: {
              value: `<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>`,
            },
            gridProps: {
              xs: 6,
            },
          },
        ],
      },
      {
        blockType: "hstack",
        blockProps: {
          responsiveStack: true,
        },
        gridProps: {
          xs: 12,
        },
        children: [
          {
            blockType: "rich-text",
            blockProps: {
              value: `<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>`,
            },
            gridProps: {
              xs: 12,
              md: 6,
            },
          },
          {
            blockType: "image",
            blockProps: {
              src: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
              borderRadius: 2,
            },
            gridProps: {
              xs: 12,
              md: 6,
            },
          },
        ],
      },
    ],
  };

  return {
    props: {
      res,
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
            {...blockProps}
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
