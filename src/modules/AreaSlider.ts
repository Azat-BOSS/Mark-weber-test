import UISlider from "./UiSlider"
import { IAreaUISlider } from "../utils/interfaces/interfaces"
import { arrNum, TRange, TSliderInst } from "../utils/types/types"

class AreaSlider extends UISlider implements IAreaUISlider {
  arrStart: arrNum
  range: TRange
  uiElem: TSliderInst

  firstFilterBlock: HTMLInputElement
  secondFilterBlock: HTMLInputElement

  constructor(
    arrStart: arrNum, 
    range: TRange, 
    uiElem: TSliderInst,
    firstFilterBlock: HTMLInputElement,
    secondFilterBlock: HTMLInputElement) {
    super(arrStart, range)

    this.arrStart = arrStart
    this.range = range
    this.uiElem = uiElem
    this.firstFilterBlock = firstFilterBlock
    this.secondFilterBlock = secondFilterBlock

    this.render
  }

  get renderInputNum() {
    const inputMinMax: any = [this.firstFilterBlock, this.secondFilterBlock]
    return this.uiElem.noUiSlider.on("update", (values: TRange | any, handle: any): void => {
      inputMinMax[handle].value = Math.floor(values[handle])
    })
  }

  get render() {
    return super.initUiSlider = {
      elem: this.uiElem,
      arrStart: this.arrStart,
      range: this.range
    },
    super.checkInputNumber = {
      elem: this.firstFilterBlock,
      min: this.range.min,
      max: this.range.max
    },
    super.checkInputNumber = {
      elem: this.secondFilterBlock,
      min: this.range.min,
      max: this.range.max
    },
    this.renderInputNum
  }
}

export default AreaSlider