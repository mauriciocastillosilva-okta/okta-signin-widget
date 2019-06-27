/*!
 * Copyright (c) 2019, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

define(['okta', 'util/Enums'], function (Okta, Enums) {
  var _ = Okta._;

  return Okta.View.extend({
    template: '\
      <a href="#" class="link help js-back" data-se="back-link">\
        {{backLabel}}\
      </a>\
    ',
    className: 'auth-footer',
    events: {
      'click .js-back': function (e) {
        e.preventDefault();
        if (_.isFunction(this.backFn)) {
          this.backFn(e);
          return;
        }
        this.back();
      }
    },
    initialize: function (options) {
      this.backLabel = options.backLabel;
      this.backFn = options.backFn;
    },
    getTemplateData: function () {
      return {
        backLabel: this.backLabel || Okta.loc('goback', 'login')
      };
    },
    back: function () {
      this.state.set('navigateDir', Enums.DIRECTION_BACK);
      this.options.appState.trigger('navigate', '');
    },
  });

});
