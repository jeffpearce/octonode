// Generated by CoffeeScript 1.12.7
(function() {
  var Base, Team,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice;

  Base = require('./base');

  Team = (function(superClass) {
    extend(Team, superClass);

    function Team(id, client) {
      this.id = id;
      this.client = client;
    }

    Team.prototype.info = function(cb) {
      return this.client.get("/teams/" + this.id, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error('Team info error'));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Team.prototype.update = function(info, cb) {
      return this.client.patch("/teams/" + this.id, info, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error('Team update error'));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Team.prototype.members = function() {
      var cb, i, params, ref;
      params = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), cb = arguments[i++];
      return (ref = this.client).getOptions.apply(ref, ["/teams/" + this.id + "/members", {
        headers: {
          Accept: 'application/vnd.github.ironman-preview+json'
        }
      }].concat(slice.call(params), [function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error('Team members error'));
        } else {
          return cb(null, b, h);
        }
      }]));
    };

    Team.prototype.member = function(user, cb) {
      return this.client.get("/teams/" + this.id + "/members/" + user, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        return cb(null, s === 204, h);
      });
    };

    Team.prototype.addUser = function(user, cb) {
      return this.client.put("/teams/" + this.id + "/members/" + user, null, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 204) {
          return cb(new Error("Team addUser error"));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Team.prototype.removeUser = function(user, cb) {
      return this.client.del("/teams/" + this.id + "/members/" + user, null, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 204) {
          return cb(new Error("Team removeUser error"));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Team.prototype.membership = function(user, cb) {
      return this.client.get("/teams/" + this.id + "/memberships/" + user, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        return cb(null, s === 204 || s === 200, h);
      });
    };

    Team.prototype.getMembership = function(user, cb) {
      return this.client.get("/teams/" + this.id + "/memberships/" + user, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error("Team getMembership error"));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Team.prototype.addMembership = function(user, cbOrOptions, cb) {
      var param;
      if ((cb == null) && cbOrOptions) {
        cb = cbOrOptions;
        param = {};
      } else if (typeof cbOrOptions === 'object') {
        param = cbOrOptions;
      }
      return this.client.put("/teams/" + this.id + "/memberships/" + user, param, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error("Team membership error"));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Team.prototype.removeMembership = function(user, cb) {
      return this.client.del("/teams/" + this.id + "/memberships/" + user, null, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 204) {
          return cb(new Error("Team removeMembership error"));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Team.prototype.repos = function() {
      var cb, i, params, ref;
      params = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), cb = arguments[i++];
      return (ref = this.client).get.apply(ref, ["/teams/" + this.id + "/repos"].concat(slice.call(params), [function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error("Team repos error"));
        } else {
          return cb(null, b, h);
        }
      }]));
    };

    Team.prototype.removeRepo = function(repo, cb) {
      return this.client.del("/teams/" + this.id + "/repos/" + repo, {}, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 204) {
          return cb(new Error("Team removeRepo error"));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Team.prototype.destroy = function(cb) {
      return this.client.del("/teams/" + this.id, {}, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 204) {
          return cb(new Error("Team destroy error"));
        } else {
          return cb(null, b, h);
        }
      });
    };

    return Team;

  })(Base);

  module.exports = Team;

}).call(this);
