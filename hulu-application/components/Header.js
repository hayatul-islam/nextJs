import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div>
      <h2>This is header</h2>
      <Image
        height="100"
        weight="200"
        src="https://image.shutterstock.com/image-vector/photo-graphic-editor-on-computer-600w-1432421069.jpg"
      />
    </div>
  );
}
