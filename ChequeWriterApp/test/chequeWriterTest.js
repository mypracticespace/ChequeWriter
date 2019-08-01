describe("convertAmountInWords", function () {

    it("convert 1 digit to words", function () {
        expect(convertAmountInWords("1")).toEqual("one");
        expect(convertAmountInWords("9")).toEqual("nine");
    });

    it("convert 2 digits to words", function () {
        expect(convertAmountInWords("19")).toEqual("nineteen");
        expect(convertAmountInWords("30")).toEqual("thirty");
        expect(convertAmountInWords("99")).toEqual("ninety nine");
    });

    it("convert amount with hundred place value to words", function () {
        expect(convertAmountInWords("200")).toEqual("two hundred");
        expect(convertAmountInWords("370")).toEqual("three hundred seventy");
        expect(convertAmountInWords("889")).toEqual("eight hundred eighty nine");
    });

    it("convert amount with thousands place value to words", function () {
        expect(convertAmountInWords("3000")).toEqual("three thousand");
        expect(convertAmountInWords("60005")).toEqual("sixty thousand five");
        expect(convertAmountInWords("700950")).toEqual("seven hundred thousand nine hundred fifty");
    });

    it("convert amount with millions place value to words", function () {
        expect(convertAmountInWords("2000001")).toEqual("two million one");
        expect(convertAmountInWords("52300019")).toEqual("fifty two million three hundred thousand nineteen");
        expect(convertAmountInWords("800451008")).toEqual("eight hundred million four hundred fifty one thousand eight");
    });

    it("convert amount with decimal place value to words", function () {
        expect(convertAmountInWords("1.569")).toEqual("one and fifty seven cents");
        expect(convertAmountInWords("20.130")).toEqual("twenty and thirteen cents");
        expect(convertAmountInWords("52705600.035")).toEqual("fifty two million seven hundred five thousand six hundred and four cents");

    });
});