Feature("Adding review");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("Add Review from detail page", async ({ I }) => {
  I.see("Tidak ada resto untuk ditampilkan", ".resto-item__not__found");
  I.amOnPage("/");
  I.waitForElement(".resto__title a", 10);
  I.seeElement(".resto__title a");
  const firstReso = locate(".resto__title a").first();
  I.click(firstReso);
  // input element input when have id name
  I.fillField("#name", "Rizky");
  I.fillField("#review", "Mantap");
  //   click button with class form-review__submit
  I.click(".form-review__submit");
  //   see element with class resto__review
  I.seeElement(".resto__review");
  //   see text with class resto__review
  I.see("Rizky", ".resto__review");
  I.see("Mantap", ".resto__review");
});
