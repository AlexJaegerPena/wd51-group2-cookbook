const people = [
    'Alex',
    'Amir',
    'Dominic',
    'Eddy',
    'Gary',
    'Gulmina',
    'Hyeongwook',
    'Kapil',
    'Mehedi',
    'Muhammad',
    'Anna',
    'Nikolay',
    'Vladimir',
    'Yohannes',
  ];
  
  for (let i = 0; i < people.length; i++) {
    const time = (i + 1) * 5;
  
    console.log(`1:${time} Meet with ${people[i]}.`);
  }