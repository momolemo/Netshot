/** Copyright 2013-2019 NetFishers */
define([
	'underscore',
	'backbone',
], function(_, Backbone) {

	return Backbone.Model.extend({

		urlRoot: "api/diagnostics",

		save: function(attrs, options) {
			attrs = attrs || this.toJSON();
			options = options || {};
			attrs = _.pick(attrs, [
				'id',
				'name',
				'enabled',
				'targetGroup',
				'type',
				'resultType',
				'script',
				'deviceDriver',
				'cliMode',
				'command',
				'modifierPattern',
				'modifierReplacement',
			]);
			options.attrs = attrs;
			return Backbone.Model.prototype.save.call(this, attrs, options);
		},

	});

});
