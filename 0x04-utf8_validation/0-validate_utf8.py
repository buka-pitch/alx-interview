#!/usr/bin/python3
"""validate a given data if its a utf-8 encoded
"""


def validUTF8(data):
    """
    validates a given data set represents a valid utf-8 encoding
    the data set contains list of integers
    """


    for i in data:
        if i > 255:
            return False
        try:
            i.encode('utf-8')
            continue
        except UnicodeDecodeError:
            return False
    return True    