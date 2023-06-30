import { newSpecPage } from '@stencil/core/testing';
import { PasswordField } from '../password-field';

describe('password-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PasswordField],
      html: `<password-field></password-field>`,
    });
    expect(page.root).toEqualHtml(`
      <password-field>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </password-field>
    `);
  });
});
