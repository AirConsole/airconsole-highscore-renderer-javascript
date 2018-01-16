/**
 *
 * @param {Array<AirConsole~HighScore>} high_scores - The high scores.
 * @param {DOMElement} element - Where to render the high scores into.
 * @param {Array<String>|undefined} ranks - Rank types that should be rendered.
 *                                          Default is all.
 * @param {number|undefined} avatar_size -  The size of the avatar pictures.
 *                                          Default is 40.
 * @param {boolean} include_flags - If true, adds country flags to high scores.
 *                                  Default: true
 *
 *
 */
function AirConsoleHighScoreRenderer(high_scores, element, ranks,
                                     avatar_size, include_flags) {
  if (avatar_size == undefined) {
    avatar_size = 40;
  }
  if (include_flags == undefined) {
    include_flags = true;
  }
  element.innerHTML = "";
  var lists = {};
  for (var i = 0; i < high_scores.length; ++i) {
    var hs = high_scores[i];
    for (var rank in hs["ranks"]) {
      if (ranks == undefined || ranks.indexOf(rank) != -1) {
        if (!lists[rank]) {
          lists[rank] = [];
        }
        lists[rank].push(hs);
      }
    }
  }

  var $ = function(el, className, parent) {
    var el = document.createElement(el);
    if (className) {
      el.className = "airconsole-highscore-renderer-" + className;
    }
    if (parent) {
      parent.appendChild(el);
    }
    return el;
  };

  var render_ranks = ranks;
  if (render_ranks == undefined) {
    render_ranks = [];
    var possible_ranks = ["world", "country", "region", "city", "friends"];
    for (var i = 0; i < possible_ranks.length; ++i) {
      var rank = possible_ranks[i];
      if (lists[rank] && lists[rank].length) {
        render_ranks.push(rank);
      }
    }
  }
  for (var r = 0; r < render_ranks.length; ++r) {
    var list = $("div", "list", element);
    var rank = render_ranks[r];
    var title = $("div", "title", list);
    var title_string = "Worldwide";
    if (rank == "friends") {
      title_string = "Friends";
    } else if (rank == "country") {
      title_string = lists[rank][0]["location_country_name"]
    } else if (rank == "region") {
      title_string = lists[rank][0]["location_region_name"];
    } else if (rank == "city") {
      title_string = lists[rank][0]["location_city_name"];
    }
    title.innerHTML = title_string;
    for (var h = 0; h < lists[rank].length; ++h) {
      var hs = lists[rank][h];
      var entry = $("div", "entry", list);
      if (hs.uids.length > 1) {
        entry.className += " airconsole-highscore-renderer-entry-multiplayer";
      } else {
        entry.className += " airconsole-highscore-renderer-entry-singleplayer";
      }
      if (hs.relationship == "requested") {
        entry.className += " airconsole-highscore-renderer-entry-highlight";
      }
      $("div", "rank", entry).innerHTML = hs.ranks[rank];
      for (var i = 0; i < hs.uids.length; ++i) {
        var player = $("div", "player", entry);
        var img = $("img", "avatar", player);
        img.src = "https://www.airconsole.com/api/" +
            "profile-picture?size=" + avatar_size + "&uid=" + hs.uids[i];
        if (include_flags) {
          $("div", "flag", player).className +=
              " airconsole-highscore-renderer-flag-" +
              (hs.location_country_code || "");
        }
        $("div", "nickname", player).textContent = hs.nicknames[i];
      }
      $("div", "score", entry).textContent = hs.score_string;
    }
  }
}