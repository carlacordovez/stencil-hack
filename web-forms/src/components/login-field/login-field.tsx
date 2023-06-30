import { Component, Host, State, Watch, h } from '@stencil/core';
import { TextFieldCustomEvent } from '../../components';

@Component({
  tag: 'login-field',
  styleUrl: 'login-field.css',
  shadow: true,
})
export class LoginField {
  @State() username: string;
  @State() password: string;

  @State() artist: string;
  @State() song: string;
  fieldChange = (field: string) => (val: TextFieldCustomEvent<string>) => {
    this[field] = val.detail;
  };

  async componentWillLoad() {
    const ret = await fetch('https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt');
    const json: { artist: string; song: string } = await ret.json();
    const { artist, song } = json;
    this.artist = artist;
    this.song = song;
    console.log('json', json);
  }

  @Watch('username')
  watchPropHandler(newValue: string, oldValue: string) {
    console.log('The old value of activated is: ', oldValue);
    console.log('The new value of activated is: ', newValue);
  }

  handleLogin = () => {
    console.log('login', this.username);
    console.log('password', this.password);
  };
  render() {
    return (
      <Host>
        <span>
          Song of the day is {this.song}, by {this.artist}
        </span>
        <br />
        <span>user name: </span>
        <text-field onInputChanging={this.fieldChange('username')} />
        <span>password: </span>
        <password-field onInputChanging={this.fieldChange('password')} />
        <button-standard text="Login" onClick={this.handleLogin} />
      </Host>
    );
  }
}
