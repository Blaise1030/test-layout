export default async function handler(req: any, res: any) {
  const structure = await fetch(
    `https://mzwxudq4dacyiihtsyv3qdnbku0vopsx.lambda-url.ap-southeast-1.on.aws/?about-us=${1}`
  );
  res.status(200).json(await structure.json());
}
