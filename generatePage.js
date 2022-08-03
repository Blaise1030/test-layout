const fs = require("fs");
const generateFileName = "_app.tsx";

function onEnd(err, onEnd) {
  if (err) console.error(err);
  else {
    console.log("[*] Line generated");
    onEnd();
  }
}

const appStructure = {
  name: "div",
  type: "tag",
  children: [
    {
      name: "p",
      type: "tag",
      children: [
        {
          name: "Hello",
          type: "string",
        },
      ],
    },
    {
      name: "a",
      type: "tag",
      children: [
        {
          name: "What is this",
          type: "string",
        },
      ],
    },
  ],
};

function generateTree(root) {
  const { name, children, type } = root;
  return type === "tag"
    ? `<${name}>
    ${children.reduce((prev, curr) => {
      return `${prev} ${generateTree(curr)}`;
    }, "")}
  </${name}>`
    : name;
}

async function generatePage() {
  fs.appendFile(
    generateFileName,
    ` import type { NextPage } from 'next'
          import Head from 'next/head'
          import Image from 'next/image'
          import styles from '../styles/Home.module.css'
         `,
    (err) =>
      onEnd(err, () =>
        fs.appendFile(
          generateFileName,
          "const Home: NextPage = () => {",
          (err) =>
            onEnd(err, () =>
              fs.appendFile(
                generateFileName,
                `
                  return (
                      ${generateTree(appStructure)}
                  );
              `,
                (err) =>
                  onEnd(err, () =>
                    fs.appendFile(generateFileName, "}", (err) =>
                      onEnd(err, () => console.log("done"))
                    )
                  )
              )
            )
        )
      )
  );
}

generatePage();
