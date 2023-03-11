const assert = require("assert");

Feature("UnLiking Resto");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked resto", ({ I }) => {
  I.seeElement("#query");
  I.see("Tidak ada resto untuk ditampilkan", ".resto-item__not__found");
});

Scenario("unliking one resto", async ({ I }) => {
  I.see("Tidak ada resto untuk ditampilkan", ".resto-item__not__found");
  I.amOnPage("/");
  I.waitForElement(".resto__title a", 10);
  I.seeElement(".resto__title a");
  const firstReso = locate(".resto__title a").first();
  const firstResoTitle = await I.grabTextFrom(firstReso);
  I.click(firstReso);
  I.waitForElement("#likeButton", 10);
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.amOnPage("/#/favorite");
  I.seeElement(".resto-item");
  const likedRestoTitle = await I.grabTextFrom(".resto__title");
  assert.strictEqual(firstResoTitle, likedRestoTitle);
  I.click(locate(".resto__title a").first());
  I.waitForElement("#likeButton", 10);
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.amOnPage("/#/favorite");
  I.see("Tidak ada resto untuk ditampilkan", ".resto-item__not__found");
});
