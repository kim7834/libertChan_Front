export class UserPreferences {
    name = '';
    label = '';

    constructor(data?: UserPreferences) {
      if (data) {
        Object.assign(this, data);
      }
    }
}
