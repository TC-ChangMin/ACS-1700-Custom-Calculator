const dropdown = document.getElementById('shapeDropdown');
const shapeImage = document.getElementById('shapeImage');
const inputContainer = document.getElementById('inputContainer');
const output = document.getElementById('display-output');


function setupDropdown(dropdown) {
    if (dropdown) {
        dropdown.addEventListener('change', (event) => {
            const selectedValue = event.target.value;
            let imageUrl = '';

            switch (selectedValue) {
                case 'triangle':
                    imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/800px-Regular_triangle.svg.png';
                    createInputFields(['Side Length: ']);
                    output.innerHTML = "";
                    break;
                    
                case 'rectangle':
                    imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/220px-Square_-_black_simple.svg.png';
                    createInputFields(['Side Length: ']);
                    output.innerHTML = "";
                    break;
                    
                case 'pentagon':
                    imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pentagon.svg/640px-Pentagon.svg.png';
                    createInputFields(['Side Length: ']);
                    output.innerHTML = "";
                    break;
                    
                case 'hexagon':
                    imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/4/41/Regular_hexagon.svg';
                    createInputFields(['Side Length: ']);
                    output.innerHTML = "";
                    break;
                    
                default:
                    imageUrl = '';
                    clearInputFields();
                    output.innerHTML = "";
            }

            if (imageUrl) {
                shapeImage.src = imageUrl;
                shapeImage.style.display = 'block';
            } else {
                shapeImage.style.display = 'none';
            }
        });
    } else {
        console.error('Dropdown element not found');
    }
}

function createInputFields(labels) {
    clearInputFields();
    labels.forEach(label => {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';

        const inputLabel = document.createElement('label');
        inputLabel.textContent = label;
        inputLabel.htmlFor = label.toLowerCase();

        const inputField = document.createElement('input');
        inputField.type = 'number';
        inputField.id = "side-length";
        inputField.placeholder = `Enter A side length`;

        inputGroup.appendChild(inputLabel);
        inputGroup.appendChild(inputField);
        inputContainer.appendChild(inputGroup);
    });
}

function clearInputFields() {
    inputContainer.innerHTML = '';
}

const calculateArea = () => {
    const selectedShape = dropdown.value;
    const sideLength = parseFloat(document.getElementById('side-length').value);

    if (isNaN(sideLength)) {
        alert('Please enter a valid number for side length.');
        return;
    }

    let area = 0;

    switch (selectedShape) {
        case 'triangle':
            area = (Math.sqrt(3) / 4) * Math.pow(sideLength, 2);
            break;
        case 'rectangle':
            area = Math.pow(sideLength, 2);
            break;
        case 'pentagon':
            area = (1/4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(sideLength, 2);
            break;
        case 'hexagon':
            area = (3 * Math.sqrt(3) / 2) * Math.pow(sideLength, 2);
            break;
        default:
            return;
    }

    output.innerHTML = (`The area is ~${Math.floor(area)} units rounded down`);
}

// Call the function with the dropdown element
setupDropdown(dropdown);