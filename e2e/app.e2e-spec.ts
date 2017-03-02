<<<<<<< HEAD
import { FeedgistPage } from './app.po';

describe('feedgist App', function() {
  let page: FeedgistPage;

  beforeEach(() => {
    page = new FeedgistPage();
=======
import { FeedGistClientPage } from './app.po';

describe('feed-gist-client App', () => {
  let page: FeedGistClientPage;

  beforeEach(() => {
    page = new FeedGistClientPage();
>>>>>>> 0c8e37e7a9e02e06db002e32c7109aab51fced42
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
