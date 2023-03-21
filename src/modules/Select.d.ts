import { ISelect } from "../utils/interfaces/interfaces"

class Select implements ISelect {
  readonly classSelect: string
  readonly selectText: string
  
  constructor(classSelect: string, selectText: string) {
    this.classSelect = classSelect
    this.selectText = selectText

    this.render
  }

  public get selectOptions() {
    return NiceSelect.bind(document.querySelector(this.classSelect)) 
  }

  public get changeSelectOption() {
    const current = document.querySelector(`${this.classSelect} .current`)
    current.textContent = this.selectText
    return current
  }

  private get render() {
    return this.selectOptions, this.changeSelectOption
  }
}

export default Select