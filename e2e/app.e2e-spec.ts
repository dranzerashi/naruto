import { NarutoPage } from './app.po';

describe('naruto App', () => {
  let page: NarutoPage;

  beforeEach(() => {
    page = new NarutoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
