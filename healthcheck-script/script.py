import smtplib
import os

def check_ping():
    hostname = "www.ussamaazam.me"
    response = os.system("ping -c 1 " + hostname)
    # and then check the response...
    if response == 0:
        pingstatus = "Network Active"
    else:
        # Grabing all the ENV variables
        sender = os.getenv('SENDER')
        receiver = [os.getenv('RECEIVER')]
        password = os.getenv('EMAIL_PASSWORD')

        # Message of the email
        message = """
                    Your website is down.
                  """
    
        # Setting up connection for email
        server = smtplib.SMTP('smtp.mail.yahoo.com', 587)
        server.ehlo()
        server.starttls()
        server.login(sender, password)

        # Sending that email
        server.sendmail(sender, receiver, message)
        pingstatus = "Network Error"

    return pingstatus

def job(request):
    check_ping()
