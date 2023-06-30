import { newSpecPage } from '@stencil/core/testing';
import { ElementSample } from '../element-sample';

describe('element-sample', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ElementSample],
      html: `<element-sample></element-sample>`,
    });
    expect(page.root).toEqualHtml(`
      <element-sample>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </element-sample>
    `);
  });
});
