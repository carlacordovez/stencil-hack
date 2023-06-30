import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'password-field',
  styleUrl: 'password-field.css',
  shadow: true,
})
export class PasswordField {
  /**
   * value
   */
  @Prop() value: string;

  /**
   * onChange
   */
  @Event() inputChanging: EventEmitter<string>;

  onChange = (event: Event) => {
    console.log('input changed: ', (event.target as HTMLInputElement).value);
    this.inputChanging.emit((event.target as HTMLInputElement).value);
  };
  render() {
    return <input type="password" value={this.value} onChange={this.onChange} />;
  }
}
