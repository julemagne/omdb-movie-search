import { MovieSearchPage } from './app.po';

describe('movie-search App', () => {
  let page: MovieSearchPage;

  beforeEach(() => {
    page = new MovieSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
