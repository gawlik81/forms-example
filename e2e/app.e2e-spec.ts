import { FormsExamplePage } from './app.po';

describe('forms-example App', function() {
  let page: FormsExamplePage;

  beforeEach(() => {
    page = new FormsExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
