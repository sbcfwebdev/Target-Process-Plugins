define(["tau/configurator","tau/utils/utils.date"],function(a,b){var c=function(){module("[utils.date] tests"),test("should allow to get age",function(){a.setCurrentDate(Date.parse("1-Jan-2012"));var c="5-Jan-2010";equals(b.getAge(c).toString(),"1 year ago");var c="5-Jan-2018";equals(b.getAge(c).toString(),"6 years after");var c="5-Jan-2009";equals(b.getAge(c).toString(),"2 years ago");var c="31-Dec-2011";equals(b.getAge(c).toString(),"1 day ago");var c="4-Dec-2011";equals(b.getAge(c).toString(),"28 days ago");var c="31-Dec-2011 23:00:00";equals(b.getAge(c).toString(),"1 hour ago");var c="31-Dec-2011 20:00:00";equals(b.getAge(c).toString(),"4 hours ago");var c="31-Dec-2011 23:45:00";equals(b.getAge(c).toString(),"15 min ago");var c="31-Dec-2011 23:59:55";equals(b.getAge(c).toString(),"5 sec ago");var c="1-Jan-2012";equals(b.getAge(c).toString(),"now")})};return{run:c}})