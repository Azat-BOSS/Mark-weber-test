import Hover from "./Hover"
import { TElement } from "../utils/types/types"
import { THoverData } from "../utils/types/types"

class HoverContent extends Hover {
  readonly contentButtons: NodeListOf<Element>
  readonly container: TElement
  readonly videoOverlay: TElement

  constructor(
    hoverData: Array<THoverData>, 
    contentButtons: NodeListOf<Element>, 
    container: TElement, 
    videoOverlay: TElement) {

    super(hoverData)
    this.contentButtons = contentButtons
    this.container = container
    this.videoOverlay = videoOverlay

    this.render
  }

  set setStyle(btn: HTMLButtonElement) {
    btn.classList.add("content__li_active")
    this.videoOverlay?.classList.add("video__overlay_active")
    this.container?.classList.add("content__info_active")
  }

  set removeStyle(btn: HTMLButtonElement) {
    btn.classList.remove("content__li_active")
    this.videoOverlay?.classList.remove("video__overlay_active")
    this.container?.classList.remove("content__info_active")
  }

  get mouseHover() {
    return this.contentButtons.forEach((btn: any, idx: number) => {
      btn?.addEventListener("mouseover", () => {
        this.hoverData.forEach((el: THoverData) => {
          if(el.id === idx + 1) {
            this.setStyle = btn
            this.container!.innerHTML = `
              <img class="content__info-img" src="${el.img}" alt="${el.title}"/>
              <h4 class="medium-font">${el.title}</h4>
              <p class="medium-font">${el.body}</p>
            `
          }
        })
      })
      btn?.addEventListener("mouseout", () => {
        this.removeStyle = btn
        this.container!.innerHTML = ``
      })
    })
  }

  get render() {
    return this.mouseHover
  }
}

export default HoverContent