const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergerPDF = async (p1,p2) => {         //parameter
  merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  merger.add(p2); // merge only page 2
  // merger.add('pdf2.pdf', [1, 3]); // merge the pages 1 and 3
  // merger.add('pdf2.pdf', '4, 7, 8'); // merge the pages 4, 7 and 8
  // merger.add('pdf3.pdf', '1 to 2'); //merge pages 1 to 2
  // merger.add('pdf3.pdf', '3-4'); //merge pages 3 to 4
let c=new Date().getTime()
  await merger.save(`public/${c}.pdf`); //save under given name and reset the internal document
  return c
}

module.exports={mergerPDF}