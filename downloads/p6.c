#include <stdio.h>

int main() {
    float radius;       /* Variable to store the radius of the circle */
    float area, perimeter; /* Variables to store the area and perimeter of the circle */ 

    /* Assigning a value to the radius */
    radius = 6.0;

    /* Calculating the perimeter of the circle */
    perimeter = 2 * 3.14 * radius;
    printf("Circle perimeter = %f inches\n", perimeter);

    /* Calculating the area of the circle */
    area = 3.14 * radius * radius;
    printf("Circle area = %f square inches\n", area);

    return 0;
}
