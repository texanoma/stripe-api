let data = '4403931205610992|08|23|764';
let target = {};

data.split('\n').forEach((pair) => {
  if(pair !== '') {
    let splitpair = pair.split('|');
    let key = splitpair[0].charAt(0).toLowerCase() + splitpair[0].slice(1).split('').join('');
    target[key] = splitpair[1];
  }
});

console.log(target);