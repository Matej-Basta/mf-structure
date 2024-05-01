"use client";
import styles from "./header.module.css";
import dynamic from "next/dynamic";
import SafeComponent from "./SafeComponent"

// @ts-ignore
const Cart = dynamic(() => import('cart/Cart'), { ssr: false });

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Header</h1>
      <SafeComponent>
        <Cart />
      </SafeComponent>
    </header>
  );
}