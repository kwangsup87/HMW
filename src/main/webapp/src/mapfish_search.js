/**
 * Mapfish Appserver search
 */

function MapfishSearch(urlCallback, parseFeatureCallback) {
  // create query URL from search params
  this.urlCallback = urlCallback;

  // get feature name and bbox
  this.parseFeatureCallback = parseFeatureCallback;
};

// inherit from Search
MapfishSearch.prototype = new Search();

/**
 * submit search query
 */
MapfishSearch.prototype.submit = function(searchParams, callback) {
  var request = $.ajax({
    url: this.urlCallback(searchParams),
    dataType: 'json',
    context: this
  });

  request.done(function(data, status) {
    this.parseResults(data, status, callback);
  });

  request.fail(function(jqXHR, status) {
    alert(I18n.search.failed + "\n" + jqXHR.status + ": " + jqXHR.statusText);
  });
};

/**
 * parse query result and invoke the callback with search result features
 *
 * [
 *   {
 *     category: <category>, // null to hide
 *     results: [
 *       {
 *         name: <visible name>,
 *         bbox: [<minx>, <miny>, <maxx>, <maxy>]
 *       }
 *     ]
 *   }
 * ]
 */
MapfishSearch.prototype.parseResults = function(data, status, callback) {
  // group by category
  var categories = {};
  for (var i=0; i<data.features.length; i++) {
    var feature = this.parseFeatureCallback(data.features[i]);
    var category = feature.category;
    if (categories[category] === undefined) {
      // add category
      categories[category] = [];
    }
    // add feature to category
    categories[category].push(feature);
  }

  // convert to search results
  var results = $.map(categories, function(features, category) {
    return {
      category: category,
      results: features
    };
  });
  callback(results);
};
