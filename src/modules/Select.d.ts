import { ISelect } from "../utils/interfaces/interfaces"

class Select implements ISelect {
  readonly classSelect: Element | null
  readonly selectText: string
  
  constructor(classSelect: Element | null, selectText: string) {
    this.classSelect = classSelect
    this.selectText = selectText

    this.render
  }

  public get selectOptions() {
    return NiceSelect.bind(this.classSelect) 
  }

  public get changeSelectOption() {
    const current = document.querySelector(`.filter__select .current`)
    current.textContent = this.selectText
    return current
  }

  private get render() {
    return this.selectOptions, this.changeSelectOption
  }
}

export default Select