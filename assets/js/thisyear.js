firstClass = new Date("2024-10-08"); // In 2024: Remove hard-coded deadline on row 5 of index.html
// wenlockDeadline = new Date("2024-01-08");
// In 2024: Update classDatasetDeadline to day 40, unless teaching on Monday again; 
// Better still, use a global variable to set this.
wenlockDeadline = new Date(firstClass.valueOf());
wenlockDeadline.setDate(wenlockDeadline.getDate() + 72 + 17 + 4);
draftDeadline = new Date(firstClass.valueOf());
draftDeadline.setDate(draftDeadline.getDate() + (7 * (10 - 1)) + 4 - 1); // -1 to avoid weekend

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

const classLinks = {
  'wenlockGroups': 'https://docs.google.com/spreadsheets/d/1ABpa7W4V8ZStxXdezYaX3HtMmG7ms5vRleSv88YhuKU/edit',
  'wenlockData': 'https://docs.google.com/spreadsheets/d/1CQ9Gn4paj8qBJlILFFtDrvOFHufdtXG2DIEcXGiPJ3g/edit',
  'wenlockRubric': 'pdf/WenlockRubric.pdf',
  'notebookRubric': 'pdf/NotebookRubric.pdf',
  'wenlockSlabs': 'https://sketchfab.com/smithlabdurham/collections/wenlock-limestone-samples',
  'discussionBoard': 'https://blackboard.durham.ac.uk/ultra/courses/_58040_1/outline/discussion/_2175474_1?view=discussions&courseId=_58040_1',
  'blackboard': 'https://blackboard.durham.ac.uk/ultra/courses/_58040_1/outline',
  'readingList': 'https://rl.talis.com/3/durham/lists/CEE9BDD6-054D-007A-93FF-F0D055AFDD3E.html',
  'jupyter': 'https://notebooks.dmaitre.phyip3.dur.ac.uk/palaeoecosystems-2021/'
};

for (const [aClass, aHref] of Object.entries(classLinks)) {
  const a = document.getElementsByClassName(aClass);
  for (var i = 0; i != a.length; i++) {
    a[i].href = aHref;
  }
}
