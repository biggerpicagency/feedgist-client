import { FeedGistClientPage } from './app.po';

describe('feed-gist-client App', () => {
  let page: FeedGistClientPage;

  beforeEach(() => {
    page = new FeedGistClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
