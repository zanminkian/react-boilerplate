import css from "./app.module.css";

export default function App({ name }: { name: string }) {
  return <div className={css["app"]}>hello {name}</div>;
}
