import AreaSlider from "./AreaSlider";
import { arrNum, TRange } from "../utils/types/types";

class CostSlider extends AreaSlider {
  constructor(
    arrStart: arrNum, 
    range: TRange, 
    uiElem: Element, 
    firstFilterBlock: HTMLInputElement, 
    secondFilterBlock: HTMLInputElement
  ) {
    super(arrStart, range, uiElem, firstFilterBlock, secondFilterBlock)
  }
}

export default CostSlider