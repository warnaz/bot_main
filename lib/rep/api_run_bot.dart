import 'dart:convert';
import 'package:bot_main/providers/main_provider.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';

class FinalApi {
  getData(BuildContext context) async {
    final selectionModel = Provider.of<SelectionModel>(context, listen: false);

    final amountSwap = selectionModel.amountSwap;
    final amountBridge = selectionModel.amountBridge;
    final minTimes = selectionModel.minTimes;
    final maxTimes = selectionModel.maxTimes;
    final routeId = selectionModel.routeId;
    final walletId = selectionModel.walletId;
    final clientId = selectionModel.client_id;
    final maxGas = selectionModel.maxGas;

    Map data = {
      'max_amount': amountSwap,
      'amount_bridge': amountBridge,
      'min_time': minTimes,
      'max_time': maxTimes,
      'route_id': routeId,
      'wallet_id': walletId,
      'client_id': clientId,
      'max_gas': maxGas
    };

    await http.post(Uri.parse('http://10.0.2.2:8001/run_bot/'),
        headers: {'Content-Type': 'application/json'}, body: jsonEncode(data));
  }
}
