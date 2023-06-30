import { newE2EPage } from '@stencil/core/testing';

describe('button-standard', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<button-standard></button-standard>');

    const element = await page.find('button-standard');
    expect(element).toHaveClass('hydrated');
  });
});
