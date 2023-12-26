#include <stdio.h> 

/* 
   Variables to store the width and height of a rectangle in inches 
*/
int width;          
int height;         

int area;           /* Variable to store the area of the rectangle */
int perimeter;      /* Variable to store the perimeter of the rectangle */

int main() {
    /* Assigning values to height and width to meet the specified conditions */
    height = 7;  // You can adjust these values to get the desired perimeter and area
    width = 5;

    /* Calculating the perimeter of the rectangle */
    perimeter = 2 * (height + width);
    printf("Rectangle perimeter = %d inches\n", perimeter);

    /* Calculating the area of the rectangle */
    area = height * width;
    printf("Rectangle area = %d square inches\n", area);

    return 0;
}
