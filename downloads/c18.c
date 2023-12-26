#include <stdio.h>

int main(int argc, char** argv) {
    // Check for C standard version
    #if __STDC_VERSION__ >=  201710L
        printf("We are using C18!\n");
    #else
        printf("We are using C89/C90!\n");
    #endif

    // Indicate successful execution
    return 0;
}
