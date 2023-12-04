import 'dart:convert';
import 'package:http/http.dart' as http;

class ProjectApi {
  Future<Map<String, dynamic>> getData(String project_name) async {
    final response = await http.post(Uri.parse('http://10.0.2.2:8001/route/'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({'project_name': project_name}));

    if (response.statusCode == 200) {
      Map<String, dynamic> dataList = jsonDecode(response.body);
      return dataList;
    } else {
      throw Exception('Failed to load data from server');
    }
  }
}
