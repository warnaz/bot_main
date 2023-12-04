import 'package:bot_main/providers/main_provider.dart';
import 'package:bot_main/rep/api_run_bot.dart';
import 'package:bot_main/result_page.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class AcountSettingsPage extends StatefulWidget {
  final List<dynamic> walletData;

  AcountSettingsPage({required this.walletData});

  @override
  Acount_SettingsState createState() => Acount_SettingsState();
}

class Acount_SettingsState extends State<AcountSettingsPage> {
  TextEditingController fromController = TextEditingController();
  TextEditingController toController = TextEditingController();
  TextEditingController selectAmountForBridge = TextEditingController();
  TextEditingController selectAmountForSwap = TextEditingController();
  TextEditingController selectedGas = TextEditingController();

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
              bottom: MediaQuery.of(context).size.height / 2 - 350,
              left: MediaQuery.of(context).size.width / 2 - 100,
              child: ElevatedButton(
                onPressed: () {
                  final selectionModel =
                      Provider.of<SelectionModel>(context, listen: false);

                  selectionModel
                      .setAmountBridge(int.parse(selectAmountForBridge.text));
                  selectionModel
                      .setAmountSwap(int.parse(selectAmountForSwap.text));
                  selectionModel.setMinTimes(int.parse(fromController.text));
                  selectionModel.setMaxTimes(int.parse(toController.text));
                  selectionModel.setMaxGas(int.parse(selectedGas.text));

                  FinalApi().getData(context);

                  Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => BotStatusPage(),
                      ));
                },
                style: ElevatedButton.styleFrom(
                    primary: Color.fromRGBO(177, 34, 0, 1),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    minimumSize: Size(201, 60)),
                child: const Text(
                  'Запустить',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 18,
                  ),
                ),
              ),
            ),
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
            Positioned(
              top: 111,
              left: 46,
              child: Container(
                width: 194,
                height: 22,
                child: const Text(
                  'Выберите настройки',
                  style: TextStyle(
                    fontFamily: 'Roboto Mono',
                    fontSize: 17,
                    // fontWeight: FontWeight.w400,
                    height: 22 / 17,
                    letterSpacing: 0,
                    color: Colors.grey,
                  ),
                ),
              ),
            ),
            Positioned(
              top: 166,
              left: 31,
              child: Container(
                width: 329,
                height: 100,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text('Выберите сумму на официальный мост',
                        style: TextStyle(
                            color: Colors.white, fontFamily: 'Roboto')),
                    SizedBox(height: 12),
                    Container(
                      width: double.infinity,
                      height: 52,
                      padding: EdgeInsets.symmetric(horizontal: 16),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(12),
                        color: Colors.white,
                      ),
                      child: TextField(
                        controller: selectAmountForBridge,
                        decoration: const InputDecoration(
                            hintText: 'от 2000\$ до 10000\$',
                            hintStyle: TextStyle(
                              color: Colors.grey,
                              fontFamily: 'Inter',
                              fontSize: 14,
                              fontWeight: FontWeight.w400,
                              height: 17 / 14,
                              letterSpacing: 0,
                            ),
                            enabledBorder: UnderlineInputBorder(
                              borderSide: BorderSide(color: Colors.transparent),
                            ),
                            focusedBorder: UnderlineInputBorder(
                              borderSide: BorderSide(color: Colors.transparent),
                            )),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            Positioned(
              top: 292,
              left: 31,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('Выберите сумму на свап',
                      style:
                          TextStyle(color: Colors.white, fontFamily: 'Roboto')),
                  const SizedBox(
                    height: 10,
                  ),
                  Container(
                    width: 329,
                    height: 52,
                    padding: EdgeInsets.symmetric(horizontal: 16),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(12),
                      color: Colors.white,
                    ),
                    child: TextField(
                      controller: selectAmountForSwap,
                      decoration: const InputDecoration(
                          hintText: 'от 2000\$ до 10000\$',
                          hintStyle: TextStyle(
                            color: Colors.grey,
                            fontFamily: 'Inter',
                            fontSize: 14,
                            fontWeight: FontWeight.w400,
                            height: 17 / 14,
                            letterSpacing: 0,
                          ),
                          enabledBorder: UnderlineInputBorder(
                            borderSide: BorderSide(color: Colors.transparent),
                          ),
                          focusedBorder: UnderlineInputBorder(
                            borderSide: BorderSide(color: Colors.transparent),
                          )),
                    ),
                  ),
                ],
              ),
            ),
            Positioned(
              top: 420,
              left: 31,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Выберите промежуток между транзакциями\n(в мин.)',
                    style: TextStyle(color: Colors.white, fontFamily: 'Roboto'),
                  ),
                  Row(
                    children: [
                      Container(
                        width: 150,
                        height: 52,
                        padding: EdgeInsets.symmetric(horizontal: 16),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(12),
                          color: Colors.white,
                        ),
                        child: TextField(
                            controller: fromController,
                            decoration: const InputDecoration(
                              border: InputBorder.none,
                              hintText: 'От',
                              hintStyle: TextStyle(
                                color: Colors.grey,
                                fontFamily: 'Inter',
                                fontSize: 14,
                                fontWeight: FontWeight.w400,
                                height: 17 / 14,
                                letterSpacing: 0,
                              ),
                            )),
                      ),
                      SizedBox(
                        height: 100,
                        width: 10,
                      ),
                      Container(
                        width: 150,
                        height: 52,
                        padding: EdgeInsets.symmetric(horizontal: 16),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(12),
                          color: Colors.white,
                        ),
                        child: TextField(
                          controller: toController,
                          decoration: const InputDecoration(
                            border: InputBorder.none,
                            hintText: 'До',
                            hintStyle: TextStyle(
                              color: Colors.grey,
                              fontFamily: 'Inter',
                              fontSize: 14,
                              fontWeight: FontWeight.w400,
                              height: 17 / 14,
                              letterSpacing: 0,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
            Positioned(
              top: 560,
              left: 31,
              child: Container(
                width: 329,
                height: 100,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text('Выберите максимальный газ(в gwei)',
                        style: TextStyle(
                            color: Colors.white, fontFamily: 'Roboto')),
                    SizedBox(height: 12),
                    Container(
                      width: double.infinity,
                      height: 52,
                      padding: EdgeInsets.symmetric(horizontal: 16),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(12),
                        color: Colors.white,
                      ),
                      child: TextField(
                        controller: selectedGas,
                        decoration: const InputDecoration(
                            hintText: '25 gwei',
                            hintStyle: TextStyle(
                              color: Colors.grey,
                              fontFamily: 'Inter',
                              fontSize: 14,
                              fontWeight: FontWeight.w400,
                              height: 17 / 14,
                              letterSpacing: 0,
                            ),
                            enabledBorder: UnderlineInputBorder(
                              borderSide: BorderSide(color: Colors.transparent),
                            ),
                            focusedBorder: UnderlineInputBorder(
                              borderSide: BorderSide(color: Colors.transparent),
                            )),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
