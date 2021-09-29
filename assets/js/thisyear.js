firstClass = new Date("2021-10-07");

days = document.querySelectorAll('[day]');
for (var i = 0; i != days.length; i++) {
  dateI = new Date(firstClass.valueOf());
  dateI.setDate(dateI.getDate() + parseInt(days[i].getAttribute('day')));
  days[i].innerHTML = dateI.toDateString();
}

weeks = document.querySelectorAll('[week]');
for (var i = 0; i != weeks.length; i++) {
  dateI = new Date(firstClass.valueOf());
  dateI.setDate(dateI.getDate() + ((parseInt(weeks[i].getAttribute('week')) - 1) * 7));
  weeks[i].innerHTML = dateI.toDateString();
}

linkLinks = function(aClass, aHref) {
  const a = document.getElementsByClassName(aClass);
  for (var i = 0; i != a.length; i++) {
    a[i].href = aHref;
  }
}

linkLinks('wenlockGroups', 'https://docs.google.com/spreadsheets/d/1ABpa7W4V8ZStxXdezYaX3HtMmG7ms5vRleSv88YhuKU/edit');
linkLinks('wenlockData', 'https://docs.google.com/spreadsheets/d/1WNVOwmHKelVqv0E4LokSrI9LzikeRA_GnRqRQG6mXE4/edit');
linkLinks('wenlockRubric', 'pdf/WenlockRubric.pdf');
linkLinks('wenlockSlabs', 'https://sketchfab.com/smithlabdurham/collections/wenlock-limestone-samples');
linkLinks('discussionBoard', 'https://blackboard.durham.ac.uk/ultra/courses/_5402_1/outline/discussion/_90227_1?view=discussions&courseId=_5402_1');
linkLinks('blackboard', 'https://blackboard.durham.ac.uk/ultra/courses/_5402_1/outline');
linkLinks('readingList', 'https://rl.talis.com/3/durham/lists/719102AD-4B96-6917-9F03-5537497D5654.html');
