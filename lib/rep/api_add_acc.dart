import 'dart:convert';
import 'package:bot_main/providers/main_provider.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';

class AddAccountApi {
  getData(BuildContext context, int client_id) async {
    final selectionModel = Provider.of<SelectionModel>(context, listen: false);

    final evmKey = selectionModel.evmKey;
    final starknetKey = selectionModel.starknetKey;
    final proxy = selectionModel.proxy;

    Map data = {
      'evm_key': evmKey,
      'starknet_key': starknetKey,
      'proxy': proxy,
      'client_id': client_id
    };

    await http.post(Uri.parse('http://10.0.2.2:8001/add_account/'),
        headers: {'Content-Type': 'application/json'}, body: jsonEncode(data));
  }
}
