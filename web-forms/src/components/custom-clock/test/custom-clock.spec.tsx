import { newSpecPage } from '@stencil/core/testing';
import { CustomClock } from '../custom-clock';

describe('custom-clock', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CustomClock],
      html: `<custom-clock></custom-clock>`,
    });
    expect(page.root).toEqualHtml(`
      <custom-clock>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </custom-clock>
    `);
  });
});
