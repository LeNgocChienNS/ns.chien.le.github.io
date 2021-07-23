
/* RBAC - role-based access control
 first create roles; role =[ "user", "guest", "organization",  "superadmin" "globalsuperadmin"]
 next, create resouuce, add their roles_id and permmissions
 finally create users and indcate thier roles
*/

const mongooseClient = app.get('mongooseClient');
const { Schema } = mongooseClient;

const resources = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  resources_roles: [{
    roles_id: { type: Schema.Types.ObjectId, ref : 'Roles' },
    roles_name: { type:  String },
    create: { type: Boolean },
    delete: { type: Boolean },
    update: { type: Boolean },
    read: { type: Boolean },
  }]
}, {
  timestamps: true
});

return mongooseClient.model('resources', resources);