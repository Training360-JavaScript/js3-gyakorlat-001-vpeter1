

const HU = {
  date(date)  { return new Intl.DateTimeFormat('hu-HU').format(date) }, 
  curreny(price = 0) { return new Intl.NumberFormat('hu-HU', {style: 'currency', currency: 'HUF'}).format(price) },
  list(array = ['első', 'második', 'harmadik']) { return `${array[0]}, ${array[1]} és ${array[2]}` }
  }


// console.log(HU.date(new Date("2021-04-01")));
// console.log(HU.curreny(50));
// console.log(HU.list(['1', '2', '3']));


export default HU;
