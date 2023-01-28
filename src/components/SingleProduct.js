import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data as items } from "../data";
export default function SingleProduct() {
  const { id } = useParams();
  const [text, setText] = useState("");

  useEffect(() => {
    const getDataById = (id) => {
      const item = items.find((item, index) => index == id);
      setText(item);
    };
    getDataById(id);
  }, [id]);

  return <h1>SingleProduct {text} </h1>;
}
