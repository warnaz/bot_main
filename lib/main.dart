import 'package:bot_main/project_page.dart';
import 'package:bot_main/providers/main_provider.dart';
import 'package:flutter/material.dart';
import 'package:bot_main/menu.dart';
import 'package:provider/provider.dart';
import 'package:flutter_telegram_web_app/flutter_telegram_web_app.dart' as tg;

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => SelectionModel(),
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  final initData = tg.initData.toString();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'User App',
        theme: ThemeData(
            primarySwatch: Colors.blue,
            visualDensity: VisualDensity.adaptivePlatformDensity,
            fontFamily: 'Wadik'),
        home: Scaffold(
          body: Stack(children: <Widget>[
            Expanded(
              child: MyHomePage(),
            ),
            Align(
              alignment: Alignment.bottomCenter,
              child: MyFooter(),
            )
          ]),
        ));
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Stack(
        children: [
          Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                const Text(
                  'dkhstt',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 40,
                  ),
                ),
                const Text(
                  'Тарифный план:',
                  style: TextStyle(
                    color: Color.fromARGB(255, 84, 82, 82),
                    fontSize: 13,
                  ),
                ),
                const SizedBox(height: 30),
                ElevatedButton(
                  onPressed: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => ProjectApp(),
                        ));
                  },
                  style: ElevatedButton.styleFrom(
                    primary: Color(0xffB12200),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    minimumSize: Size(201, 60),
                  ),
                  child: const Text(
                    'ПРОЕКТЫ',
                    style: TextStyle(fontSize: 18, color: Colors.white),
                  ),
                ),
                const SizedBox(height: 10),
                ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    primary: const Color(0xffB12200),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    minimumSize: Size(201, 60),
                  ),
                  child: const Text(
                    'OKX',
                    style: TextStyle(fontSize: 18, color: Colors.white),
                  ),
                ),
                const SizedBox(height: 10),
                ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    primary: const Color(0xffB12200),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    minimumSize: const Size(201, 60),
                  ),
                  child: const Text(
                    'ПОРТФОЛИО',
                    style: TextStyle(fontSize: 17, color: Colors.white),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
