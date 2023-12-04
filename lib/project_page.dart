import 'package:bot_main/menu.dart';
import 'package:bot_main/providers/main_provider.dart';
import 'package:bot_main/route_page.dart';
import 'package:flutter/material.dart';
import 'package:bot_main/rep/api_route.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

// void main() {
//   runApp(MyApp());
// }
class ProjectApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<ProjectApp> {
  String? selectedProject;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        color: Colors.black,
      ),
      child: Scaffold(
        backgroundColor: Colors.transparent,
        body: Stack(
          children: <Widget>[
            Positioned(
              top: 40,
              left: 320,
              child: Container(
                width: 26,
                height: 26,
                child: Image.asset('assets/setting.png'),
              ),
            ),
            Positioned(
              top: 40,
              right: 340,
              child: IconButton(
                icon: Container(
                  width: 26,
                  height: 26,
                  child: Image.asset('assets/CaretLeft.png'),
                ),
                onPressed: () {
                  Navigator.pop(context);
                },
              ),
            ),
            Positioned(
              top: 35,
              left: 165,
              child: Container(
                width: 39,
                height: 33,
                child: Image.asset('assets/VectorWhite.png'),
              ),
            ),
            Expanded(
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    const Padding(
                      padding: EdgeInsets.only(bottom: 5, left: 35),
                      child: Align(
                        alignment: Alignment.centerLeft,
                        child: Text(
                          'Выберите проект:',
                          style: TextStyle(
                            color: Color.fromARGB(255, 85, 83, 83),
                            fontFamily: 'Roboto Mono',
                            fontSize: 17,
                          ),
                        ),
                      ),
                    ),
                    Container(
                      width: 350,
                      decoration: BoxDecoration(
                        color: Color.fromRGBO(255, 255, 255, 0.13),
                        borderRadius: BorderRadius.circular(15),
                      ),
                      child: Padding(
                        padding: const EdgeInsets.only(
                          left: 11,
                          top: 10,
                          bottom: 10,
                        ),
                        child: Column(
                          children: [
                            // buildRowWithDivider('BASE'),
                            buildRowWithDivider('ZKSYNC'),
                            buildRowWithDivider('SCROLL'),
                            // buildRowWithDivider('LINEA'),
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(height: 20),
                    Container(
                      height: 60,
                      width: 201,
                      child: ElevatedButton(
                        style: ElevatedButton.styleFrom(
                          primary: Color.fromRGBO(177, 34, 0, 1),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10),
                          ),
                        ),
                        onPressed: selectedProject != null
                            ? () async {
                                print('Выбранный проект: $selectedProject');
                                final routeDict = await ProjectApi()
                                    .getData(selectedProject!);

                                if (context.mounted) {
                                  Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) =>
                                              NextPage(routeData: routeDict)));
                                }
                              }
                            : null,
                        child: const Text(
                          'Далее',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 18,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            Align(
              alignment: Alignment.bottomCenter,
              child: MyFooter(),
            )
          ],
        ),
      ),
    );
  }

  Widget buildRow(String name) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: GestureDetector(
        onTap: () {
          setState(() {
            selectedProject = name;
          });
        },
        child: Row(
          children: [
            Container(
                width: 55,
                height: 55,
                decoration: const BoxDecoration(
                  color: Colors.white,
                  shape: BoxShape.circle,
                ),
                child: Stack(children: [
                  Center(
                    child: Image.asset(
                      "assets/Vector.png",
                      scale: 3.8,
                    ),
                  )
                ])),
            const SizedBox(width: 21),
            Text(
              name,
              style: TextStyle(
                  color: selectedProject == name ? Colors.black : Colors.white,
                  fontSize: 17),
            ),
          ],
        ),
      ),
    );
  }

  Widget buildRowWithDivider(String name) {
    return Column(
      children: [
        buildRow(name),
        const SizedBox(
          height: 10,
        ),
        const Padding(
          padding: EdgeInsets.only(left: 84),
          child: Divider(
            color: Colors.grey,
            thickness: 1,
            // height: 30,
          ),
        ),
      ],
    );
  }
}
