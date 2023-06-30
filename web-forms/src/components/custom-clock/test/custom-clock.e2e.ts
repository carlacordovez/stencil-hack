import { newE2EPage } from '@stencil/core/testing';

describe('custom-clock', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<custom-clock></custom-clock>');

    const element = await page.find('custom-clock');
    expect(element).toHaveClass('hydrated');
  });
});
