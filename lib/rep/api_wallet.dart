import 'dart:convert';
import 'package:http/http.dart' as http;

class WalletApi {
  Future<List<dynamic>> getData(int clientId) async {
    final response = await http.post(Uri.parse('http://10.0.2.2:8001/wallet/'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({'client_id': clientId}));

    if (response.statusCode == 200) {
      List<dynamic> dataList = jsonDecode(response.body);
      return dataList;
    } else {
      throw Exception('Failed to load data from server');
    }
  }
}
