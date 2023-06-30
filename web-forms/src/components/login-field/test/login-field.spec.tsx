import { newSpecPage } from '@stencil/core/testing';
import { LoginField } from '../login-field';

describe('login-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LoginField],
      html: `<login-field></login-field>`,
    });
    expect(page.root).toEqualHtml(`
      <login-field>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </login-field>
    `);
  });
});
