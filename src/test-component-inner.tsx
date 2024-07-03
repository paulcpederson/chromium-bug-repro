import { Component, Element, h, Host, State } from "@stencil/core";

@Component({
  tag: "test-component-inner",
  shadow: true
})
export class TestComponentInner {
  @Element() el: HTMLTestComponentInnerElement;

  @State() showIt: boolean;

  componentWillLoad() {
    this.toggle();
  }

  private toggle = () => {
    setTimeout(() => {
      this.showIt = !this.showIt;
      this.toggle();
    }, 500);
  }

  render() {
    return (
      <Host>
        {this.showIt ? (
          <div>
            <div style={{ display: "none" }}>
              <slot name="filters" />
            </div>
          </div>
        ) : (
          <div>
            <slot name="filters"></slot>
          </div>
        )}
      </Host>
    );
  }
}
