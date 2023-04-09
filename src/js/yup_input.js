import * as yup from 'yup';

const formRegisiter = document.querySelector('#form-register');
const formInputs = document.querySelectorAll('.form-input');

const getData = () => {
    const data = {};

    for (let index = 0; index < formRegisiter.length - 1; index++) {
        data[`${formRegisiter[index].id}`] = formRegisiter[index].value.trim();
    }

    return data;
}

const schema = yup.object().shape({
    name: yup.string().required({ type: 'name', msg: 'Name is required!' }),
    email: yup.string().email({ type: 'email', msg: 'Email is invalid!' }).required({ type: 'email', msg: 'Email is required!' }),
    phone: yup.string().matches(/^0[35789]\d{8}$/, { message: { type: 'phone', msg: 'Invalid phone number format' } }),
    'learning-form': yup.string(),
    'facebook-url': yup.string().required({ type: 'facebook-url', msg: 'Facebook url is required!' }),
    opinion: yup.string().required({ type: 'opinion', msg: 'Opinion is required!' })
});

const showError = (place, message) => {
    document.querySelector(`#error-${place}`).innerHTML = message;
}

const hideError = (place) => {
    document.querySelector(`#error-${place}`).innerHTML = '';
}

const validationAllForm = (data) => {
    schema
        .validate(data, { abortEarly: false }) // abortEarly trả về tất cả lỗi, nếu true sẽ trả về 1 lỗi cuối cùng
        .then((responseData) => {
            console.log(responseData);
        })
        .catch((err) => {
            for (const item of err.errors) {
                showError(item.type, item.msg)
            }
        });
}

const validateOneField = (field, value) => {
    schema.validateAt([field], { [field]: value })
        .then((responseData) => {
            hideError(field)
        })
        .catch((err) => {
            showError(err.errors[0].type, err.errors[0].msg);
        });
}

for (let index = 0; index < formInputs.length - 1; index++) {
    document.querySelector(`#${formInputs[index].id}`).addEventListener('blur', (e) => {
        validateOneField(e.target.id, e.target.value);
    })
}

formRegisiter.addEventListener('submit', (e) => {
    e.preventDefault();
    validationAllForm(getData());
})
