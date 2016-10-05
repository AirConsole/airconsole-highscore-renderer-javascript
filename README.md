# Renders Array&lt;AirConsole~HighScore&gt; in HTML5

## Usage:

```
<link rel=stylesheet href="airconsole-highscore-renderer.css">
<script>
...
airconsole.onHighScores = function(high_scores) {
  AirConsoleHighScoreRenderer(high_score, document.getElementById("ID_OF_ELEMENT"));
}
...
</script>
```

## Styling

You can style the High Scores using CSS.
_airconsole-highscore-renderer.css_ is a good start.

### For more options see see documentation in Javascript Source Code

## Example output

![screen shot 2016-10-05 at 08 46 06](https://cloud.githubusercontent.com/assets/12496168/19103614/364e8d98-8ad8-11e6-979c-fef54ed5d79a.png)

```
<div class="airconsole-highscore-renderer-list">
  <div class="airconsole-highscore-renderer-title">Worldwide</div>
  <div class="airconsole-highscore-renderer-entry airconsole-highscore-renderer-entry-singleplayer">
    <div class="airconsole-highscore-renderer-rank">1</div>
    <div class="airconsole-highscore-renderer-player"><img
        class="airconsole-highscore-renderer-avatar"
        src="https://www.airconsole.com/api/profile-picture?size=40&amp;uid=4b7e77193b13bc2af7904e5c6d4c3184"
        width="40" height="40">
      <div class="airconsole-highscore-renderer-nickname">Michael</div>
    </div>
    <div class="airconsole-highscore-renderer-score">24 points in 15.5s
    </div>
  </div>
  <div class="airconsole-highscore-renderer-entry airconsole-highscore-renderer-entry-singleplayer">
    <div class="airconsole-highscore-renderer-rank">2</div>
    <div class="airconsole-highscore-renderer-player"><img
        class="airconsole-highscore-renderer-avatar"
        src="https://www.airconsole.com/api/profile-picture?size=40&amp;uid=54004819f29d2e0a78f9602f37f50ac7"
        width="40" height="40">
      <div class="airconsole-highscore-renderer-nickname">Sepp
      </div>
    </div>
    <div class="airconsole-highscore-renderer-score">24 points in 15.7s
    </div>
  </div>
  <div class="airconsole-highscore-renderer-entry airconsole-highscore-renderer-entry-singleplayer airconsole-highscore-renderer-entry-highlight">
    <div class="airconsole-highscore-renderer-rank">93</div>
    <div class="airconsole-highscore-renderer-player"><img
        class="airconsole-highscore-renderer-avatar"
        src="https://www.airconsole.com/api/profile-picture?size=40&amp;uid=0b1d0eecc751ca3f329f7da042fd8b49"
        width="40" height="40">
      <div class="airconsole-highscore-renderer-nickname">Andrin</div>
    </div>
    <div class="airconsole-highscore-renderer-score">18 points in 23s</div>
  </div>
</div>
```
