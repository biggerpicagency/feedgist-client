import { browser, element, by } from 'protractor';

<<<<<<< HEAD
export class FeedgistPage {
=======
export class FeedGistClientPage {
>>>>>>> 0c8e37e7a9e02e06db002e32c7109aab51fced42
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
