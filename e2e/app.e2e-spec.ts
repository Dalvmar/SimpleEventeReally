import { AngularEventPage } from './app.po';

describe('angular-event App', () => {
  let page: AngularEventPage;

  beforeEach(() => {
    page = new AngularEventPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
