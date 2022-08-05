import { Controller } from "@hotwired/stimulus"
import "tom-select"

// Connects to data-controller="tom-select"
export default class extends Controller {
  connect() {
    // console.log("hello from tomselect controller")
    new TomSelect(this.element)
  }
}
