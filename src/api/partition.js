const assign = require('lodash/assign');
const values = require('lodash/values');
const partition = require('../util/partition');
const View = require('../view');

assign(View.prototype, {
  partition(group_by = [], order_by = []) {
    return partition(this.rows, group_by, order_by);
  },
  group(group_by, order_by) {
    const groups = this.partition(group_by, order_by);
    return values(groups);
  },
  groups(group_by, order_by) {
    return this.group(group_by, order_by);
  }
});

