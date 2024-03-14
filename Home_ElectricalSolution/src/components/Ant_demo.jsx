import { Button } from "antd";
import { Rate } from "antd";
import "./HederScroll.css";
const Ant_demo = () => (
  <div dir="ltr">
    <div className="direction">
      <Button type="primary" className="bg-black">
        Button
      </Button>
      <Rate allowHalf defaultValue={2.5} />
    </div>
  </div>
);

export default Ant_demo;
