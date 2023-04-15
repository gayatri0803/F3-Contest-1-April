const l = []

function add() {
    const name = document.getElementById('name').value;
    const proffession = document.getElementById('proffession').value;
    const age = document.getElementById('age').value;

    console.log(name, proffession, age);


    if (name === '' || proffession === '' || age === '') {
        const x = document.getElementById('x')
        x.style.color = 'red';

        x.innerHTML = 'Error : Please Make sure All the fields are filled before adding in an employee !'
        x.style.marginLeft = '30px';
    } else {
        x.innerHTML = 'Success : Employee Added!'
        x.style.color = 'green';
        x.style.marginLeft = '30px';



        const y = document.getElementById('y')
        y.style.display = 'none';

        l.push({
            name: name,
            proffession: proffession,
            age: age,})
    }

    let tb = document.getElementById('tb')
    tb.innerHTML = '';

    l.map((el, i)=> {

        tb.innerHTML += `
        <tbody>
        <tr>
        <td>${i+1}.</td>
        <td>Name:${el.name}</td>
        <td>Profession:${el.proffession}</td>
        <td>Age:${el.age}</td>
        <td><button onclick=d(${i}) type="button" class="btn">Delete</button></td>
        </tr>
        </tbody>
        
`
    })

}

function d(el) {
    delete l[el]
    tb.innerHTML = ''
    l.map((el, i)=> {

        tb.innerHTML += `
        <tbody>
        <tr>
        <td>${i+1}.</td>
        <td>Name:${el.name}</td>
        <td>Profession:${el.proffession}</td>
        <td>Age:${el.age}</td>
        <td><button onclick=d(${i}) type="button" class="btn">Delete</button></td>
        </tr>
        </tbody>
`
    })
}
console.log(tb)