#include <stdio.h>

int main()
{
    int a = 125, b = 12345;        /* Declare and initialize integer variables */
    long long_ax = 1234567890;     /* Declare and initialize long integer variable */
    short s = 4043;                /* Declare and initialize short integer variable */
    float x = 2.13459;             /* Declare and initialize floating-point variable */
    double dx = 1.1415927;         /* Declare and initialize double precision variable */
    char c = 'W';                  /* Declare and initialize character variable */
    unsigned long ux = 2541567890; /* Declare and initialize unsigned long integer variable */

    /* Various arithmetic operations and type conversions */
    printf("a + c =  %d\n", a + c);
    printf("x + c = %f\n", x + c);
    printf("dx + x = %f\n", dx + x);
    printf("((int) dx) + long_ax =  %lld\n", ((int) dx) + long_ax);
    printf("a + x = %f\n", a + x);
    printf("s + b =  %d\n", s + b);
    printf("long_ax + b = %lld\n", long_ax + b);
    printf("s + c =  %hd\n", s + c);
    printf("long_ax + c = %lld\n", long_ax + c);
    printf("long_ax + ux = %lu\n", long_ax + ux);

    return 0;
}
