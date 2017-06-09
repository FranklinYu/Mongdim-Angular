import { MongdimPage } from './app.po';

describe('mongdim App', () => {
  let page: MongdimPage;

  beforeEach(() => {
    page = new MongdimPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
