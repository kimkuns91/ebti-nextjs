import fs from 'fs';
import PDFDocument from 'pdfkit';

export const makdPDF = ({ data, imgs }: { data: any; imgs: any[] | null }) => {
  const doc = new PDFDocument({
    size: 'A4',
    font: 'font/NotoSansKR-DemiLight.otf',
  });

  // 날짜
  const date = new Date();
  const Y = date.getUTCFullYear();
  const M = date.getMonth();
  const D = date.getUTCDate();

  // font Size
  const bodySize = 18;
  const footerSize1 = 14;

  // A4용지 mergin제거
  doc.page.margins.top = 0;
  doc.page.margins.bottom = 0;
  doc.page.margins.left = 0;
  doc.page.margins.right = 0;

  // 파일 저장 경로
  // const verifyFilePath = `${process.env.DATA_PATH}/public/verify/Result_${sessionid}.pdf`;
  const verifyFilePath = `/public/verify/Result.pdf`;

  //파일 존재하면 삭제
  if (fs.existsSync(verifyFilePath)) {
    fs.unlinkSync(verifyFilePath); // unlinkSync 파일 삭제
  }
  // 파일 생성
  doc.pipe(fs.createWriteStream(verifyFilePath));

  //A4 (595.28 x 841.89)
  const A4_X = 595.28;
  const A4_Y = 841.89;

  /*X축  =  30~565까지 */
  const marginX = 30;
  const marginY = 70;

  const marginX2 = 535;
  const marginY2 = marginY + 690; //760

  /*이미지 크기*/
  const imgW = 208;
  const imgH = 117;

  const tableTopY = marginY - 2;
  const tableUnderY = marginY + 40;

  const imgBoxH = 130;

  const MT1 = { x: marginX, y: marginY }; // 시작
  const MT2 = { x: MT1.x + 65, y: marginY }; // 순서
  const MT3 = { x: MT2.x + 11 + imgW + 11, y: marginY }; // 이미지
  const MT4 = { x: MT3.x + 80, y: marginY }; // 컬럼1
  const MT5 = { x: MT4.x + 80, y: marginY }; // 컬럼2
  const MT6 = { x: MT5.x + 80, y: marginY }; // 컬럼3

  // 밑줄 긋기 색상 회색
  // for (var k = 0; k < parseInt((data.length - 1) / 5 + 1); k++) {
  //   if (k != 0) doc.addPage();

  //   //Date
  //   doc
  //     .fontSize(footerSize1)
  //     .text(`${Y}년 ${M + 1}월 ${D}일`, A4_X - 180, marginY - 40, {
  //       align: 'center',
  //     });

  //   //Header
  //   doc.underline(marginX, tableTopY, marginX2, 3, { color: '#000' });

  //   doc.fontSize(bodySize).text(`No.`, MT1.x + 19, marginY + 5);
  //   doc.moveTo(MT1.x, MT1.y).lineTo(MT1.x, marginY2).stroke();

  //   doc.fontSize(bodySize).text(`이미지`, MT2.x + 85, marginY + 5);
  //   doc.moveTo(MT2.x, MT2.y).lineTo(MT2.x, marginY2).stroke();

  //   doc.fontSize(bodySize).text(`컬럼1`, MT3.x + 5, marginY + 5);
  //   doc.moveTo(MT3.x, MT3.y).lineTo(MT3.x, marginY2).stroke();

  //   doc.fontSize(bodySize).text(`컬럼2`, MT4.x + 16, marginY + 5);
  //   doc.moveTo(MT4.x, MT4.y).lineTo(MT4.x, marginY2).stroke();

  //   doc.fontSize(bodySize).text(`컬럼3`, MT5.x + 20, marginY + 5);
  //   doc.moveTo(MT5.x, MT5.y).lineTo(MT5.x, marginY2).stroke();

  //   //Last vertical Line
  //   doc.moveTo(MT6.x, MT6.y).lineTo(MT6.x, marginY2).stroke();

  //   //Table Begin Line
  //   doc.underline(marginX, tableUnderY, marginX2, 3, { color: '#000' });

  //   //A4 1장 이미지 최대 표현 5장
  //   for (var i = 0; i < 5; i++) {
  //     let img = fs.readFileSync(imgs[k * 5 + i].imgPath);

  //     const tableContentY = tableUnderY + imgBoxH * i + 50; //컨텐츠
  //     const tableImageY = tableUnderY + imgBoxH * i + 7; //이미지

  //     //Table Line
  //     doc.underline(marginX, tableUnderY + imgBoxH * (i + 1), marginX2, 1, {
  //       color: '#000',
  //     });

  //     //No.
  //     doc
  //       .fontSize(footerSize1)
  //       .text(`${k * 5 + i + 1}`, MT1.x + 26, tableContentY);

  //     //Image
  //     doc.image(img, MT2.x + 10, tableImageY, {
  //       width: imgW,
  //       height: imgH,
  //     });

  //     //컬럼1
  //     doc
  //       .fontSize(footerSize1)
  //       .text(
  //         `${data[k * 5 + i].label}`,
  //         MT3.x + (35 - data[k * 5 + i].label.length * 5),
  //         tableContentY
  //       );

  //     //컬럼2
  //     doc
  //       .fontSize(footerSize1)
  //       .text(`${data[k * 5 + i].electric}%`, MT4.x + 12, tableContentY);

  //     //컬럼3
  //     doc
  //       .fontSize(footerSize1)
  //       .text(`${data[k * 5 + i].flame}%`, MT5.x + 12, tableContentY);
  //     if (k * 5 + i == data.length - 1) break;
  //   }

  //   //Table Last Line
  //   doc.underline(marginX, marginY2, marginX2, 1, { color: '#000' }); //테이블 마지막줄

  //   //PageNation
  //   doc
  //     .fontSize(footerSize1)
  //     .text(`<${k + 1}>`, 0, marginY2 + 30, { align: 'center' });
  // }

  doc.end();
};
