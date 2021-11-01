import * as _ from 'lodash';
const dl = "DL Build Kit 2021"

function component() {
  const element = document.createElement('div');
  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  return element;
}

document.body.appendChild(component());
console.log(dl);