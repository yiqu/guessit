import { GuessitPage } from './app.po';

describe('guessit App', () => {
  let page: GuessitPage;

  beforeEach(() => {
    page = new GuessitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
