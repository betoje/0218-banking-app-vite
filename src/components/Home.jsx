import Card from "./Card";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Card
        txtcolor="secondary"
        header="REACTbank Landing Module"
        title="Welcome to the bank"
        text="You can move around using the navigation bar."
        body={
          <img src="react.svg" className="img-fluid w-50" alt="Responsive image" />
        }
      />
    </>
  );
}
