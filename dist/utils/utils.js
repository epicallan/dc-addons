/*!
 * dc-addons v0.11.4
 *
 * 2015-12-17 15:06:51
 *
 */
if (!dc.utils.getAllFilters) {
    dc.utils.getAllFilters = function () {
        var result = {};
        var list = dc.chartRegistry.list();

        for (var e in list) {
            var chart = list[e];
            result[chart.chartID()] = chart.filters();
        }

        return result;
    };
}
