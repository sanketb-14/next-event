import React from "react";
import path from "path";
import fs from "fs/promises";

const index = (props) => {
  const { item } = props;
  console.log(item);

  return (
    <div className="card w-full h-screen text-primary bg-base-200">
      <ul className="card-content">
        {item.map((product) => (
          <li key={product.id}>hello {product.name} </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");

  const jsonData = await fs.readFile(filePath);

  const data = JSON.parse(jsonData);
  console.log(data);
  return {
    props: {
      item: data.items,
    },
    revalidate: 10,
  };
}

export default index;
