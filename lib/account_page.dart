import 'package:bot_main/ac_settings_page.dart';
import 'package:bot_main/add_account_page.dart';
import 'package:bot_main/menu.dart';
import 'package:bot_main/providers/main_provider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class WalletPage extends StatefulWidget {
  final List<dynamic> walletData;

  WalletPage({required this.walletData});

  @override
  _WalletPageState createState() => _WalletPageState();
}

class _WalletPageState extends State<WalletPage> {
  int selectedWalletDataKey = 0;
  int selectedWalletId = 0;

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
                          'Выберите аккаунт:',
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
                      height: 400,
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
                        child: ListView.builder(
                          itemCount: widget.walletData.length + 1,
                          itemBuilder: (BuildContext context, int index) {
                            if (index == widget.walletData.length) {
                              return ListTile(
                                contentPadding:
                                    EdgeInsets.symmetric(horizontal: 7),
                                leading: CircleAvatar(
                                  radius: 30,
                                  child: Icon(
                                    Icons.add,
                                    size: 30,
                                  ),
                                  backgroundColor: Colors.grey[200],
                                ),
                                title: Text('Добавить аккаунт',
                                    style: TextStyle(color: Colors.white)),
                                onTap: () {
                                  Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                        builder: (context) => AddAccountPage(
                                              walletData: [],
                                            )),
                                  );
                                },
                              );
                            } else {
                              Map item = widget.walletData[index];
                              return buildRowWithDivider(item, index);
                            }
                          },
                        ),
                      ),
                    ),
                    SizedBox(height: 20),
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
                        onPressed: selectedWalletDataKey != null
                            ? () async {
                                print(
                                    'Выбранный аккаунт: $selectedWalletDataKey');

                                final selectionModel =
                                    Provider.of<SelectionModel>(context,
                                        listen: false);
                                selectionModel
                                    .setWalletId(selectedWalletDataKey);
                                if (context.mounted) {
                                  Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) =>
                                              AcountSettingsPage(
                                                walletData: [
                                                  {"id": 1},
                                                  {"id": 2}
                                                ],
                                              )));
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
            ),
          ],
        ),
      ),
    );
  }

  Widget buildRow(Map item, int index) {
    int id = item['id']; // Fetching the id from the wallet data
    String account = "Аккаунт " + (index + 1).toString();
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: GestureDetector(
        onTap: () {
          setState(() {
            selectedWalletDataKey = id;
            selectedWalletId = index;
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
              child: Stack(
                children: [
                  Center(
                    child: Image.asset(
                      "assets/Vector.png",
                      scale: 3.8,
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(width: 21),
            Text(
              account,
              style: TextStyle(
                color:
                    selectedWalletDataKey == id ? Colors.black : Colors.white,
                fontSize: 17,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget buildRowWithDivider(Map item, int index) {
    // int projectCount =
    //     widget.routeData[name].length; // вычисляем количество проектов
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        buildRow(item, index),
        SizedBox(height: 10),
        const Padding(
          padding: EdgeInsets.only(left: 84),
          child: Divider(
            color: Colors.grey,
            thickness: 1,
          ),
        ),
      ],
    );
  }
}
