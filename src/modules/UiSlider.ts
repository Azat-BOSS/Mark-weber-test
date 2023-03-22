import noUiSlider from "nouislider"
import { IUISlider } from "../utils/interfaces/interfaces"
import { arrNum, TRange } from "../utils/types/types.d"

class UISlider implements IUISlider {
  arrStart: arrNum
  range: TRange

  constructor(arrStart: arrNum, range: TRange) {
    this.arrStart = arrStart
    this.range = range
  }

  set initUiSlider(options: any) {
    noUiSlider.create(options.elem, {
      start: options.arrStart,
      connect: true,
      range: {
        "min": options.range.min,
        "max": options.range.max
      }
    })
  }
  set checkInputNumber(options: any) {
    options.elem.addEventListener("input", (): void => {
      console.log(options.elem.value > options.min)
      if(options.elem.value < options.min) options.elem.value = options.min
      if(options.elem.value > options.max) options.elem.value = options.max
    })
  }
}

export default UISlider