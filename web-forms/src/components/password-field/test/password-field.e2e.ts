import { newE2EPage } from '@stencil/core/testing';

describe('password-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<password-field></password-field>');

    const element = await page.find('password-field');
    expect(element).toHaveClass('hydrated');
  });
});
