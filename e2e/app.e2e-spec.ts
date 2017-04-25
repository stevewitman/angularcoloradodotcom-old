import { AngularcoloradodotcomPage } from './app.po';

describe('angularcoloradodotcom App', () => {
  let page: AngularcoloradodotcomPage;

  beforeEach(() => {
    page = new AngularcoloradodotcomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
