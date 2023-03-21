export type THoverData = {
  id: Number,
  img: String,
  title: String,
  body: String
}
export type TRange = {
  min: noUiSlider.SubRange,
  max: noUiSlider.SubRange
}
export type TcheckInputNumber = {
  elem: HTMLInputElement | HTMLSpanElement,
  min: noUiSlider.SubRange,
  max: noUiSlider.SubRange
}
export type TUIinit = {
  elem: HTMLInputElement | HTMLSpanElement,
  range: TRange,
  arrStart: Array<Number>
} 
export type TElement = Element | null
export type arrNum = Array<Number>
export type TSliderInst = noUiSlider.Instance;