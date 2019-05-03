import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import Product from "../components/product";
const urlImageProduct = "https://ecs7.tokopedia.net/img/cache/700/product-1/2018/5/13/724037/724037_afb9ec00-3306-41c6-b994-250e4d739f6f_1000_997.jpg";
const titleProduct = "Kaos Tshirt Baju Combed 30S Distro ";
const urlProduct = "https://www.tokopedia.com/conjersey/kaos-tshirt-baju-combed-30s-distro-recharge-your-soul-islami-sholat?trkid=f=Ca0000L000P0W0S0Sh,Co0Po0Fr0Cb0_src=search_page=1_ob=23_q=baju_po=36_catid=1808&lt=/searchproduct%20-%20p8%20-%20product";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Product", module).add("primary", () => (
  <Product urlImage={urlImageProduct} title={titleProduct} url={urlProduct} />
));
