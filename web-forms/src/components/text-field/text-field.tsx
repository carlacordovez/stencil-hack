import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'text-field',
  styleUrl: 'text-field.css',
  shadow: true,
})
export class TextField {
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
    return <input value={this.value} onChange={this.onChange} />;
  }
}
