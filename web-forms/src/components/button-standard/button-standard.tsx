import { Component, Event, h, Prop } from '@stencil/core';

@Component({
  tag: 'button-standard',
  styleUrl: 'button-standard.css',
  shadow: true,
})
export class ButtonStandard {
  /**
   * value
   */
  @Prop() text: string;
  /**
   * click
   */
  @Event() click: (ev: Event) => void;

  render() {
    return (
      <button class={'btn primary'} onClick={this.click}>
        {this.text}
      </button>
    );
  }
}
