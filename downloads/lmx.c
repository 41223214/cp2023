#include <stdio.h>

int main() 
{
    // Declare and initialize character variables
    char char1 = 'X';
    char char2 = 'M';
    char char3 = 'L';

    // Print the reversed characters as "LMX"
    printf("The reverse of %c%c%c is %c%c%c\n",
        char1, char2, char3,
        char3, char2, char1);

    return 0;
}
