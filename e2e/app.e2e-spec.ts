import { NotifyPage } from './app.po';

describe('notify App', function() {
  let page: NotifyPage;

  beforeEach(() => {
    page = new NotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
