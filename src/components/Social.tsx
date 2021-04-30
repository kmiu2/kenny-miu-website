import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image';

export default function Social(props: any) {
  const { filter } = props;

  return (
    <ButtonToolbar style={{ filter: 'grayscale(25%)' }}>
      <Button variant="outline-link" href="https://www.github.com/kmiu2/" target={"_blank"}>
        <Image
          src="/images/github.svg" 
          width="30"
          height="30"
          style={{
            filter: filter ?? "brightness(0) invert(1)",
          }}
        />
      </Button>
      <Button variant="outline-link" href="https://www.linkedin.com/in/kennymiu/" target={"_blank"}>
      <Image
          src="/images/linkedin.svg" 
          width="30"
          height="30"
          style={{
            filter: filter ?? "brightness(0) invert(1)",
          }}
        />
      </Button>
    </ButtonToolbar>
  )
}
