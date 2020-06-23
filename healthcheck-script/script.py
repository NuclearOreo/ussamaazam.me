import pycurl
from io import BytesIO
import smtplib
import os

def notification():
    # Grabing all the ENV variables
    sender = os.getenv('SENDER')
    recever = [os.getenv('RECEIVER')]
    password = os.getenv('EMAIL_PASSWORD')

    b_obj = BytesIO() 
    crl = pycurl.Curl()

    # Set URL value
    crl.setopt(crl.URL, 'https://www.ussamaazam.me/')

    # Write bytes that are utf-8 encoded
    crl.setopt(crl.WRITEDATA, b_obj)

    try:
        # Perform a file transfer 
        crl.perform()
        get_body = b_obj.getvalue()
        crl.close()

        return get_body
    except:
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

def job(request, context):
    notification()