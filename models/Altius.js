var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Altius Model
 * ==========
 */
var Altius = new keystone.List('Altius');

Altius.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
Altius.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
Altius.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
Altius.defaultColumns = 'name, email, isAdmin';
Altius.register();
