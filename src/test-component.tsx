import { Component, Element, Host, h } from "@stencil/core";
@Component({
  tag: "test-component",
  shadow: true
})
export class TestComponent {
  @Element() el: HTMLTestComponentElement;
  render() {
    return (
      <Host>
        <test-component-inner>
          <div slot="filters">
            <slot name="filters"></slot>
          </div>
        </test-component-inner>
      </Host>
    );
  }
}
