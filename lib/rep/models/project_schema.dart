class RouteSchema {
  final String routeName;
  final int actionCount;

  RouteSchema({required this.routeName, this.actionCount = 0});
}

class TestSchema {
  final int id;
  final String pair;
  final int routeId;
  final int actionListId;

  TestSchema({
    required this.id,
    required this.pair,
    required this.routeId,
    required this.actionListId,
  });
}
