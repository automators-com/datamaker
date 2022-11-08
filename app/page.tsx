"use client";
import Image from "next/image";
import DropDown from "../components/dropdown";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <button className="btn btn-secondary h-10 w-20">Hello</button>
    </div>
  );
}
