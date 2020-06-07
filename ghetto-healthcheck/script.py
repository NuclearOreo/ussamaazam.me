import pycurl
from io import BytesIO
import smtplib
import os

b_obj = BytesIO() 
crl = pycurl.Curl() 

# Set URL value
crl.setopt(crl.URL, 'https://www.ussamazam.me/')

# Write bytes that are utf-8 encoded
crl.setopt(crl.WRITEDATA, b_obj)

try:
    # Perform a file transfer 
    crl.perform()
    get_body = b_obj.getvalue()

    # Decode the bytes stored in get_body to HTML and print the result 
    print('Output of GET request:\n%s' % get_body.decode('utf8')) 

    crl.close()
except:
    sender = os.getenv('SENDER')
    receiver = [os.getenv('RECIEVER')]
    password = os.getenv('EMAIL_PASSWORD')

    message = """
                Your website is down.
              """


    server = smtplib.SMTP('smtp.mail.yahoo.com', 587)
    server.ehlo()
    server.starttls()
    server.login(sender, password)

    server.sendmail(sender, receiver, message)

    crl.close()