// const assert = require("assert");

Feature("UnLiking Resto");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing liked resto", ({ I }) => {
  I.seeElement("#query");
  I.see("Tidak ada resto untuk ditampilkan", ".resto-item__not__found");
});

// Scenario("liking one resto", async ({ I }) => {
//   I.see("Tidak ada resto untuk ditampilkan", ".resto-item__not__found");

//   I.amOnPage("/");
//   I.waitForElement(".resto__title a", 10);
//   I.seeElement(".resto__title a");
//   const firstReso = locate(".resto__title a").first();
//   const firstResoTitle = await I.grabTextFrom(firstReso);
//   I.click(firstReso);

//   I.waitForElement("#likeButton", 10);
//   I.seeElement("#likeButton");
//   I.click("#likeButton");

//   I.amOnPage("/#/favorite");
//   I.seeElement(".resto-item");
//   const likedRestoTitle = await I.grabTextFrom(".resto__title");
//   assert.strictEqual(firstResoTitle, likedRestoTitle);
// });

// Scenario("searching resto", async ({ I }) => {
//   I.see("Tidak ada resto untuk ditampilkan", ".resto-item__not__found");

//   I.amOnPage("/");
//   I.waitForElement(".resto__title a", 10);
//   I.seeElement(".resto__title a");

//   const titles = [];

//   for (let i = 1; i <= 3; i++) {
//     I.click(locate(".resto__title a").at(i));
//     I.waitForElement("#likeButton", 10);
//     I.seeElement("#likeButton");
//     I.click("#likeButton");
//     titles.push(await I.grabTextFrom(".resto__title"));
//     I.amOnPage("/");
//     I.waitForElement(".resto__title a", 10);
//   }

//   I.amOnPage("/#/favorite");
//   I.seeElement("#query");

//   const searchQuery = titles[1].substring(1, 3);
//   const matchingResto = titles.filter((title) => title.indexOf(searchQuery) !== -1);

//   I.fillField("#query", searchQuery);
//   I.pressKey("Enter");

//   const visibleLikedResto = await I.grabNumberOfVisibleElements(".resto-item");
//   assert.strictEqual(matchingResto.length, visibleLikedResto);

//   matchingResto.forEach(async (title, index) => {
//     const visibleTitle = await I.grabTextFrom(locate(".resto__title").at(index + 1));
//     assert.strictEqual(title, visibleTitle);
//   });
// });
