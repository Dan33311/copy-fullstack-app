const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

 exports.SendEmail = functions.firestore
    .document('users/{usersId}')
    .onCreate((change, context) => { //https.onRequest((request, response) => {

    let information = change.data();

    const nodemailer = require("nodemailer");

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'fullstack.bictia@gmail.com', // generated ethereal user
          pass: 'parquenacional35', // generated ethereal password
        },
    });
    //https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60
    let emailOptions = {
        from: '"Daniel Fullstack Bictia 👽👻💩" <fullstack.bictia@gmail.com>',
        to: information.email,
        subject: 'Success register',
        text: 'Hello dudes! ✔',
        html: '<b>Welcome to '+information.name+' our awesome app!</b><br>Im a normal text, testing nodemailer<br><img src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt="Imagen para probar">'
    };
    return transporter.sendMail(emailOptions).then((data) => {
        resolve(data);
        return;
    }).catch((error) => {
        response.send(error);
        reject(error);
        return;
    });
      
    //response.send('correo enviado!') // ...func
 });
