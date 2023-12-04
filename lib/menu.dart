import 'package:bot_main/main.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MyFooter extends StatefulWidget {
  @override
  _MyFooterState createState() => _MyFooterState();
}

class _MyFooterState extends State {
  int selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.bottomCenter,
      child: Container(
        width: MediaQuery.of(context).size.width,
        height: 70,
        decoration: const BoxDecoration(
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(15),
            topRight: Radius.circular(15),
          ),
          color: Color.fromARGB(255, 34, 33, 33),
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 30),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              buildMenuItem('Главная', 'assets/menu_main.svg', 0),
              buildMenuItem('Аккаунты', 'assets/menu_acc.svg', 1),
              buildMenuItem('Поддержка', 'assets/menu_support.svg', 2),
              buildMenuItem('Рефералы', 'assets/menu_ref.svg', 3),
            ],
          ),
        ),
      ),
    );
  }

  Widget buildMenuItem(String title, String svgPath, int index) {
    bool isSelected = index == selectedIndex;
    return GestureDetector(
      onTap: () {
        setState(() {
          selectedIndex = index;
        });

        if (title == 'Главная') {
          Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => MyApp(),
              ));
        }

        // Добавьте вашу логику обработки нажатия
        print('Нажата кнопка: $title');
      },
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          SvgPicture.asset(
            svgPath,
            color: isSelected ? Colors.red : Colors.white,
            height: 30,
            width: 30,
          ),
          SizedBox(height: 1),
          AnimatedDefaultTextStyle(
            duration: Duration(milliseconds: 200),
            style: TextStyle(
              color: isSelected ? Colors.red : Colors.white,
              fontSize: 13,
            ),
            child: Text(title),
          ),
        ],
      ),
    );
  }
}
