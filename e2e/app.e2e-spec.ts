import { WhateveryouwantPage } from './app.po';

describe('whateveryouwant App', () => {
  let page: WhateveryouwantPage;

  beforeEach(() => {
    page = new WhateveryouwantPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
