import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'element-sample',
  styleUrl: 'element-sample.css',
  shadow: true,
})
export class ElementSample {
  @Prop() open = false;
  render() {
    return (
      <Host
        aria-hidden={this.open ? 'false' : 'true'}
        class={{
          'todo-list': true,
          'is-open': this.open,
        }}
      >
        <span>element sample </span>
      </Host>
    );
  }
}
