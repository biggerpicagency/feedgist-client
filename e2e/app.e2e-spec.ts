import { FeedgistPage } from './app.po';

describe('feedgist App', function() {
  let page: FeedgistPage;

  beforeEach(() => {
    page = new FeedgistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
