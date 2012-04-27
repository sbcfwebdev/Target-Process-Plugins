require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.format");suite.addBatch({format:{topic:function(){return d3.format},"returns a string":function(a){assert.isString(a("d")(0))},"can zero fill":function(a){var b=a("08d");assert.strictEqual(b(0),"00000000"),assert.strictEqual(b(42),"00000042"),assert.strictEqual(b(42e6),"42000000"),assert.strictEqual(b(42e7),"420000000"),assert.strictEqual(b(-4),"−0000004"),assert.strictEqual(b(-42),"−0000042"),assert.strictEqual(b(-42e5),"−4200000"),assert.strictEqual(b(-42e6),"−42000000")},"can space fill":function(a){var b=a("8d");assert.strictEqual(b(0),"       0"),assert.strictEqual(b(42),"      42"),assert.strictEqual(b(42e6),"42000000"),assert.strictEqual(b(42e7),"420000000"),assert.strictEqual(b(-4),"      −4"),assert.strictEqual(b(-42),"     −42"),assert.strictEqual(b(-42e5),"−4200000"),assert.strictEqual(b(-42e6),"−42000000")},"can output fixed-point notation":function(a){assert.strictEqual(a(".1f")(.49),"0.5"),assert.strictEqual(a(".2f")(.449),"0.45"),assert.strictEqual(a(".3f")(.4449),"0.445"),assert.strictEqual(a(".5f")(.444449),"0.44445"),assert.strictEqual(a(".1f")(100),"100.0"),assert.strictEqual(a(".2f")(100),"100.00"),assert.strictEqual(a(".3f")(100),"100.000"),assert.strictEqual(a(".5f")(100),"100.00000")},"can output general notation":function(a){assert.strictEqual(a(".1g")(.049),"0.05"),assert.strictEqual(a(".1g")(.49),"0.5"),assert.strictEqual(a(".2g")(.449),"0.45"),assert.strictEqual(a(".3g")(.4449),"0.445"),assert.strictEqual(a(".5g")(.444449),"0.44445"),assert.strictEqual(a(".1g")(100),"1e+2"),assert.strictEqual(a(".2g")(100),"1.0e+2"),assert.strictEqual(a(".3g")(100),"100"),assert.strictEqual(a(".5g")(100),"100.00"),assert.strictEqual(a(".5g")(100.2),"100.20"),assert.strictEqual(a(".2g")(.002),"0.0020")},"can output exponent notation ":function(a){var b=a("e");assert.strictEqual(b(0),"0e+0"),assert.strictEqual(b(42),"4.2e+1"),assert.strictEqual(b(42e6),"4.2e+7"),assert.strictEqual(b(42e7),"4.2e+8"),assert.strictEqual(b(-4),"−4e+0"),assert.strictEqual(b(-42),"−4.2e+1"),assert.strictEqual(b(-42e5),"−4.2e+6"),assert.strictEqual(b(-42e6),"−4.2e+7")},"can output SI prefix notation":function(a){var b=a("s");assert.strictEqual(b(0),"0"),assert.strictEqual(b(1),"1"),assert.strictEqual(b(10),"10"),assert.strictEqual(b(100),"100"),assert.strictEqual(b(999.5),"999.5"),assert.strictEqual(b(999500),"999.5k"),assert.strictEqual(b(1e3),"1k"),assert.strictEqual(b(1500.5),"1.5005k"),assert.strictEqual(b(1e-6),"1μ")},"can output SI prefix notation with appropriate rounding":function(a){var b=a(".3s");assert.strictEqual(b(0),"0.00"),assert.strictEqual(b(1),"1.00"),assert.strictEqual(b(10),"10.0"),assert.strictEqual(b(100),"100"),assert.strictEqual(b(999.5),"1.00k"),assert.strictEqual(b(999500),"1.00M"),assert.strictEqual(b(1e3),"1.00k"),assert.strictEqual(b(1500.5),"1.50k"),assert.strictEqual(b(1455e5),"146M"),assert.strictEqual(b(145999999.99999934),"146M"),assert.strictEqual(b(1e+26),"100Y"),assert.strictEqual(b(1e-6),"1.00μ"),assert.strictEqual(b(.009995),"0.0100");var b=a(".4s");assert.strictEqual(b(999.5),"999.5"),assert.strictEqual(b(999500),"999.5k"),assert.strictEqual(b(.009995),"9.995m")},"can output a percentage":function(a){var b=a("%");assert.strictEqual(b(0),"0%"),assert.strictEqual(b(.042),"4%"),assert.strictEqual(b(.42),"42%"),assert.strictEqual(b(4.2),"420%"),assert.strictEqual(b(-0.042),"−4%"),assert.strictEqual(b(-0.42),"−42%"),assert.strictEqual(b(-4.2),"−420%")},"can output a percentage with rounding and sign":function(a){var b=a("+.2p");assert.strictEqual(b(.00123),"+0.12%"),assert.strictEqual(b(.0123),"+1.2%"),assert.strictEqual(b(.123),"+12%"),assert.strictEqual(b(1.23),"+120%"),assert.strictEqual(b(-0.00123),"−0.12%"),assert.strictEqual(b(-0.0123),"−1.2%"),assert.strictEqual(b(-0.123),"−12%"),assert.strictEqual(b(-1.23),"−120%")},"can round to significant digits":function(a){assert.strictEqual(a(".2r")(0),"0.0"),assert.strictEqual(a(".1r")(.049),"0.05"),assert.strictEqual(a(".1r")(.49),"0.5"),assert.strictEqual(a(".2r")(.449),"0.45"),assert.strictEqual(a(".3r")(.4449),"0.445"),assert.strictEqual(a(".3r")(1),"1.00"),assert.strictEqual(a(".3r")(.9995),"1.00"),assert.strictEqual(a(".5r")(.444449),"0.44445"),assert.strictEqual(a("r")(123.45),"123.45"),assert.strictEqual(a(".1r")(123.45),"100"),assert.strictEqual(a(".2r")(123.45),"120"),assert.strictEqual(a(".3r")(123.45),"123"),assert.strictEqual(a(".4r")(123.45),"123.5"),assert.strictEqual(a(".5r")(123.45),"123.45"),assert.strictEqual(a(".6r")(123.45),"123.450")},"can round very small numbers":function(a){var b=a(".2r");assert.strictEqual(b(1e-22),"0.00000000000000000000")},"can group thousands":function(a){var b=a(",d");assert.strictEqual(b(0),"0"),assert.strictEqual(b(42),"42"),assert.strictEqual(b(42e6),"42,000,000"),assert.strictEqual(b(42e7),"420,000,000"),assert.strictEqual(b(-4),"−4"),assert.strictEqual(b(-42),"−42"),assert.strictEqual(b(-42e5),"−4,200,000"),assert.strictEqual(b(-42e6),"−42,000,000")},"can group thousands and zero fill":function(a){assert.strictEqual(a("01,d")(0),"0"),assert.strictEqual(a("01,d")(0),"0"),assert.strictEqual(a("02,d")(0),"00"),assert.strictEqual(a("03,d")(0),"000"),assert.strictEqual(a("05,d")(0),"0,000"),assert.strictEqual(a("08,d")(0),"0,000,000"),assert.strictEqual(a("013,d")(0),"0,000,000,000"),assert.strictEqual(a("021,d")(0),"0,000,000,000,000,000")},"can group thousands and zero fill with overflow":function(a){assert.strictEqual(a("01,d")(1),"1"),assert.strictEqual(a("01,d")(1),"1"),assert.strictEqual(a("02,d")(12),"12"),assert.strictEqual(a("03,d")(123),"123"),assert.strictEqual(a("05,d")(12345),"12,345"),assert.strictEqual(a("08,d")(12345678),"12,345,678"),assert.strictEqual(a("013,d")(1234567890123),"1,234,567,890,123")},"can group thousands and space fill":function(a){assert.strictEqual(a("1,d")(0),"0"),assert.strictEqual(a("1,d")(0),"0"),assert.strictEqual(a("2,d")(0)," 0"),assert.strictEqual(a("3,d")(0),"  0"),assert.strictEqual(a("5,d")(0),"    0"),assert.strictEqual(a("8,d")(0),"       0"),assert.strictEqual(a("13,d")(0),"            0"),assert.strictEqual(a("21,d")(0),"                    0")},"can group thousands and space fill with overflow":function(a){assert.strictEqual(a("1,d")(1),"1"),assert.strictEqual(a("1,d")(1),"1"),assert.strictEqual(a("2,d")(12),"12"),assert.strictEqual(a("3,d")(123),"123"),assert.strictEqual(a("5,d")(12345),"12,345"),assert.strictEqual(a("8,d")(12345678),"12,345,678"),assert.strictEqual(a("13,d")(1234567890123),"1,234,567,890,123")},"can group thousands with general notation":function(a){var b=a(",g");assert.strictEqual(b(0),"0"),assert.strictEqual(b(42),"42"),assert.strictEqual(b(42e6),"42,000,000"),assert.strictEqual(b(42e7),"420,000,000"),assert.strictEqual(b(-4),"−4"),assert.strictEqual(b(-42),"−42"),assert.strictEqual(b(-42e5),"−4,200,000"),assert.strictEqual(b(-42e6),"−42,000,000")},"can group thousands, space fill, and round to significant digits":function(a){assert.strictEqual(a("10,.1f")(123456.49)," 123,456.5"),assert.strictEqual(a("10,.2f")(1234567.449),"1,234,567.45"),assert.strictEqual(a("10,.3f")(12345678.4449),"12,345,678.445"),assert.strictEqual(a("10,.5f")(123456789.444449),"123,456,789.44445"),assert.strictEqual(a("10,.1f")(123456)," 123,456.0"),assert.strictEqual(a("10,.2f")(1234567),"1,234,567.00"),assert.strictEqual(a("10,.3f")(12345678),"12,345,678.000"),assert.strictEqual(a("10,.5f")(123456789),"123,456,789.00000")},"can display integers in fixed-point notation":function(a){assert.strictEqual(a("f")(42),"42")},"will not display non-integers in integer format":function(a){assert.strictEqual(a("d")(4.2),"")},'supports "n" as an alias for ",g"':function(a){var b=a("n");assert.strictEqual(b(.0042),"0.0042"),assert.strictEqual(b(.42),"0.42"),assert.strictEqual(b(0),"0"),assert.strictEqual(b(42),"42"),assert.strictEqual(b(42e6),"42,000,000"),assert.strictEqual(b(42e7),"420,000,000"),assert.strictEqual(b(-4),"−4"),assert.strictEqual(b(-42),"−42"),assert.strictEqual(b(-42e5),"−4,200,000"),assert.strictEqual(b(-42e6),"−42,000,000")}}}),suite.export(module)