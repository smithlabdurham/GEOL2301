firstClass = new Date("2021-10-07");

linkLinks = function(aClass, aHref) {
  const a = document.getElementsByClassName(aClass);
  for (var i = 0; i != a.length; i++) {
    a[i].href = aHref;
  }
}

linkLinks('wenlockGroups', 'https://docs.google.com/spreadsheets/d/1ABpa7W4V8ZStxXdezYaX3HtMmG7ms5vRleSv88YhuKU/edit');
linkLinks('wenlockData', 'https://docs.google.com/spreadsheets/d/1WNVOwmHKelVqv0E4LokSrI9LzikeRA_GnRqRQG6mXE4/edit');
linkLinks('wenlockRubric', 'pdf/WenlockRubric.pdf');
