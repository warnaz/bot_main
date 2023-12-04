import 'package:bot_main/account_added.dart';
import 'package:bot_main/providers/main_provider.dart';
import 'package:bot_main/rep/api_add_acc.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class AddAccountPage extends StatefulWidget {
  final List<dynamic> walletData;

  AddAccountPage({required this.walletData});

  @override
  Acount_SettingsState createState() => Acount_SettingsState();
}

class Acount_SettingsState extends State<AddAccountPage> {
  TextEditingController evm_key = TextEditingController();
  TextEditingController stark_key = TextEditingController();
  TextEditingController proxy = TextEditingController();

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

                  selectionModel.setProxy(proxy.text);
                  selectionModel.setEvmKey(evm_key.text);
                  selectionModel.setStarknetKey(stark_key.text);

                  final client_id = 1;
                  AddAccountApi().getData(context, client_id);

                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => AccountStatusPage()));
                },
                style: ElevatedButton.styleFrom(
                    primary: Color.fromRGBO(177, 34, 0, 1),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    minimumSize: Size(201, 60)),
                child: const Text(
                  'Добавить',
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
                  'Создайте новый аккаунт',
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
                    const Text('Приватный ключ EVM кошелька',
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
                        controller: evm_key,
                        decoration: const InputDecoration(
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
                  const Text('Приватный ключ кошелька',
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
                      controller: stark_key,
                      decoration: const InputDecoration(
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
                  const Text('Прокси',
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
                      controller: proxy,
                      decoration: const InputDecoration(
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
          ],
        ),
      ),
    );
  }
}
