import Card from "./Card";

export default function Home() {
  return (
    <>
      <Card
        txtcolor="secondary"
        header1="REACTbank Landing Module"
        headerValue1=""
        title="Welcome to the REACTbank"
        text="You can move around using the navigation bar."
        body={
          <img src="react.svg" className="img-fluid w-50" alt="Responsive image" />
        }
      />
    </>
  );
}
