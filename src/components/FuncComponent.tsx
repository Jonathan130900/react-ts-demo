import { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";

interface FuncComponentProps {
  title: string;
  counter?: number;
}

interface Movie {
  title: string;
  year: number;
  id: number;
}

const FuncComponent = function (props: FuncComponentProps) {
  const [show, setShow] = useState(false);
  const [movieObject, setMovieObject] = useState<null | Movie>(null);

  useEffect(() => {
    console.log("MOUNTING");
    setMovieObject({
      title: "BATMAN",
      year: 1960,
      id: 123123,
    });
    // setMovieObject(null)
  }, []);

  return (
    <div>
      <h2>COMPONENTE A FUNZIONE!</h2>
      <h3>Il valore della propr è: {props.title.toLowerCase()}</h3>
      <h3>Il calore di counter è: {props.counter?.toFixed(2)}</h3>
      <Button
        variant="success"
        onClick={() => {
          setShow(!show);
        }}
      >
        TOGGLE
      </Button>
      {show && <Alert variant="info">SHOW E TRUE</Alert>}
      <div>
        <h4>{movieObject?.title}</h4>
      </div>
    </div>
  );
};

export default FuncComponent;
