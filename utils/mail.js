import nodemailer from "nodemailer";

const sendMail=()=>{        
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'xyz@gmail.com',
            pass: 'harman'
        }
    });

    let mailDetails = {
        from: 'xyz@gmail.com',
        to: '2002hpsingh@gmail.com',
        subject: 'Test mail',
        text: 'Node.js testing mail for GeeksforGeeks'
    };

    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent successfully');
        }
    });
}

export default sendMail;