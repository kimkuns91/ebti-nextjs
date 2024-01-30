import puppeteer from 'puppeteer';

export async function generatePDFfromHTML(
  htmlContent: any,
  outputPath: string
) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  await page.pdf({ path: outputPath, format: 'A4' });
  await browser.close();
}
