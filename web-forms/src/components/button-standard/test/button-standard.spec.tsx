import { newSpecPage } from '@stencil/core/testing';
import { ButtonStandard } from '../button-standard';

describe('button-standard', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ButtonStandard],
      html: `<button-standard></button-standard>`,
    });
    expect(page.root).toEqualHtml(`
      <button-standard>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </button-standard>
    `);
  });
});
