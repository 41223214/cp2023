#include <iostream>

void drawUnionJack(int width, int height) {
    // 繪製橫條紋
    for (int i = 0; i < height; ++i) {
        for (int j = 0; j < width; ++j) {
            if (i == height / 2) {
                std::cout << "-";
            } else {
                std::cout << " ";
            }
        }
        std::cout << std::endl;
    }

    // 繪製直條紋
    for (int i = 0; i < height; ++i) {
        for (int j = 0; j < width; ++j) {
            if (j == width / 2) {
                std::cout << "|";
            } else {
                std::cout << " ";
            }
        }

        // 在底部添加額外的空白行
        if (i == height - 1) {
            std::cout << std::endl;
        } else {
            std::cout << std::endl;
        }
    }
}

int main() {
    int width, height;

    // 設定較小的國旗寬度和高度
    width = 20;
    height = 10;

    // 繪製英國國旗
    drawUnionJack(width, height);

    return 0;
}
