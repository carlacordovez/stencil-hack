import { newE2EPage } from '@stencil/core/testing';

describe('hello-name', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hello-name></hello-name>');

    const element = await page.find('hello-name');
    expect(element).toHaveClass('hydrated');
  });
});
