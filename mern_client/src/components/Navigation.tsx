import Block from "./common/Block";
import Button from "./common/Button";
import Divider from "./common/Divider";
import ShadowBox from "./common/ShadowBox";
import Span from "./common/Span";
import { GoPlus } from "react-icons/go";

function Navigation() {
  return (
    <ShadowBox>
      <Button type="link" url="/">
        <Span size="title">Mern</Span>
      </Button>
      <Divider />
      <Block height="28px" />
      <Button>
        <GoPlus size={20} />
      </Button>
    </ShadowBox>
  );
}

export default Navigation;
