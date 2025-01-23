import { Component } from "react";
import { Button } from "react-bootstrap";

interface ClassComponentProps {
  title: string;
  counter?: number;
}

interface ClassComponentState {
  show: boolean;
  value: string;
}

class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  state = {
    show: false,
    value: "",
  };

  render() {
    return (
      <div>
        <h1>Componente a classe!</h1>
        <h3>Valore della prop: {this.props.title.toLocaleLowerCase()}</h3>
        <Button
          variant="success"
          onClick={() => {
            this.setState({
              show: !this.state.show,
            });
          }}
        >
          TOGGLE
        </Button>
        {this.state.show && }
      </div>
    );
  }
}

export default ClassComponent;
