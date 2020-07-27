import _ from 'lodash';


// Function that creates a div element
const component = () => {
    const element = document.createElement('div');

    // element.innerHTML = '<p>Hello webpack</p>';
    element.innerHTML = _.join(["Hello", "Webpack"], ' ');
    return element;
}

//Append the element to the document body
document.body.appendChild(component());

