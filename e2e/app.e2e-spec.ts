import { Aula10aPage } from './app.po';

describe('aula10a App', () => {
  let page: Aula10aPage;

  beforeEach(() => {
    page = new Aula10aPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
