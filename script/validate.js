
const form = document.querySelector("form");
const telephone = document.querySelector('input[type="tel"]');
const inputMask = new inputMask("+7 (999) 999-99-99");

inputMask.mask(telephone);

const validation = new JustValidate(".form");

validation
    .addField('input-name', [
        {
            rule: 'minLength',
            value: 3
        },
        {
            rule: 'maxLength',
            value: 50
        },
        {
            rule: 'required',
            value: true
        }
    ])
    .addField('input-email', [
        {
            rule: 'required',
            errorMessage: 'Email не введен.'
        },
        {
            rule: 'email',
            value: true,
            errorMessage: 'Не верный Email.'
        }
    ])
    .addField('input-tel', [
        {
            rule: 'required',
            value: true,
            errorMessage: 'Введите номер телефона'
        },
        {
            rule: 'function',
            validator: function() {
                const phone = telephone.inputMask.unmaskedvalue();
                return phone.length === 10;
            },
            errorMessage: 'Введите корректный номер телефона.'

        }
    ]).onSuccess((event) => {
        console.log('Validation passes and form submitted', event);

        let formData = new FormData(event.target);

        console.log(...formData);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    console.log('Отправильно');
                }
            }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        event.target.reset();
    })