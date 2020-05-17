import pycurl
from io import BytesIO 

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

    # Decode the bytes stored in get_body to HTML and print the result 
    print('Output of GET request:\n%s' % get_body.decode('utf8')) 

    crl.close()
except:
    print("Something went wrong :(")

    crl.close()