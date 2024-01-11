#include <stdio.h>

int main() {
    float a = 0.5;
    double b = 1.2;
    int c = 3;
    b = b + a + c;

    // 輸出 a, b, c 到螢幕
    printf("a = %3.1f, b = %3.1f, c = %d", a, b, c);

    // 返回 0 表示程序正確結束
    return 0;
}
