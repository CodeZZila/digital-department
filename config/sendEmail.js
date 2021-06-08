const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'digitaldepartment22@gmail.com',
        pass: 'zsxadc1234',
    },
})
exports.send = async function enterEmail(email,name, surname, login, password) {
    await transporter.sendMail({
        from: '"Digital Department" <digitaldepartment22@gmail.com>',
        to: email,
        subject: 'Реєстрація нового користувача',
        text: 'This message was sent from Node js server.',
        html:
            `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Demystifying Email Design</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="margin: 0; padding: 0; color: #343434; font-family: Arial, sans-serif; font-size: 24px;">
    <table align="center" border="1" bordercolor="#eee" cellpadding="0" cellspacing="0" width="600">
        <tr>
            <td align="center" bgcolor="#171720" style="padding: 30px 0 30px 0; color: #ffff; 
            font-size: 1em;
            font-weight: 100;
            letter-spacing: 0.5em;
            color: white;">
                Digital Department
               </td>
        </tr>
        <tr>
            <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                <table cellpadding="0" cellspacing="0" width="100%">
                 <tr style="padding: 5px 0 0 0; ">
                  <td >
                      Вітаємо, ${name} ${surname}!
                  </td>
                 </tr>
                 <tr style="padding: 25px 0 0 0;">
                  <td>
                      Вас було зареєстровано у сервісі <b>Digital Department</b>  як викладача.
                  </td>
                 </tr>
                 <tr style="padding: 25px 0 0 0;">
                  <td>
                      Ваші дані для входу:
                  </td>
                 </tr>
                 <tr>
                    <table style="padding: 40px 30px 40px 30px;"  cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                         <td width="260" valign="top">
                          <table  cellpadding="0" cellspacing="0" width="100%">
                           <tr>
                            <td>
                                Логін
                            </td>
                           </tr>
                           <tr>
                            <td style="padding: 5px 0 0 0;">
                             Пароль
                            </td>
                           </tr>
                          </table>
                         </td>
                         <td style="font-size: 0; line-height: 0;" width="20">
                          &nbsp;
                         </td>
                         <td width="260" valign="top">
                          <table  cellpadding="0" cellspacing="0" width="100%">
                           <tr>
                            <td>
                                ${login}
                            </td>
                           </tr>
                           <tr>
                            <td style="padding: 5px 0 0 0;">
                                ${password}
                            </td>
                           </tr>
                          </table>
                         </td>
                        </tr>
                       </table>
                 </tr>
                </table>
               </td>
        </tr>
        
       </table>
</body>
</html>`
    })
}