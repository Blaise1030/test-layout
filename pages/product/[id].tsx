import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import MinusIcon from "@mui/icons-material/Remove";
import RichText from "../../components/RichText";
import PlusIcon from "@mui/icons-material/Add";
import type { NextPage } from "next";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const SimilarProducts = dynamic(
  () => import("../../components/Product/Product1"),
  { ssr: false }
);

// This gets called on every request
export async function getServerSideProps({ params }: any) {
  const structure = await fetch(
    `https://mzwxudq4dacyiihtsyv3qdnbku0vopsx.lambda-url.ap-southeast-1.on.aws/?about-us=${params?.id}`
  );

  return {
    props: {
      res: {
        aboutUs: [
          {
            gridProps: { xs: 12 },
            blockType: "grid",
            blockProps: {
              children: [
                {
                  gridProps: { xs: 12, md: 5 },
                  blockType: "image",
                  blockProps: {
                    src: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
                    borderRadius: 2,
                  },
                },
                {
                  gridProps: { xs: 12, md: 7 },
                  blockType: "product",
                  blockProps: {},
                },
              ],
            },
          },
          {
            blockType: "rich-text",
            blockProps: {
              textAlign: "justify",
              value:
                "<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href='#'>Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>",
            },
            gridProps: {
              xs: 12,
            },
          },
          {
            blockType: "similar-products",
            blockProps: {
              similarProductsId: "1212",
            },
            gridProps: {
              xs: 12,
            },
          },
        ],
      },
    },
  };
}

function ComponentDecider({ gridProps, blockProps, blockType }: any) {
  return (
    <Grid p={1} item {...gridProps}>
      {{
        "similar-products": <SimilarProducts {...blockProps} />,
        "rich-text": <RichText {...blockProps} />,
        product: <Product {...blockProps} />,
        grid: <InnerGrid {...blockProps} />,
        image: <Image {...blockProps} />,
        header: <Header {...blockProps} />,
      }[blockType as string] || <></>}
    </Grid>
  );
}

const Home: NextPage = ({ res }: any) => {
  const { aboutUs } = res;
  return (
    <Grid
      p={{ xs: 0, md: 1 }}
      columns={12}
      container
      width={{
        fontFamily: "DM Sans",
        margin: "auto",
        xs: "100%",
        lg: 1200,
        md: 1000,
        marginBottom: 20,
      }}
    >
      {(aboutUs || [])?.map((value: any, key: number) => {
        return <ComponentDecider key={key} {...value} />;
      })}
    </Grid>
  );
};

export default Home;

function Product() {
  return (
    <Stack direction="column" height={"100%"} spacing={1} p={2}>
      <Typography variant="h5" fontWeight={1000}>
        Nokia 3310
      </Typography>
      <Rating name="size-large" defaultValue={2} size="large" />
      <Typography variant="h6">RM12</Typography>
      <Stack direction="row" alignItems={"center"} spacing={2}>
        <Typography variant={"body1"}>Quantity</Typography>
        <Paper variant="outlined" sx={{ width: "min-content", p: 0.3 }}>
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <IconButton>
              <PlusIcon />
            </IconButton>
            <Box>10</Box>
            <IconButton>
              <MinusIcon />
            </IconButton>
          </Stack>
        </Paper>
      </Stack>
      <br />
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Button
          startIcon={<AddShoppingCartIcon />}
          variant="contained"
          size="large"
        >
          Add to bag
        </Button>
        <Button variant="outlined" size={"large"}>
          Buy Now
        </Button>
      </Stack>
    </Stack>
  );
}

function Image({ src }: any) {
  return <img src={src} style={{ width: "100%", boxSizing: "border-box" }} />;
}

function InnerGrid({ children }: any) {
  return (
    <Grid container columns={12}>
      {(children || [])?.map((value: any, index: number) => {
        return <ComponentDecider key={index} {...value} />;
      })}
    </Grid>
  );
}

function Header({ title }: { title: string }) {
  return (
    <Typography variant="h6" fontWeight={"bold"}>
      {title}
    </Typography>
  );
}
