import type { NextPage } from "next";
import { AppBar, Grid, Stack, Typography } from "@mui/material";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import AppBar1 from "./components/Appbar/Appbar1";
import AppBar2 from "./components/Appbar/Appbar2";
import RichText from "./components/RichText";
import { Box } from "@mui/system";

const Banner1 = dynamic(() => import("./components/Banner/Banner1"), {
  suspense: true,
});
const Banner2 = dynamic(() => import("./components/Banner/Banner2"), {
  suspense: true,
});
const Email1 = dynamic(() => import("./components/Email/Email1"), {
  suspense: true,
});
const Email2 = dynamic(() => import("./components/Email/Email2"), {
  suspense: true,
});
const Email3 = dynamic(() => import("./components/Email/Email3"), {
  suspense: true,
});
// createServer({
//   routes() {
//     this.get("/api/movies", () => ({
//       movies: [
//         { id: 1, name: "Inception", year: 2010 },
//         { id: 2, name: "Interstellar", year: 2014 },
//         { id: 3, name: "Dunkirk", year: 2017 },
//       ],
//     }));
//   },
// });

export async function getStaticProps() {
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
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

// },{
// "blockType": "header",
// blockProps: {
//   src: ‘imageLink’,
//   textAlign: ‘String’,
//   variant: ‘String’,
//   fontWeight: ’String’,
// },
// gridProps: {
//   xs?: number
//   md?: number
//   lg?: number
//   xl?: number
// }
// }

{
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
  ];
}
