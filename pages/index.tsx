import type { NextPage } from "next";
import { AppBar, Grid } from "@mui/material";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import AppBar1 from "./components/Appbar/Appbar1";
import AppBar2 from "./components/Appbar/Appbar2";

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
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  await fetch("https://reqres.in/api/products/3");
  return {
    props: {
      footerProps: {
        component: "Footer1",
        footerProps: {
          merchantName: "Merchant Name1",
        },
      },
      appBarProps: {
        component: "AppBar1",
        props: {
          merchantName: "Merchant Name",
        },
      },
      sectionData: [
        {
          id: 1,
          component: "Banner1",
          componentProps: {
            src: "https://upload.wikimedia.org/wikipedia/commons/6/66/Thalassodromeus_in_Japan.jpg",
          },
          gridProps: {
            xs: 12,
            md: 12,
            p: 2,
          },
        },
        {
          id: 0,
          component: "Email1",
          gridProps: {
            xs: 12,
            md: 12,
            p: 2,
          },
        },
      ],
    },
  };
}

const Home: NextPage = ({ sectionData, appBarProps, footerProps }: any) => {
  return (
    <Grid container columns={12}>
      {{
        AppBar1: <AppBar1 {...appBarProps?.props} />,
        AppBar2: <AppBar2 {...appBarProps?.props} />,
      }[appBarProps?.component as string] || <></>}
      {(sectionData || []).map(
        ({ gridProps, id, component, componentProps }: any) => {
          return (
            <Grid item {...gridProps} key={id}>
              <Suspense fallback={`Loading...`}>
                {{
                  Email1: <Email1 />,
                  Email2: <Email2 />,
                  Email3: <Email3 />,
                  Banner1: <Banner1 {...componentProps} />,
                  Banner2: <Banner2 {...componentProps} />,
                }[component as string] || <></>}
              </Suspense>
            </Grid>
          );
        }
      )}
    </Grid>
  );
};

export default Home;
