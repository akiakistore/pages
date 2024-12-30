import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Clique para ir:</p>
      <div>
        <Link to="/products/produto-doido">produto doido</Link>
      </div>
      <div>
        <Link to="/products/produto-legal">produto legal</Link>
      </div>
    </div>
  );
}
