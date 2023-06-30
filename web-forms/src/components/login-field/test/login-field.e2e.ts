import { newE2EPage } from '@stencil/core/testing';

describe('login-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<login-field></login-field>');

    const element = await page.find('login-field');
    expect(element).toHaveClass('hydrated');
  });
});
