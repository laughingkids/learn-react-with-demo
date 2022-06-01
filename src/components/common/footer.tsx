import React from "react";
import {getCurrentYear} from "../../helpers/common";

export default function Footer() {
  return (
    <footer>
        Copyrights @laughingkids {getCurrentYear()}
    </footer>
  );
}