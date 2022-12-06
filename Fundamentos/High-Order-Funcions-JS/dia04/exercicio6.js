
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };
  // yearSeasons: estações do ano.
 const yearMonths = yearSeasons.spring.concat(yearSeasons.summer.concat(yearSeasons.autumn.concat(yearSeasons.winter)));

 const {spring, summer, autumn, winter} = yearSeasons;
 const months = [...spring, ...autumn, ...summer, ...winter]

 console.log(months)