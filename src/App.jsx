import {
  Button,
  Card,
  Color,
  Column,
  GlobalStyle,
  Icon,
  Text,
} from "solid-ui-shasta";
import { styled } from "solid-styled-components";

const MyButton = styled(Button)`
  border: 1px solid ${Color.blue2};
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Card title="Button" gap="1rem" size="md">
        <Text>Hello world</Text>
        <Column gap="1rem">
          <Button text="Button" onClick={() => {}} />
          <Button text="Button" onClick={() => {}} disabled />
          <Button
            text="Circle"
            circle
            width="80px"
            height="80px"
            key="circle1"
          />
          <MyButton onClick={() => {}}>
            <Icon icon="iconoir-log-in" color={Color.blue2} />
            <Text color={Color.blue2}>Log In</Text>
          </MyButton>
        </Column>
      </Card>
    </>
  );
}

export default App;
