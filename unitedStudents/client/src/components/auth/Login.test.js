import puppeteer from "puppeteer";

test("Validate name input", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const app = "C:/Users/arton/Desktop/UnitedStudents/client/src/components/Login.js";
  await page.goto(app);

  await page.click("input#email");
  await page.type("input#email", "ar41232@ubt-uni.net");
  
  let email = await page.$eval("input#email", (input) => input.className);
  expect(email).toBe("invalid");
  await browser.close();
});
