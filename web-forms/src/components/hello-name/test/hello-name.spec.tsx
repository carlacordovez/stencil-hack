import { newSpecPage } from '@stencil/core/testing';
import { HelloName } from '../hello-name';

describe('hello-name', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HelloName],
      html: `<hello-name></hello-name>`,
    });
    expect(page.root).toEqualHtml(`
      <hello-name>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hello-name>
    `);
  });
});
