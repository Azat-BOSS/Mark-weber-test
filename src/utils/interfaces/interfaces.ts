import { THoverData } from "../types/types"
import { TRange, arrNum, TSliderInst } from "../types/types"

export interface IHover {
  readonly hoverData: THoverData
}
export interface IUISlider {
   readonly arrStart: arrNum
   readonly range: TRange
}
export interface IAreaUISlider extends IUISlider {
  readonly uiElem: TSliderInst,
  readonly firstFilterBlock: HTMLInputElement,
  readonly secondFilterBlock: HTMLInputElement
}

export interface ISelect {
  readonly classSelect: string
  readonly selectText: string
}
