import 'package:flutter/material.dart';

class AccountStatusPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        title: Text('Статус аккаунта', style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.black,
        leading: IconButton(
            icon: Container(
              width: 26,
              height: 26,
              child: Image.asset("assets/CaretLeft.png"),
            ),
            onPressed: () {
              Navigator.pop(context);
            }),
      ),
      body: const Center(
          child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          SizedBox(
            height: 100,
          ),
          Text('Кошелек добавлен!',
              style: TextStyle(
                color: Colors.white,
                fontSize: 24,
              ))
        ],
      )),
      bottomNavigationBar: Padding(
        padding: EdgeInsets.all(30.0), // Отступ от краёв экрана
        child: Container(
          height: 60.0,
          child: TextButton(
            style: TextButton.styleFrom(
              backgroundColor:
                  Color.fromRGBO(177, 34, 0, 1), // Цвет фона кнопки
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(10.0), // Скругление углов
              ),
              primary: Colors.white, // Цвет текста и иконки
              minimumSize: Size(201, 60), // Минимальный размер кнопки
            ),
            onPressed: () {
              // Добавьте ваше действие для кнопки "Домой" здесь
              Navigator.of(context).popUntil((route) => route.isFirst);
            },
            child: Text(
              'Домой',
              style: TextStyle(fontSize: 20.0), // Размер текста
            ),
          ),
        ),
      ),
    );
  }
}
