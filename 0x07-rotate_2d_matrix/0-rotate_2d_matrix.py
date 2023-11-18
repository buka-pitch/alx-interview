#!/usr/bin/python3

def rotate_2d_matrix(Matrix):
    """
    Rotate 2D Matrix
    """
    N = len(Matrix[0])
    for i in range(N // 2):
        for j in range(i, N - i - 1):
            temp = Matrix[i][j]
            Matrix[i][j] = Matrix[N - 1 - j][i]
            Matrix[N - 1 - j][i] = Matrix[N - 1 - i][N - 1 - j]
            Matrix[N - 1 - i][N - 1 - j] = Matrix[j][N - 1 - i]
            Matrix[j][N - 1 - i] = temp
