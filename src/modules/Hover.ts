import { IHover } from "../utils/interfaces/interfaces"

class Hover implements IHover {
  readonly hoverData: any
  constructor(hoverData: any) {
    this.hoverData = hoverData
  }
}

export default Hover