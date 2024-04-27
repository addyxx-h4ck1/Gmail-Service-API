//POP UPS
const onSuccess = document.querySelector('.pop-up')
const onError = document.querySelector('.pop-up2')
const onValidate = document.querySelector('.pop-up3')
//spinner
const spinner = document.querySelector('.spinner')
//form
const form = document.querySelector('form')
//submit button
const submit = document.querySelector('.submit')
//input Values
let name = document.getElementById('name')
let email = document.getElementById('email')
let subject = document.getElementById('subject')
let message = document.getElementById('message')

//function < Returns a Promise >//
async function sendMail() {
  //email object
  const formDetails = new FormData(form)
  let mailObject = Object.fromEntries(formDetails.entries())
  //send POST request
  submit.style.display = 'none'
  spinner.style.display = 'block'
  try {
    let urlEndpoint = '/api/v1/mail-service'
    let headerObj = { 'Content-Type': 'application/json' }
    const sendReq = await fetch(urlEndpoint, {
      method: 'POST',
      headers: headerObj,
      body: JSON.stringify(mailObject),
    })

    const res = await sendReq.json()
    return res
  } catch (error) {
    return error
  }
}

submit.addEventListener('click', (e) => {
  e.preventDefault()
  if (
    name.value === '' ||
    email.value === '' ||
    subject.value === '' ||
    message.value === ''
  ) {
    onValidate.style.display = 'block'
    setTimeout(() => {
      onValidate.style.display = 'none'
    }, 2000)
  } else {
    sendMail()
      .then((res) => {
        spinner.style.display = 'none'
        submit.style.display = 'block'
        // empty the values
        name.value = ''
        email.value = ''
        subject.value = ''
        message.value = ''
        if (res.ok) {
          onSuccess.style.display = 'block'
          setTimeout(() => {
            onSuccess.style.display = 'none'
            // console.log(res)
          }, 2000)
        } else {
          onError.style.display = 'block'
          setTimeout(() => {
            onError.style.display = 'none'
          }, 2000)
        }
      })
      .catch((err) => console.log(err))
  }
})
