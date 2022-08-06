import { Controller } from "@hotwired/stimulus"
import TomSelect from "tom-select"

// Connects to data-controller="tom-select"
export default class extends Controller {
  connect() {
    // console.log("hello from tomselect controller")
    new TomSelect(this.element, {
      plugins: ['remove_button'],
      persist: false,
      create: true,
      maxItems: 1,
    })
  }
}
