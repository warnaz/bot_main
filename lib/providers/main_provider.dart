import 'package:flutter/material.dart';

class SelectionModel with ChangeNotifier {
  int _routeId = 0;
  int _walletId = 0;
  int _client_id = 0;
  int _amountSwap = 0;
  int _amountBridge = 0;
  int _min_times = 0;
  int _max_times = 0;
  int _max_gas = 0;
  String _starknetKey = '';
  String _evmKey = '';
  String _proxy = '';

  int get routeId => _routeId;
  int get walletId => _walletId;
  int get client_id => _client_id;
  int get amountSwap => _amountSwap;
  int get amountBridge => _amountBridge;
  int get minTimes => _min_times;
  int get maxTimes => _max_times;
  int get maxGas => _max_gas;
  String get starknetKey => _starknetKey;
  String get evmKey => _evmKey;
  String get proxy => _proxy;

  void setRouteId(int value) {
    _routeId = value;
    notifyListeners();
  }

  void setWalletId(int value) {
    _walletId = value;
    notifyListeners();
  }

  void setClientId(int value) {
    _client_id = value;
    notifyListeners();
  }

  void setAmountSwap(int value) {
    _amountSwap = value;
    notifyListeners();
  }

  void setAmountBridge(int value) {
    _amountBridge = value;
    notifyListeners();
  }

  void setMinTimes(int value) {
    _min_times = value;
    notifyListeners();
  }

  void setMaxTimes(int value) {
    _max_times = value;
    notifyListeners();
  }

  void setMaxGas(int value) {
    _max_gas = value;
    notifyListeners();
  }

  void setStarknetKey(String value) {
    _starknetKey = value;
    notifyListeners();
  }

  void setEvmKey(String value) {
    _evmKey = value;
    notifyListeners();
  }

  void setProxy(String value) {
    _proxy = value;
    notifyListeners();
  }
}
