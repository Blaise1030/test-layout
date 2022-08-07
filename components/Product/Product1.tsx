import { Stack, Typography, Grid, Paper, Skeleton, Box } from "@mui/material";
import { useState, useRef, useEffect } from "react";

export default function SimilarProducts({
  similarProductsId,
}: {
  similarProductsId: string;
}) {
  const [similarProduct, setSimilarProduct] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const canFetch = useRef(true);

  useEffect(() => {
    if (canFetch.current) {
      canFetch.current = false;
      fetchData();
    }
  }, []);

  async function fetchData() {
    setIsLoading(true);
    setTimeout(() => {
      setSimilarProduct([
        {
          id: 0,
          src: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
          title: "Some more phone",
          price: "RM 12",
        },
        {
          id: 1,
          src: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
          title: "Some more phone",
          price: "RM 13",
        },
        {
          id: 2,
          src: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
          title: "Some more phone",
          price: "RM 14",
        },
        {
          id: 3,
          src: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
          title: "Some more phone",
          price: "RM 15",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }

  return (
    <Stack direction="column" spacing={1} sx={{ pr: 1.5 }}>
      <Typography variant="h6" fontWeight={"bold"}>
        Similar Products
      </Typography>
      {isLoading && (
        <Grid container columns={12} spacing={1}>
          {[1, 2, 3, 4].map((key) => {
            return (
              <Grid item xs={12} md={3} key={key}>
                <Stack
                  justifyContent={"start"}
                  alignItems="start"
                  direction="column"
                  spacing={0.6}
                >
                  <Skeleton variant="rectangular" width={"100%"} height={200} />
                  <Stack direction="column" sx={{ width: "100%" }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Stack>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      )}

      <Grid container columns={12} spacing={1}>
        {(similarProduct || []).map(({ id, src, title, price }: any) => {
          return (
            <Grid item xs={12} md={3} key={id}>
              <Paper variant="outlined">
                <Stack direction="column" spacing={0.6}>
                  <img src={src} style={{ width: "100%" }} />
                  <Stack direction="column" padding={1}>
                    <Typography>{title}</Typography>
                    <Typography fontWeight={"bold"}>{price}</Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}
