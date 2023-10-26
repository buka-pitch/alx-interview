#!/usr/bin/python3
"""validate a given data if its a utf-8 encoded
"""


def validUTF8(data):
    """method that determines if data represents a valid UTF-8 encoding
       Args:
          data(List of intergers): data to verify
       Return:
          True or False
    """
    
    
    if len(data) == 0:
        return True
    
    for i in range(len(data)):
        if data[i] > 255:
            return False
        
    return
