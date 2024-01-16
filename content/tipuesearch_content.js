var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite \n', 'tags': '', 'url': 'About.html'}, {'title': 'w5', 'text': '// 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot sin(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n\n    return 0;\n} \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '', 'tags': '', 'url': 'w6.html'}, {'title': 'USA', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nint main() {\n    int width = 800;\n    int height = (int)(width / 1.9);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_usa_flag(img);\n\n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n}\n\nvoid draw_usa_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 国旗颜色\n    red = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹\n    blue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形\n\n    int stripe_height = height / 13;\n    int stripe_width = width;\n    int star_size = (int)(0.0308 * height); // 星星大小\n\n    for (int y = 0; y < height; y += stripe_height) {\n        if (y / stripe_height % 2 == 0) {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n        } else {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n        }\n    }\n\n    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\n    int star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距\n    int star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距\n    int star_start_x = (int)(0.125 * height); // 星星的起始X位置\n    int star_start_y = (int)(0.0485 * height); // 星星的起始Y位置\n\n    for (int row = 0; row < 9; row++) {\n        int starsPerRow = (row % 2 == 0) ? 6 : 5;\n\n        // 计算2、4、6和8排星星的偏移量\n        int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n\n        for (int star = 0; star < starsPerRow; star++) {\n            int x = star_start_x + star * star_spacing_x + offset_x;\n\n            // 旋转角度（以弧度为单位）\n            double rotation_angle = M_PI / 5; // 忘記多少度的旋转\n\n            int y = star_start_y + row * star_spacing_y;\n            draw_star(img, x, y, star_size, white, rotation_angle);\n        }\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    for (int i = 0; i < 10; i++) {\n        double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\n        int radius = (i % 2 == 0) ? size : size / 2;\n        points[i].x = x + radius * cos(angle);\n        points[i].y = y + radius * sin(angle);\n    }\n\n    // 用指定的颜色填充星星\n    gdImageFilledPolygon(img, points, 10, color);\n} \n \n', 'tags': '', 'url': 'USA.html'}, {'title': 'ROC', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue);\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    int height = (int)(width*2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_roc_flag(img);\n\n    FILE *outputFile = fopen("./roc_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    int sun_radius = (int)(width/8);\n\n    // Colors for the flag\n    red = gdImageColorAllocate(img, 242, 0, 0); // Red color\n    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes\n    blue = gdImageColorAllocate(img, 0, 41, 204); // Blue\n\n    // 繪製紅色矩形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n\n    // 繪製藍色矩形區域\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n\n    // 繪製太陽\n    draw_white_sun(img, center_x, center_y, sun_radius, white, red, blue);\n}\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue) {\n    float angle = 0;\n    int numRays = 12; // 光芒的數量\n\n    gdPoint points[3]; // 三個頂點的陣列\n\n    for (int i = 0; i < numRays; i++) {\n        angle = i * (2 * M_PI / numRays);\n        float x1 = center_x + cos(angle) * sun_radius;\n        float y1 = center_y + sin(angle) * sun_radius;\n\n        // 調整兩個底邊頂點的位置\n      float x2 = center_x + cos(angle + 0.35) * (sun_radius * 0.5);\n      float y2 = center_y + sin(angle + 0.35) * (sun_radius * 0.5);\n      float x3 = center_x + cos(angle - 0.35) * (sun_radius * 0.5);\n      float y3 = center_y + sin(angle - 0.35) * (sun_radius * 0.5);\n\n        // 設定多邊形的三個頂點\n        points[0].x = (int)x1;\n        points[0].y = (int)y1;\n        points[1].x = (int)x2;\n        points[1].y = (int)y2;\n        points[2].x = (int)x3;\n        points[2].y = (int)y3;\n\n        gdImageFilledPolygon(img, points, 3, white);\n    }\n  //外圈\n  gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.2, sun_radius * 1.2, blue);\n\n    // 繪製太陽內部\n    gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.1, sun_radius * 1.1, white);\n} \n \n', 'tags': '', 'url': 'ROC.html'}, {'title': 'w7', 'text': '', 'tags': '', 'url': 'w7.html'}, {'title': 'JAPAN', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red );\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    int height = 2 * width / 3;\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_japan_flag(img);\n\n    FILE *outputFile = fopen("./../images/japan_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_japan_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white ;\n    int center_x =  0.5 * width;\n    int center_y =  0.5 * height;\n    int sun_radius = 145 ;\n\n    // Colors for the flag\n    red = gdImageColorAllocate(img, 242, 0, 0); // Red color\n    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes\n\n\n    // 繪製白色矩形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n\n\n    // 繪製太陽內部\n    gdImageFilledEllipse(img, center_x, center_y, sun_radius * 3, sun_radius * 3, red);\n}\n \n \n', 'tags': '', 'url': 'JAPAN.html'}, {'title': 'PROC', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_chinese_flag(gdImagePtr img);\n\nint main() {\n    int width = 300; // 國旗寬度\n    int height = 200; // 國旗高度\n\n    gdImagePtr im = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(im, 0);\n\n    draw_chinese_flag(im);\n\n    FILE *outputFile = fopen("./../images/proc_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n\n    gdImagePngEx(im, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(im);\n\n    return 0;\n}\n\n// 声明 draw_star 函数\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nvoid draw_chinese_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, yellow;\n\n    // 國旗顏色\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色背景\n    yellow = gdImageColorAllocate(img, 255, 255, 0); // 黃色星星\n\n    // 畫紅色背景\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n\n    // 設置星星的大小和位置\n    int star_size = (int)(0.28 * height);\n    int star_x = (int)(0.165 * width);\n    int star_y = (int)(0.265 * height);\n\n    // 畫大星星\n    draw_star(img, star_x, star_y, star_size, yellow, 11.0);\n\n    // 繪製小星星，位置根據實際國旗比例計算\n    double radius = 0.15 * height;\n    double angle = 360 / 7 * M_PI / 179.0;\n    double rotation = -M_PI / 7.5;\n    int cx = (int)(0.32 * width);\n    int cy = (int)(0.27 * height);\n\n    for (int i = -1; i < 3; i++) {\n        int x = (int)(cx + radius * cos(i * angle + rotation));\n        int y = (int)(cy + radius * sin(i * angle + rotation));\n        draw_star(img, x, y, 19, yellow, M_PI / 5.0);\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    // 计算星形的五个外点和五个内点\n    double outer_radius = size / 2;\n    double inner_radius = size / 6;\n    double angle = M_PI / 5.0;\n\n    for (int i = 0; i < 10; i++) {\n        double radius = (i % 2 == 0) ? outer_radius : inner_radius;\n        double theta = rotation_angle + i * angle;\n        points[i].x = x + radius * cos(theta);\n        points[i].y = y + radius * sin(theta);\n    }\n\n    // 使用 gdImageFilledPolygon 绘制星形\n    gdImageFilledPolygon(img, points, 10, color);\n} \n \n', 'tags': '', 'url': 'PROC.html'}, {'title': 'UK', 'text': '#include <iostream>\n\nvoid drawUnionJack(int width, int height) {\n    // 繪製橫條紋\n    for (int i = 0; i < height; ++i) {\n        for (int j = 0; j < width; ++j) {\n            if (i == height / 2) {\n                std::cout << "-";\n            } else {\n                std::cout << " ";\n            }\n        }\n        std::cout << std::endl;\n    }\n\n    // 繪製直條紋\n    for (int i = 0; i < height; ++i) {\n        for (int j = 0; j < width; ++j) {\n            if (j == width / 2) {\n                std::cout << "|";\n            } else {\n                std::cout << " ";\n            }\n        }\n\n        // 在底部添加額外的空白行\n        if (i == height - 1) {\n            std::cout << std::endl;\n        } else {\n            std::cout << std::endl;\n        }\n    }\n}\n\nint main() {\n    int width, height;\n\n    // 設定較小的國旗寬度和高度\n    width = 20;\n    height = 10;\n\n    // 繪製英國國旗\n    drawUnionJack(width, height);\n\n    return 0;\n}\n \n \n', 'tags': '', 'url': 'UK.html'}, {'title': 'KOREA', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\n#define WIDTH 900\n#define HEIGHT 600\n#define FILENAME "south_korea_flag.png"\n\nint main() {\n    gdImagePtr im;\n    FILE *pngout;\n    int white, black, red, blue;\n\n    im = gdImageCreate(WIDTH, HEIGHT);\n\n    white = gdImageColorAllocate(im, 255, 255, 255);\n    black = gdImageColorAllocate(im, 0, 0, 0);\n    red = gdImageColorAllocate(im, 205, 0, 0);\n    blue = gdImageColorAllocate(im, 0, 56, 168);\n\n    // Background (white)\n    gdImageFilledRectangle(im, 0, 0, WIDTH, HEIGHT , white);\n\n    // Blue Circle (Yin-Yang Symbol)\n    gdImageFilledArc(im, WIDTH / 2, HEIGHT / 2, WIDTH / 3, HEIGHT / 2, 210, 30, red, gdArc);\n\n    // Red Circle (Yin-Yang Symbol)\n    gdImageFilledArc(im, WIDTH / 2, HEIGHT / 2, WIDTH / 3, HEIGHT / 2, 30, 210, blue, gdArc);\n\n  int circleX = 385;    // 圓心的 X 座標\n  int circleY = 262.5;   // 圓心的 Y 座標\n  int circleRadius = 75;     \n\n  // 繪製圓形\n  gdImageFilledEllipse(im, circleX, circleY, circleRadius * 2, circleRadius * 2, red);\n\n  int circleX2 = 515;    // 圓心的 X 座標\n\n int circleY2 = 337.5;\n\n  // 繪製圓形\n  gdImageFilledEllipse(im, circleX2, circleY2, circleRadius * 2, circleRadius * 2, blue);\n\n  {\n\n\n  // 起點和終點位置\n\n  int startX = 340;    \n  // 線的起點 X 座標\n\n  int startY = 90;   \n  // 線的起點 Y 座標\n\n  int endX = 200;     \n  // 線的終點 X 座標\n\n  int endY = 260;     \n  // 線的終點 Y 座標\n\n  int lineWidth = 23;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -35, startY -10, endX -35, endY -10, black);\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -70, startY -20, endX -70, endY -20, black);\n\n  int startX2 = 213;    \n  // 線的起點 X 座標\n\n  int startY2 = 270;   \n  // 線的起點 Y 座標\n\n  int endX2 = 133;     \n  // 線的終點 X 座標\n\n  int endY2 = 210;     \n  // 線的終點 Y 座標\n\n  int lineWidth2 = 25;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX2 +3, startY2, endX2 +3, endY2, white);\n\n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 -17, startY2 +9 , endX2 -17, endY2 +9 , white);\n\n  gdImageSetThickness(im, lineWidth );\ngdImageLine(im, startX2 +115, startY2 -145, endX2 +115, endY2 -145, white);\n\n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +120, startY2 -155, endX2 +120, endY2 -155, white);\n\n  gdImageSetThickness(im, lineWidth +12);\ngdImageLine(im, startX2 +145, startY2 -155, endX2 +145, endY2 -155, white);\n}\n  {\n    // 起點和終點位置\n\n  int startX = 330;    \n  // 線的起點 X 座標\n\n  int startY = 520;   \n  // 線的起點 Y 座標\n\n  int endX = 190;     \n  // 線的終點 X 座標\n\n  int endY = 350;     \n  // 線的終點 Y 座標\n\n  int lineWidth = 23;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -35, startY +10, endX -35, endY +10, black);\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -70, startY +20, endX -70, endY +20, black);\n\n  int startX2 = 213;    \n  // 線的起點 X 座標\n\n  int startY2 = 330;   \n  // 線的起點 Y 座標\n\n  int endX2 = 133;     \n  // 線的終點 X 座標\n\n  int endY2 = 390;     \n  // 線的終點 Y 座標\n\n  int lineWidth2 = 25;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth +8);\n  gdImageLine(im, startX2 -11, startY2, endX2 -11, endY2, white);\n\n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 -30, startY2 -9 , endX2 -30, endY2 -9 , white);\n\n  gdImageSetThickness(im, lineWidth );\ngdImageLine(im, startX2 +100, startY2 +150, endX2 +100, endY2 +150, white);\n\n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +120, startY2 +155, endX2 +120, endY2 +155, white);\n\n  gdImageSetThickness(im, lineWidth +14);\ngdImageLine(im, startX2 +145, startY2 +157, endX2 +145, endY2 +157, white);\n\n    gdImageSetThickness(im, lineWidth -10);\ngdImageLine(im, 232, 426, 206, 448, white);\n\n  }\n\n  {\n    // 起點和終點位置\n\n  int startX = 564;    \n  // 線的起點 X 座標\n\n  int startY = 520;   \n  // 線的起點 Y 座標\n\n  int endX = 704;     \n  // 線的終點 X 座標\n\n  int endY = 350;     \n  // 線的終點 Y 座標\n\n  int lineWidth = 23;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX +70, startY +20, endX +70, endY +20, black);\n\n    // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n\n    // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX +35, startY +10, endX +35, endY +10, black);\n\ngdImageSetThickness(im, lineWidth -10);\ngdImageLine(im, 624, 400, 734, 490, white);\n\n  int startX2 = 553;    \n  // 線的起點 X 座標\n\n  int startY2 = 330;   \n  // 線的起點 Y 座標\n\n  int endX2 = 633;     \n  // 線的終點 X 座標\n\n  int endY2 = 390;     \n  // 線的終點 Y 座標\n\n  int lineWidth2 = 25;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth +8);\n  gdImageLine(im, startX2 +139, startY2, endX2 +139, endY2, white);\n\n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 +157, startY2 -9 , endX2 +157, endY2 -9 , white);\n\n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +25, startY2 +155, endX2 +25, endY2 +155, white);\n\n  gdImageSetThickness(im, lineWidth +30);\ngdImageLine(im, startX2 -3, startY2 +170, endX2 , endY2 +170, white);\n  }\n  {\n    // 起點和終點位置\n\n  int startX = 330;    \n  // 線的起點 X 座標\n\n  int startY = 520;   \n  // 線的起點 Y 座標\n\n  int endX = 190;     \n  // 線的終點 X 座標\n\n  int endY = 350;     \n  // 線的終點 Y 座標\n\n  int lineWidth = 23;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -35, startY +10, endX -35, endY +10, black);\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX -70, startY +20, endX -70, endY +20, black);\n\n  int startX2 = 213;    \n  // 線的起點 X 座標\n\n  int startY2 = 330;   \n  // 線的起點 Y 座標\n\n  int endX2 = 133;     \n  // 線的終點 X 座標\n\n  int endY2 = 390;     \n  // 線的終點 Y 座標\n\n  int lineWidth2 = 25;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth +8);\n  gdImageLine(im, startX2 -11, startY2, endX2 -11, endY2, white);\n\n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 -30, startY2 -9 , endX2 -30, endY2 -9 , white);\n\n  gdImageSetThickness(im, lineWidth );\ngdImageLine(im, startX2 +100, startY2 +150, endX2 +100, endY2 +150, white);\n\n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +120, startY2 +155, endX2 +120, endY2 +155, white);\n\n  gdImageSetThickness(im, lineWidth +14);\ngdImageLine(im, startX2 +145, startY2 +157, endX2 +145, endY2 +157, white);\n\n    gdImageSetThickness(im, lineWidth -10);\ngdImageLine(im, 232, 426, 206, 448, white);\n\n  }\n  {\n    // 起點和終點位置\n\n  int startX = 564;    \n  // 線的起點 X 座標\n\n  int startY = 97;   \n  // 線的起點 Y 座標\n\n  int endX = 704;     \n  // 線的終點 X 座標\n\n  int endY = 267;     \n  // 線的終點 Y 座標\n\n  int lineWidth = 23;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX +70, startY -20, endX +70, endY -20, black);\n\n    // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX, startY, endX, endY, black);\n\n    gdImageSetThickness(im, lineWidth -10);\ngdImageLine(im, 624, 212, 734, 118, white);\n\n    // 繪製線段\n  gdImageSetThickness(im, lineWidth);\n  gdImageLine(im, startX +35, startY -10, endX +35, endY -10, black);\n\n  int startX2 = 553;    \n  // 線的起點 X 座標\n\n  int startY2 = 277;   \n  // 線的起點 Y 座標\n\n  int endX2 = 633;     \n  // 線的終點 X 座標\n\n  int endY2 = 217;     \n  // 線的終點 Y 座標\n\n  int lineWidth2 = 25;  // 線的寬度\n\n  // 繪製線段\n  gdImageSetThickness(im, lineWidth +8);\n  gdImageLine(im, startX2 +134, startY2, endX2 +134, endY2, white);\n\n  gdImageSetThickness(im, lineWidth +10);\ngdImageLine(im, startX2 +157, startY2 +9 , endX2 +157, endY2 +9 , white);\n\n  gdImageSetThickness(im, lineWidth);\ngdImageLine(im, startX2 +25, startY2 -155, endX2 +25, endY2 -155, white);\n\n    gdImageSetThickness(im, lineWidth +30);\ngdImageLine(im, startX2 -5, startY2 -155, endX2 -5, endY2 -155, white);\n\n  }\n\n    // Save image\nFILE *outputFile = fopen("./../images/korea_flag.png", "wb");\nif (outputFile == NULL) {\n    fprintf(stderr, "Error opening the output file.\\n");\n    return 1;\n}\n  gdImagePngEx(im, outputFile, 9);\n      fclose(outputFile);\n      gdImageDestroy(im);\n      return 0;\n  }\n \n \n', 'tags': '', 'url': 'KOREA.html'}, {'title': 'w12', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\n// Declare the rotation function\nvoid rotateFilledPolygon(int x_orig, int y_orig, double rotation_ang, gdPoint *points, int num_points) {\n    int i;\n    double angle_rad = rotation_ang * M_PI / 180.0;\n\n    for (i = 0; i < num_points; i++) {\n        int x = points[i].x - x_orig;\n        int y = points[i].y - y_orig;\n\n        points[i].x = x_orig + (int)(x * cos(angle_rad) - y * sin(angle_rad));\n        points[i].y = y_orig + (int)(x * sin(angle_rad) + y * cos(angle_rad));\n    }\n}\n\nint main() {\n    // Image dimensions\n    int width = 800;\n    int height = 600;\n\n    // Create a true-color image\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    // Open the output file\n    FILE *outputFile = fopen("hellogd1.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n\n    // Define color indices\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int blue = gdImageColorAllocate(img, 0, 0, 255);\n    int black = gdImageColorAllocate(img, 0, 0, 0);\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n\n    // Draw filled rectangles, ellipse, line, and polygons\n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n    gdImageFilledRectangle(img, 0, 0, (int)width / 4, (int)height / 4, blue);\n\n    gdImageFilledEllipse(img, (int)width * 3 / 4, (int)height / 4, (int)width / 4, (int)width / 4, red);\n    gdImageEllipse(img, (int)width * 3 / 4, (int)height * 3 / 4, (int)width / 4, (int)width / 4, red);\n    gdImageLine(img, (int)width / 2, (int)height / 2, (int)width / 2, (int)height / 2 + 100, blue);\n\n    gdPoint points[4] = {\n        { (int)width / 4, (int)height * 3 / 4 },\n        { (int)width / 4 + 100, (int)height * 3 / 4 },\n        { (int)width / 4 + 100, (int)height * 3 / 4 + 100 },\n        { (int)width / 4, (int)height * 3 / 4 + 100 }\n    };\n\n    // Call the rotation function for the first polygon\n    rotateFilledPolygon((int)width / 4 + 50, (int)height * 3 / 4 + 50, 45.0, points, 4);\n    gdImagePolygon(img, points, 4, black);\n\n    gdPoint points2[4] = {\n        { (int)width / 3, (int)height / 2 },\n        { (int)width / 3 + 100, (int)height / 2 },\n        { (int)width / 3 + 100, (int)height / 2 + 100 },\n        { (int)width / 3 - 50, (int)height / 2 + 100 }\n    };\n\n    // Call the rotation function for the second polygon\n    rotateFilledPolygon((int)width / 3 + 50, (int)height / 2 + 50, 30.0, points2, 4);\n    gdImageFilledPolygon(img, points2, 4, red);\n\n    // Save the image to the output file\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n\n    // Free the memory used by the image\n    gdImageDestroy(img);\n\n    return 0;\n}\n \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w15', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img, int line_thickness);\n\nint main() {\n    int width = 1200;\n    int height = (int)(width * 2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    int line_thickness = 4;  // 修改線條粗度為 4\n    draw_roc_flag(img, line_thickness);\n\n    FILE *outputFile = fopen("roc_flag_in_gd.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img, int line_thickness) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    int center_x = (int)(width / 4);\n    int center_y = (int)(height / 4);\n    int sun_radius = (int)(width / 8);\n    int white_circle_dia = sun_radius;\n    int blue_circle_dia = white_circle_dia + white_circle_dia * 2 / 15;\n\n    red = gdImageColorAllocate(img, 255, 0, 0);\n    white = gdImageColorAllocate(img, 255, 255, 255);\n    blue = gdImageColorAllocate(img, 0, 0, 149);\n\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n    gdImageFilledRectangle(img, 0, 0, (int)(width / 2.0), (int)(height / 2.0), blue);\n\n    // 利用一個藍色大圓與白色小圓畫出藍色環狀\n    gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\n    gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n\n    // 設定線條粗度\n    gdImageSetThickness(img, line_thickness);\n\n    // 不含太陽的部分\n\n    // 連接第二組ABED的白線\n    int ax = 429;\n    int ay = 125;\n    int bx = 279;\n    int by = 165;\n    int ex = 170;\n    int ey = 274;\n    int dx = 170;\n    int dy = 274;\n\n    gdImageLine(img, ax, ay, bx, by, white);\n    gdImageLine(img, bx, by, ex, ey, white);\n    gdImageLine(img, ex, ey, dx, dy, white);\n    gdImageLine(img, dx, dy, ax, ay, white);\n}\n \n \n \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'ansic', 'text': '1.編寫一個 C 程式來列印您的姓名、出生日期和手機號碼。 \n #include <stdio.h>\n\nint main()  \n{\n    // Print Name\n    printf("Name   : Andrew Wu\\n"); \n\n    // Print Date of Birth\n    printf("DOB    : June 8, 2005\\n"); \n\n    // Print Mobile Number\n    printf("Mobile : 06-200000000\\n"); \n\n    // Indicate successful execution\n    return(0); \n} \n \n \n 2.編寫一個 C 程式來取得您正在使用的 C 版本。 \n \n 輸出「We are using U18!」 \n \n #include <stdio.h>\n\nint main(int argc, char** argv) {\n    // Check for C standard version\n    #if __STDC_VERSION__ >=  201710L\n        printf("We are using C18!\\n");\n    #else\n        printf("We are using C89/C90!\\n");\n    #endif\n\n    // Indicate successful execution\n    return 0;\n}\n \n \n \n 3.寫一個 C 程序，使用 (#) 列印一個區塊 F，其中 F 的高度為 6 個字符，寬度為 5 個和 4 個字符。並且還列印一個非常大的“C”。 \n #include <stdio.h>\n\nint main() \n{\n    // Print a line of hashes\n    printf("######\\n");\n\n    // Print a single hash\n    printf("#\\n");\n\n    // Print a single hash\n    printf("#\\n");\n\n    // Print a line of hashes\n    printf("#####\\n");\n\n    // Print a single hash\n    printf("#\\n");\n\n    // Print a single hash\n    printf("#\\n");\n\n    // Print a single hash\n    printf("#\\n");\n\n    // Print top line of pattern\n    printf("    ######\\n");\n\n    // Print second line of pattern\n    printf("  ##      ##\\n");\n\n    // Print lines 3 to 7 of pattern\n    printf(" #\\n");\n    printf(" #\\n");\n    printf(" #\\n");\n    printf(" #\\n");\n    printf(" #\\n");\n\n    // Print bottom line of pattern\n    printf("  ##      ##\\n");\n\n    // Print last line of pattern\n    printf("    ######\\n");\n\n    return 0;\n}\n \n \n \n 4.寫一個C 程序，反向列印"X、M、L"字元。 \n #include <stdio.h>\n\nint main()\n{\n// Declare and initialize character variables\nchar char1 = \'X\';\nchar char2 = \'M\';\nchar char3 = \'L\';\n\n// Print the reversed characters as "LMX"\nprintf("The reverse of %c%c%c is %c%c%c\\n",\nchar1, char2, char3,\nchar3, char2, char1);\n\nreturn 0;\n} \n \n \n 5.寫一個 C 程式來計算高 7 英吋、寬 5 英吋的矩形的周長和面積。 \n \n 輸出「矩形週長 = 24 英吋， 矩形面積 = 35 平方英吋」 \n \n #include <stdio.h> \n\n/* \n   Variables to store the width and height of a rectangle in inches \n*/\nint width;          \nint height;         \n\nint area;           /* Variable to store the area of the rectangle */\nint perimeter;      /* Variable to store the perimeter of the rectangle */\n\nint main() {\n    /* Assigning values to height and width to meet the specified conditions */\n    height = 7;  // You can adjust these values to get the desired perimeter and area\n    width = 5;\n\n    /* Calculating the perimeter of the rectangle */\n    perimeter = 2 * (height + width);\n    printf("Rectangle perimeter = %d inches\\n", perimeter);\n\n    /* Calculating the area of the rectangle */\n    area = height * width;\n    printf("Rectangle area = %d square inches\\n", area);\n\n    return 0;\n}\n \n \n \n 6.寫一個 C 程式來計算給定半徑的圓的周長和面積。 \n \n 輸出「圓的周長 = 37.680000 英吋，圓 的面積 = 113.040001 平方英吋」 \n \n #include <stdio.h>\n\nint main() {\n    float radius;       /* Variable to store the radius of the circle */\n    float area, perimeter; /* Variables to store the area and perimeter of the circle */ \n\n    /* Assigning a value to the radius */\n    radius = 6.0;\n\n    /* Calculating the perimeter of the circle */\n    perimeter = 2 * 3.14 * radius;\n    printf("Circle perimeter = %f inches\\n", perimeter);\n\n    /* Calculating the area of the circle */\n    area = 3.14 * radius * radius;\n    printf("Circle area = %f square inches\\n", area);\n\n    return 0;\n}\n \n \n \n 7.寫一個 C 程式來顯示多個變數。 \n \n int a = 125，b = 12345； 長斧=1234567890； 短 s = 4043； 浮動x = 2.13459； 雙 dx = 1.1415927； 字符c = \'W\'; 無符號長 ux = 2541567890； \n \n #include <stdio.h>\n\nint main()\n{\n    int a = 125, b = 12345;        /* Declare and initialize integer variables */\n    long long_ax = 1234567890;     /* Declare and initialize long integer variable */\n    short s = 4043;                /* Declare and initialize short integer variable */\n    float x = 2.13459;             /* Declare and initialize floating-point variable */\n    double dx = 1.1415927;         /* Declare and initialize double precision variable */\n    char c = \'W\';                  /* Declare and initialize character variable */\n    unsigned long ux = 2541567890; /* Declare and initialize unsigned long integer variable */\n\n    /* Various arithmetic operations and type conversions */\n    printf("a + c =  %d\\n", a + c);\n    printf("x + c = %f\\n", x + c);\n    printf("dx + x = %f\\n", dx + x);\n    printf("((int) dx) + long_ax =  %lld\\n", ((int) dx) + long_ax);\n    printf("a + x = %f\\n", a + x);\n    printf("s + b =  %d\\n", s + b);\n    printf("long_ax + b = %lld\\n", long_ax + b);\n    printf("s + c =  %hd\\n", s + c);\n    printf("long_ax + c = %lld\\n", long_ax + c);\n    printf("long_ax + ux = %lu\\n", long_ax + ux);\n\n    return 0;\n}\n \n \n \n 8.編寫一個 C 程序，將指定的日期轉換為年、週和日。 \n \n 輸出「年：3， 週：33， 天：3」 \n \n #include <stdio.h>\n\nint main()\n{\n    int days, years, weeks;\n\n    days = 1329; // 總天數\n\n    // 轉換天數為年、週和天\n    years = days / 365; // 計算年份\n    weeks = (days % 365) / 7; // 計算週數\n    days = (days % 365) % 7; // 計算剩餘的天數\n\n    // 印出結果\n    printf("Years: %d\\n", years);\n    printf("Weeks: %d\\n", weeks);\n    printf("Days: %d\\n", days);\n\n    return 0;\n}\n \n \n \n 9.寫一個 C 程序，接受使用者提供的兩個整數併計算這兩個整數的和。 \n \n 測試資料： 輸入第一個整數：25 輸入第二個整數：38 預期輸出： 以上兩個整數總和 = 63 \n \n #include <stdio.h>\n\nint main() \n{\n    int x = 25, y = 38, sum; // 使用固定數值 25 和 38\n\n    sum = x + y; // 計算總和\n\n    // 印出總和\n    printf("兩個整數 %d 和 %d 的總和 = %d\\n", x, y, sum);\n\n    return 0; // 表示程式執行成功\n}\n \n \n \n \n 10.寫一個 C 程序，接受使用者提供的兩個整數併計算這兩個整數的乘積。 \n \n 測試資料： 輸入第一個整數：25 輸入第二個整數：15 預期輸出： 以上兩個整數的乘積 = 375 \n \n #include <stdio.h>\n\nint main() \n{\n    int x = 25, y = 15, result; // 使用固定數值 25 和 15\n\n    result = x * y; // 計算乘積\n\n    // 印出乘積\n    printf("兩個整數 %d 和 %d 的乘積 = %d\\n", x, y, result);\n\n    return 0; // 表示程式執行成功\n}\n \n \n \n', 'tags': '', 'url': 'ansic.html'}, {'title': 'c_ex', 'text': '1.Say Hello World! \n #include <stdio.h>\nvoid main()\n{\n /* 印出 Hello */\nprintf("Hello World!");\n} \n \n \n 2.Say Hello World! Bye Bye. \n #include <stdio.h>\nint main()\n{\n/* 印出 Hello World! Bye Bye */\nprintf("Hello World! ");\nprintf("Bye ");\nprintf("Bye");\nreturn 0;\n}\n \n \n \n 3.變數宣告的例子 \n #include <stdio.h>\nint main()\n{\nint a = 1;\nint A = 8;\nint b = 2, c;\nc = A - a + b;\n/* 輸出 a, A, b, c 到螢幕 */\nprintf( "a = %d, A = %d, b = %d, c = %d ", a, A, b, c );\nreturn 0;\n} \n \n \n 4.浮點運算的程式 \n #include <stdio.h>\nvoid main()\n{\nfloat a = 0.5;\ndouble b = 1.2;\nint c = 3;\nb = b + a + c;\n/* 輸出 a, b, c 到螢幕 */\nprintf( " a = %3.1f, b = %3.1f, c = %d ", a ,b, c );\n}\n \n \n \n 5.字元範例 \n #include <stdio.h>\nint main()\n{\nchar x, y;\nx = \'a\';\ny = (char)97;\n/* 輸出 x, y, x, 最後一個是以 ASCII 值顯示 y */\nprintf( " x = %c, y = %c, ASCII of y = %d", x, y, y );\nreturn 0;\n} \n \n \n 6.digital \n #include <stdio.h>\n\nint main() {\n    int a = 64;\n    int b = 0x40;\n    long c = 64L;\n\n    printf("%d, %d, %ld", a, b, c);\n\n    return 0;\n}\n \n \n \n 7.輸入一個字元 \n #include <stdio.h>\n\nint main() {\n    char ch;\n\n    printf("Input a char: ");\n    scanf("%c", &ch);\n\n    printf("You entered: %c\\n", ch);\n\n    return 0;\n}\n \n \n \n 8.輸入一個整數 \n #include <stdio.h>\nint main()\n{\nint i;\nprintf("Input an integer:");\nscanf( "%d", &i ); /* ch 前面加個 &(位址運算元) */\nprintf( "the number is %d", i );\nreturn 0;\n}\n \n \n \n 9.基本運算範例 \n #include<stdio.h>\nint main()\n{\nint a,b;\na = 10; b = 3;\nprintf( "%d \\n", a * b );\nprintf( "%d \\n", a / b );\nprintf( "%d \\n", a + b );\nprintf( "%d \\n", a - b );\nprintf( "%d \\n", a % b );\nreturn 0;\n} \n \n \n 10.關係運算元的範例 \n #include <stdio.h>\nint main()\n{\nint a = 10, b = 5;\nprintf( " a == b is %d \\n", a == b );\nprintf( " a > b is %d \\n", a > b );\nprintf( " a < b is %d \\n", a < b );\nprintf( " a >= b is %d \\n", a >= b );\nprintf( " a <= b is %d \\n", a <= b );\nprintf( " a != b is %d \\n", a != b );\nprintf( "\\n" );\nb = 10;\nprintf( " a == b is %d \\n", a == b );\nprintf( " a > b is %d \\n", a > b );\nprintf( " a < b is %d \\n", a < b );\nprintf( " a >= b is %d \\n", a >= b );\nprintf( " a <= b is %d \\n", a <= b );\nprintf( " a != b is %d \\n", a != b );\nreturn 0;\n} \n \n', 'tags': '', 'url': 'c_ex.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': '期末總結', 'text': '在這堂課程中，我學習到了許多關於c語言及網路設定等我平時接觸不到的領域，像是使用Replit 編程程式語言運行和協作代碼，和使用GitHub Push網站編輯內容等。 \n \n 其操作介面全是英文的，包括c語言內容也是，這讓我意識到我的英文單字量不足，雖然這些英文單字在日常生活中可能比較少會使用到，但是在編寫程式時，若不了解這些單字的意思，很容易沒有辦法完成想要做的內容。 \n \n 另外，我也使用了ChatGPT輔助編輯，一開始我只會問出我想要的答案，卻沒有仔細區鑽研內容，後來我發現這些內容都很重要，且ChatGPT給的內容不一定全正確，也要依情況自行修改，此情況更能襯托出了解英文單字和程式碼的重要性，且透過多次的練習和提問後，我能更準確的使用ChatGPT獲得想要的答案及內容。 \n \n 除此之外，經過老師的分享和指導，我也了解到使用GitHub上傳編輯內容訊息時，也要說明清楚和了解差異，除了可以隨時追蹤自己的進度以外，也能更清楚的自覺當下之所為何事。 \n \n 運用了上述的工具及老師的分享 ，不僅僅提升了我對c語言的認知、網路的認知，還了解關注資訊時事的重要性。經過了以上課程後，也漸漸提升了我自學的能力，對我來說是很重要且很寶貴的經驗。 \n  editor2 結束  \n \n \n', 'tags': '', 'url': '期末總結.html'}]};