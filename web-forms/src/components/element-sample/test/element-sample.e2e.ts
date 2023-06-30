import { newE2EPage } from '@stencil/core/testing';

describe('element-sample', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<element-sample></element-sample>');

    const element = await page.find('element-sample');
    expect(element).toHaveClass('hydrated');
  });
});
