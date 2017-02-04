import { BiqV2Page } from './app.po';

describe('biq-v2 App', function() {
  let page: BiqV2Page;

  beforeEach(() => {
    page = new BiqV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
