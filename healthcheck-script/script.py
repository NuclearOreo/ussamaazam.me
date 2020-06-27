import smtplib
import os
import requests

def check_website():
    try:
        r = requests.get('https://www.ussamaazam.me', verify=False)
        pingstatus = "Network Active"
    except:
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

def job(event, context):
    return check_website()

print(job("", ""))