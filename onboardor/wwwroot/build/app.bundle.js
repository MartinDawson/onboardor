webpackJsonp([0],{

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageContent = __webpack_require__(655);

var _pageContent2 = _interopRequireDefault(_pageContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageContent = function PageContent(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: _pageContent2.default.pageContent },
    children
  );
};

PageContent.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = PageContent;

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(300);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(313);

var _app = __webpack_require__(315);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(731);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('app'));

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(34);

var _foundRelay = __webpack_require__(331);

var _router = __webpack_require__(449);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(462);

var _store2 = _interopRequireDefault(_store);

var _environment = __webpack_require__(679);

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolver = new _foundRelay.Resolver(_environment2.default);

var App = function App() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(_router2.default, { matchContext: { store: _store2.default }, resolver: resolver })
  );
};

exports.default = App;

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createConnectedRouter = __webpack_require__(138);

var _createConnectedRouter2 = _interopRequireDefault(_createConnectedRouter);

var _createRender = __webpack_require__(143);

var _createRender2 = _interopRequireDefault(_createRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RenderError = function RenderError(_ref) {
  var error = _ref.error,
      router = _ref.router;

  router.replace({
    pathname: '/error/' + error.status,
    state: {
      error: error.data
    }
  });
};

RenderError.propTypes = {
  error: _propTypes2.default.shape({
    status: _propTypes2.default.number.isRequired
  }).isRequired,
  router: _propTypes2.default.object.isRequired
};

exports.default = (0, _createConnectedRouter2.default)({
  render: (0, _createRender2.default)({
    renderError: RenderError
  })
});

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(18);

var _reduxThunk = __webpack_require__(463);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxForm = __webpack_require__(464);

var _foundReducer = __webpack_require__(156);

var _foundReducer2 = _interopRequireDefault(_foundReducer);

var _Actions = __webpack_require__(67);

var _Actions2 = _interopRequireDefault(_Actions);

var _BrowserProtocol = __webpack_require__(157);

var _BrowserProtocol2 = _interopRequireDefault(_BrowserProtocol);

var _createHistoryEnhancer = __webpack_require__(273);

var _createHistoryEnhancer2 = _interopRequireDefault(_createHistoryEnhancer);

var _queryMiddleware = __webpack_require__(274);

var _queryMiddleware2 = _interopRequireDefault(_queryMiddleware);

var _createMatchEnhancer = __webpack_require__(158);

var _createMatchEnhancer2 = _interopRequireDefault(_createMatchEnhancer);

var _Matcher = __webpack_require__(159);

var _Matcher2 = _interopRequireDefault(_Matcher);

var _routeConfig = __webpack_require__(642);

var _routeConfig2 = _interopRequireDefault(_routeConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var historyEnhancer = (0, _createHistoryEnhancer2.default)({
  protocol: new _BrowserProtocol2.default(),
  middlewares: [_queryMiddleware2.default]
});

var matcherEnhancer = (0, _createMatchEnhancer2.default)(new _Matcher2.default(_routeConfig2.default));

// eslint-disable-next-line no-underscore-dangle
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

var middleWare = composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default), historyEnhancer, matcherEnhancer);

var reducers = (0, _redux.combineReducers)({
  found: _foundReducer2.default,
  form: _reduxForm.reducer
});

var store = (0, _redux.createStore)(reducers, {}, middleWare);

store.dispatch(_Actions2.default.init());

exports.default = store;

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _makeRouteConfig = __webpack_require__(275);

var _makeRouteConfig2 = _interopRequireDefault(_makeRouteConfig);

var _Route = __webpack_require__(276);

var _Route2 = _interopRequireDefault(_Route);

var _termsAndConditionsContainer = __webpack_require__(646);

var _privacyPolicyContainer = __webpack_require__(657);

var _imprintContainer = __webpack_require__(659);

var _errorPageContainer = __webpack_require__(662);

var _primaryLayoutContainer = __webpack_require__(666);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _makeRouteConfig2.default)(_react2.default.createElement(
  _Route2.default,
  _extends({ path: '/' }, _primaryLayoutContainer.routeConfig),
  _react2.default.createElement(_Route2.default, _extends({ path: 'error/:status' }, _errorPageContainer.routeConfig)),
  _react2.default.createElement(_Route2.default, _extends({ path: 'termsAndConditions' }, _termsAndConditionsContainer.routeConfig)),
  _react2.default.createElement(_Route2.default, _extends({ path: 'privacyPolicy' }, _privacyPolicyContainer.routeConfig)),
  _react2.default.createElement(_Route2.default, _extends({ path: 'imprint' }, _imprintContainer.routeConfig))
));

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _termsAndConditions = __webpack_require__(647);

var _termsAndConditions2 = _interopRequireDefault(_termsAndConditions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditionsContainer = _termsAndConditions2.default;

var routeConfig = exports.routeConfig = {
  Component: TermsAndConditionsContainer
};

exports.default = TermsAndConditionsContainer;

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(105);

var _pageContent = __webpack_require__(160);

var _pageContent2 = _interopRequireDefault(_pageContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditions = function TermsAndConditions() {
  return _react2.default.createElement(
    _pageContent2.default,
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Terms and Conditions'
      ),
      _react2.default.createElement('meta', { name: 'description', content: 'Our terms and conditions that you agree to when using our site.' })
    ),
    _react2.default.createElement(
      'h1',
      null,
      'Terms and Conditions'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Last Updated: June 11th 2018'
    ),
    _react2.default.createElement(
      'p',
      null,
      '"You" and "your" refer to you, as a user of the Site. A "user" is someone who accesses,browses, crawls, scrapes, or in any way uses the Site. "We," "us," and "our" refer to onboardor. "Content" means text, images, photos, audio, video, location data, and all other forms of data or communication. "Your Content" means Content that you submit or transmit to, through, or in connection with the Site, such as ratings, reviews, compliments, invitations, check-ins, messages, and information that you publicly display or displayed in your account profile. "User Content" means Content that users submit or transmit to, through, or in connection with the Site. "onboardor Content" means Content that we create and make available in connection with the Site. "Third Party Content" means Content that originates from parties other than onboardor or its users, which is made available in connection with the Site. "Site Content" means all of the Content that is made available in connection with the Site, including Your Content, User Content, Third Party Content, and onboardor Content.'
    ),
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Terms'
        ),
        _react2.default.createElement(
          'p',
          null,
          'By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trade mark law.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Disclaimer'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The materials on the onboardor website are provided "as shown". onboardor makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, onboardor does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its internet website or otherwise relating to such materials or on any sites linked to this site.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Limitations'
        ),
        _react2.default.createElement(
          'p',
          null,
          'In no event shall onboardor or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our internet site or offered services, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Revisions and Errors'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The materials appearing on our website could include technical, typographical, or photographic errors. onboardor does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Links'
        ),
        _react2.default.createElement(
          'p',
          null,
          'onboardor has not reviewed all of the sites linked to its internet website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user"s own risk.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Governing Law'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Any claim relating to the onboardor website shall be governed by the laws of the country of note without regard to its conflict of law provisions.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'English Language'
        ),
        _react2.default.createElement(
          'p',
          null,
          'In the event of a conflict between these Terms and a foreign language version of our Terms of Use, the English language version of these Terms governs. All disputes, claims and causes of action (and related proceedings) will be communicated in English.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Copyright policy, notice and claim information'
        ),
        _react2.default.createElement(
          'p',
          null,
          'All materials on this site, whether separate or compiled, including, but not limited to, text, graphics, audio clips, logos, buttons, images, digital downloads, data compilations, software, icons, html code and xml code, as well as all copyright, patent, trademark, trade dress, and other rights therein, are owned or licensed by onboardor and its third-party information providers, and are protected by international intellectual property laws.'
        )
      )
    )
  );
};

exports.default = TermsAndConditions;

/***/ }),

/***/ 655:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pageContent":"Components-shared-pageContent__pageContent"};

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _privacyPolicy = __webpack_require__(658);

var _privacyPolicy2 = _interopRequireDefault(_privacyPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicyContainer = _privacyPolicy2.default;

var routeConfig = exports.routeConfig = {
  Component: PrivacyPolicyContainer
};

exports.default = PrivacyPolicyContainer;

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(105);

var _pageContent = __webpack_require__(160);

var _pageContent2 = _interopRequireDefault(_pageContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicy = function PrivacyPolicy() {
  return _react2.default.createElement(
    _pageContent2.default,
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Privacy Policy'
      ),
      _react2.default.createElement('meta', { name: 'description', content: 'Our privacy policy explaining what data we collect.' })
    ),
    _react2.default.createElement(
      'h1',
      null,
      'Privacy Policy'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Last Updated: June 11th 2018'
    ),
    _react2.default.createElement(
      'p',
      null,
      'This privacy policy has been compiled to better serve those who are concerned with how their \'Personally Identifiable Information\' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.'
    ),
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'What personal information do we collect?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'When registering for our newsletter, you will be asked to enter your email address. This is to help us indentify you and keep you updated. We will not send you any emails that you do not request.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'When do we collect information?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We collect certain information from you when you register for our newsletter.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'How do we protect your information?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We do not use vulnerability scanning and/or scanning to PCI standards. We never ask for credit card numbers. We use regular Malware Scanning. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive information you supply is encrypted via Secure Socket Layer (SSL) technology. We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Do we use \'cookies\'?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Yes. Cookies are small files that a site or its service provider transfers to your computer\'s hard drive through your Web browser that enables the site\'s or service provider\'s systems to recognize your browser and capture and remember certain information. They are used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'We use cookies to:'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Understand and save user\'s preferences for future visits.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          'Cookies are an important part of our website and the website will not work without having them enabled. By using our site you allow us to use cookies.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Third-party disclosure'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Third-party links'
        ),
        _react2.default.createElement(
          'p',
          null,
          'There may be third-party links to radio station websites throughout our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites. Any link on our site to a third part website that is not relevant or if we deem it inappropriate, may be removed.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Google'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Google\'s advertising requirements can be summed up by Google\'s Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en We have not enabled Google AdSense on our site.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'California Online Privacy Protection Act'
        ),
        _react2.default.createElement(
          'p',
          null,
          'CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law\'s reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. - See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'According to CalOPPA, we agree to the following:'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Users can visit our site anonymously. This privacy policy has a link to it from our home page in the header. Our Privacy Policy link includes the word \'Privacy\' and can easily be found on the page specified above. You will be notified of any Privacy Policy changes: \u2022 On our Privacy Policy Page Can change your personal information: \u2022 Through our website'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Does our site allow third-party behavioral tracking?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'It\'s important to note that we allow third-party behavioral tracking'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'COPPA (Children Online Privacy Protection Act)'
        ),
        _react2.default.createElement(
          'p',
          null,
          'When it comes to the collection of personal information from children under the age of 13 years old, the Children\'s Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States\' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children\'s privacy and safety online. We do not specifically market to children under the age of 13 years old.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Fair Information Practices'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information. In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur: We will notify you via email within 7 business days. We will also notify users via an in-site notification on the home page within 7 business days. We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.'
        )
      )
    )
  );
};

exports.default = PrivacyPolicy;

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _imprint = __webpack_require__(660);

var _imprint2 = _interopRequireDefault(_imprint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImprintContainer = _imprint2.default;

var routeConfig = exports.routeConfig = {
  Component: ImprintContainer
};

exports.default = ImprintContainer;

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(105);

var _pageContent = __webpack_require__(160);

var _pageContent2 = _interopRequireDefault(_pageContent);

var _imprint = __webpack_require__(661);

var _imprint2 = _interopRequireDefault(_imprint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Imprint = function Imprint() {
  return _react2.default.createElement(
    _pageContent2.default,
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Imprint'
      ),
      _react2.default.createElement('meta', { name: 'description', content: 'Contact information for onboardor.com.' })
    ),
    _react2.default.createElement(
      'div',
      { className: _imprint2.default.imprintContent },
      _react2.default.createElement(
        'h1',
        null,
        'Imprint'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Company Name: VAST NETWORK LTD'
      ),
      _react2.default.createElement(
        'div',
        null,
        'CEO: Martin Dawson'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Address: 26 CalderView, Rastrick, Brighouse, HD63DQ United Kingdom'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Telephone: +(44)7473591097'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Email address: u1356770@gmail.com'
      )
    )
  );
};

exports.default = Imprint;

/***/ }),

/***/ 661:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"imprintContent":"Components-footer-imprint__imprintContent"};

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(278);

var _errorPage = __webpack_require__(664);

var _errorPage2 = _interopRequireDefault(_errorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createProps = function createProps(_ref) {
  var status = _ref.status,
      error = _ref.error;

  switch (status) {
    case 404:
      return { error: 'The page could not be found.' };
    default:
      return { error: error };
  }
};

var enhance = (0, _recompose.compose)((0, _recompose.withProps)(createProps));

var ErrorPageContainer = enhance(_errorPage2.default);

var routeConfig = exports.routeConfig = {
  render: function render(_ref2) {
    var props = _ref2.props;
    return props && _react2.default.createElement(ErrorPageContainer, {
      status: parseInt(props.params.status, 10),
      error: props.location.state.error
    });
  }
};

exports.default = ErrorPageContainer;

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(105);

var _errorPage = __webpack_require__(665);

var _errorPage2 = _interopRequireDefault(_errorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorPage = function ErrorPage(_ref) {
  var status = _ref.status,
      error = _ref.error;
  return _react2.default.createElement(
    'div',
    { className: _errorPage2.default.errorPage },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Error ',
        status
      ),
      _react2.default.createElement('meta', { name: 'robots', content: 'noindex' })
    ),
    _react2.default.createElement(
      'h1',
      null,
      'Error ',
      status
    ),
    _react2.default.createElement(
      'div',
      { className: _errorPage2.default.error },
      _react2.default.createElement(
        'div',
        null,
        error
      ),
      'We have been notified of the error \xAF\\_(\u30C4)_/\xAF. Please try again later.'
    )
  );
};

ErrorPage.defaultProps = {
  error: 'An unknown error has occured.'
};

ErrorPage.propTypes = {
  status: _propTypes2.default.number.isRequired,
  error: _propTypes2.default.string
};

exports.default = ErrorPage;

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"errorPage":"Components-errorPage-errorPage__errorPage","error":"Components-errorPage-errorPage__error"};

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _primaryLayout = __webpack_require__(667);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryLayoutContainer = _primaryLayout2.default;

var routeConfig = exports.routeConfig = {
  Component: PrimaryLayoutContainer
};

exports.default = PrimaryLayoutContainer;

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _found = __webpack_require__(161);

var _primaryLayout = __webpack_require__(675);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

var _primaryLayoutErrorBoundary = __webpack_require__(676);

var _primaryLayoutErrorBoundary2 = _interopRequireDefault(_primaryLayoutErrorBoundary);

var _footer = __webpack_require__(677);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryLayout = function PrimaryLayout(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _primaryLayoutErrorBoundary2.default,
    { className: _primaryLayout2.default.primaryLayout },
    _react2.default.createElement(
      'div',
      { className: _primaryLayout2.default.wrap },
      _react2.default.createElement(
        'div',
        { className: _primaryLayout2.default.main },
        _react2.default.createElement(
          _found.Link,
          { to: '/' },
          'Onboardor'
        ),
        children
      )
    ),
    _react2.default.createElement(_footer2.default, null)
  );
};

PrimaryLayout.defaultProps = {
  children: null
};

PrimaryLayout.propTypes = {
  children: _propTypes2.default.node
};

exports.default = PrimaryLayout;

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"primaryLayout":"Components-layouts-primaryLayout-primaryLayout__primaryLayout","wrap":"Components-layouts-primaryLayout-primaryLayout__wrap","main":"Components-layouts-primaryLayout-primaryLayout__main"};

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(278);

var _found = __webpack_require__(161);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prefer-stateless-function */
var PrimaryLayoutErrorBoundary = function (_React$Component) {
  _inherits(PrimaryLayoutErrorBoundary, _React$Component);

  function PrimaryLayoutErrorBoundary() {
    _classCallCheck(this, PrimaryLayoutErrorBoundary);

    return _possibleConstructorReturn(this, (PrimaryLayoutErrorBoundary.__proto__ || Object.getPrototypeOf(PrimaryLayoutErrorBoundary)).apply(this, arguments));
  }

  _createClass(PrimaryLayoutErrorBoundary, [{
    key: 'render',

    // componentDidCatch() {
    //   this.props.router.push('/error/500');
    // }
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.className },
        this.props.children
      );
    }
  }]);

  return PrimaryLayoutErrorBoundary;
}(_react2.default.Component);

PrimaryLayoutErrorBoundary.defaultProps = {
  className: null
};

PrimaryLayoutErrorBoundary.propTypes = {
  // router: PropTypes.object.isRequired,
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string
};

exports.default = (0, _recompose.compose)(_found.withRouter)(PrimaryLayoutErrorBoundary);

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _found = __webpack_require__(161);

var _footer = __webpack_require__(678);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    'div',
    { className: _footer2.default.footer },
    _react2.default.createElement(
      _found.Link,
      { to: '/termsAndConditions' },
      'terms and conditions'
    ),
    _react2.default.createElement(
      _found.Link,
      { to: '/privacyPolicy' },
      'privacy policy'
    ),
    _react2.default.createElement(
      _found.Link,
      { to: '/imprint' },
      'imprint'
    )
  );
};

exports.default = Footer;

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer":"Components-footer-footer__footer"};

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _relayRuntime = __webpack_require__(14);

var _relayCompose = __webpack_require__(721);

var fetchQuery = function fetchQuery(operation, variables) {
  return fetch('/graphql', {
    method: 'post',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables: variables
    })
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
    // https://github.com/facebook/relay/issues/1816
    if (json.errors) {
      return Promise.reject(json.errors);
    }

    return Promise.resolve(json);
  });
};

var network = _relayRuntime.Network.create(fetchQuery);
var source = new _relayRuntime.RecordSource();
var store = new _relayRuntime.Store(source);
var environment = new _relayRuntime.Environment({
  network: network,
  store: store
});

(0, _relayCompose.setEnviroment)(environment);

exports.default = environment;

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[298]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9hcHBDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL3Rlcm1zQW5kQ29uZGl0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5zY3NzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL3ByaXZhY3lQb2xpY3lDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5zY3NzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvYXBwLnNjc3MiXSwibmFtZXMiOlsiUGFnZUNvbnRlbnQiLCJjaGlsZHJlbiIsInBhZ2VDb250ZW50IiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVzb2x2ZXIiLCJBcHAiLCJzdG9yZSIsIlJlbmRlckVycm9yIiwiZXJyb3IiLCJyb3V0ZXIiLCJyZXBsYWNlIiwicGF0aG5hbWUiLCJzdGF0dXMiLCJzdGF0ZSIsImRhdGEiLCJzaGFwZSIsIm51bWJlciIsIm9iamVjdCIsInJlbmRlckVycm9yIiwiaGlzdG9yeUVuaGFuY2VyIiwicHJvdG9jb2wiLCJtaWRkbGV3YXJlcyIsIm1hdGNoZXJFbmhhbmNlciIsImNvbXBvc2VFbmhhbmNlcnMiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJtaWRkbGVXYXJlIiwicmVkdWNlcnMiLCJmb3VuZCIsImZvcm0iLCJkaXNwYXRjaCIsImluaXQiLCJUZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIiLCJyb3V0ZUNvbmZpZyIsIkNvbXBvbmVudCIsIlRlcm1zQW5kQ29uZGl0aW9ucyIsIlByaXZhY3lQb2xpY3lDb250YWluZXIiLCJQcml2YWN5UG9saWN5IiwiSW1wcmludENvbnRhaW5lciIsIkltcHJpbnQiLCJpbXByaW50Q29udGVudCIsImNyZWF0ZVByb3BzIiwiZW5oYW5jZSIsIkVycm9yUGFnZUNvbnRhaW5lciIsInByb3BzIiwicGFyc2VJbnQiLCJwYXJhbXMiLCJsb2NhdGlvbiIsIkVycm9yUGFnZSIsImVycm9yUGFnZSIsImRlZmF1bHRQcm9wcyIsInN0cmluZyIsIlByaW1hcnlMYXlvdXRDb250YWluZXIiLCJQcmltYXJ5TGF5b3V0IiwicHJpbWFyeUxheW91dCIsIndyYXAiLCJtYWluIiwiUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkiLCJjbGFzc05hbWUiLCJGb290ZXIiLCJmb290ZXIiLCJmZXRjaFF1ZXJ5Iiwib3BlcmF0aW9uIiwidmFyaWFibGVzIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwidGV4dCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnJvcnMiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzb2x2ZSIsIm5ldHdvcmsiLCJjcmVhdGUiLCJzb3VyY2UiLCJlbnZpcm9ubWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxjQUFjLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxTQUNsQjtBQUFBO0FBQUEsTUFBSyxXQUFXLHNCQUFPQyxXQUF2QjtBQUNHRDtBQURILEdBRGtCO0FBQUEsQ0FBcEI7O0FBTUFELFlBQVlHLFNBQVosR0FBd0I7QUFDdEJGLFlBQVUsb0JBQVVHLElBQVYsQ0FBZUM7QUFESCxDQUF4Qjs7a0JBSWVMLFc7Ozs7Ozs7Ozs7QUNmZjs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUVBLG1CQUFTTSxNQUFULENBQWdCLGtEQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QixFOzs7Ozs7Ozs7Ozs7OztBQ1BBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQyxXQUFXLCtDQUFqQjs7QUFFQSxJQUFNQyxNQUFNLFNBQU5BLEdBQU07QUFBQSxTQUNWO0FBQUE7QUFBQSxNQUFVLHNCQUFWO0FBQ0Usc0RBQVEsY0FBYyxFQUFFQyxzQkFBRixFQUF0QixFQUFpQyxVQUFVRixRQUEzQztBQURGLEdBRFU7QUFBQSxDQUFaOztrQkFNZUMsRzs7Ozs7Ozs7Ozs7Ozs7QUNoQmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNRSxjQUFjLFNBQWRBLFdBQWMsT0FBdUI7QUFBQSxNQUFwQkMsS0FBb0IsUUFBcEJBLEtBQW9CO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUN6Q0EsU0FBT0MsT0FBUCxDQUFlO0FBQ2JDLDBCQUFvQkgsTUFBTUksTUFEYjtBQUViQyxXQUFPO0FBQ0xMLGFBQU9BLE1BQU1NO0FBRFI7QUFGTSxHQUFmO0FBTUQsQ0FQRDs7QUFTQVAsWUFBWVQsU0FBWixHQUF3QjtBQUN0QlUsU0FBTyxvQkFBVU8sS0FBVixDQUFnQjtBQUNyQkgsWUFBUSxvQkFBVUksTUFBVixDQUFpQmhCO0FBREosR0FBaEIsRUFFSkEsVUFIbUI7QUFJdEJTLFVBQVEsb0JBQVVRLE1BQVYsQ0FBaUJqQjtBQUpILENBQXhCOztrQkFPZSxxQ0FBc0I7QUFDbkNDLFVBQVEsNEJBQWE7QUFDbkJpQixpQkFBYVg7QUFETSxHQUFiO0FBRDJCLENBQXRCLEM7Ozs7Ozs7Ozs7Ozs7O0FDcEJmOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTVksa0JBQWtCLHFDQUFzQjtBQUM1Q0MsWUFBVSwrQkFEa0M7QUFFNUNDLGVBQWE7QUFGK0IsQ0FBdEIsQ0FBeEI7O0FBS0EsSUFBTUMsa0JBQWtCLG1DQUN0Qiw0Q0FEc0IsQ0FBeEI7O0FBSUE7QUFDQSxJQUFNQyxtQkFBbUJDLE9BQU9DLG9DQUFQLGtCQUF6Qjs7QUFFQSxJQUFNQyxhQUFhSCxpQkFDakIsaURBRGlCLEVBRWpCSixlQUZpQixFQUdqQkcsZUFIaUIsQ0FBbkI7O0FBTUEsSUFBTUssV0FBVyw0QkFBZ0I7QUFDL0JDLCtCQUQrQjtBQUUvQkM7QUFGK0IsQ0FBaEIsQ0FBakI7O0FBS0EsSUFBTXZCLFFBQVEsd0JBQVlxQixRQUFaLEVBQXNCLEVBQXRCLEVBQTBCRCxVQUExQixDQUFkOztBQUVBcEIsTUFBTXdCLFFBQU4sQ0FBZSxrQkFBYUMsSUFBYixFQUFmOztrQkFFZXpCLEs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q2Y7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7a0JBRWUsK0JBQ2I7QUFBQTtBQUFBLGFBQU8sTUFBSyxHQUFaO0FBQ0UsNERBQU8sTUFBSyxlQUFaLHFDQURGO0FBRUUsNERBQU8sTUFBSyxvQkFBWiw4Q0FGRjtBQUdFLDREQUFPLE1BQUssZUFBWix5Q0FIRjtBQUlFLDREQUFPLE1BQUssU0FBWjtBQUpGLENBRGEsQzs7Ozs7Ozs7Ozs7Ozs7O0FDVmY7Ozs7OztBQUVBLElBQU0wQiwwREFBTjs7QUFFTyxJQUFNQyxvQ0FBYztBQUN6QkMsYUFBV0Y7QUFEYyxDQUFwQjs7a0JBSVFBLDJCOzs7Ozs7Ozs7Ozs7OztBQ1JmOzs7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBLElBQU1HLHFCQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsU0FDekI7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUUsOENBQU0sTUFBSyxhQUFYLEVBQXlCLFNBQVEsaUVBQWpDO0FBRkYsS0FERjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMRjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FQRjtBQTBCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0FERjtBQVlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQVpGO0FBeUJFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQXpCRjtBQXFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0FyQ0Y7QUE4Q0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BOUNGO0FBdURFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQXZERjtBQThERTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0E5REY7QUF1RUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBdkVGO0FBMUJGLEdBRHlCO0FBQUEsQ0FBM0I7O2tCQWlIZUEsa0I7Ozs7Ozs7QUN0SGY7QUFDQSxrQkFBa0IsNEQ7Ozs7Ozs7Ozs7Ozs7OztBQ0RsQjs7Ozs7O0FBRUEsSUFBTUMsZ0RBQU47O0FBRU8sSUFBTUgsb0NBQWM7QUFDekJDLGFBQVdFO0FBRGMsQ0FBcEI7O2tCQUlRQSxzQjs7Ozs7Ozs7Ozs7Ozs7QUNSZjs7OztBQUNBOztBQUVBOzs7Ozs7QUFFQSxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCO0FBQUEsU0FDcEI7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUUsOENBQU0sTUFBSyxhQUFYLEVBQXlCLFNBQVEscURBQWpDO0FBRkYsS0FERjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMRjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FQRjtBQWdCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0FERjtBQVNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQVRGO0FBZUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BZkY7QUE0QkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BNUJGO0FBeUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixTQUZGO0FBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhGLE9BekNGO0FBeURFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQXpERjtBQWdFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0FoRUY7QUE0RUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BNUVGO0FBc0ZFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQXRGRjtBQW1HRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0FuR0Y7QUFpSEU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BakhGO0FBdUhFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQXZIRjtBQW9JRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFwSUY7QUFoQkYsR0FEb0I7QUFBQSxDQUF0Qjs7a0JBZ0xlQSxhOzs7Ozs7Ozs7Ozs7Ozs7QUNyTGY7Ozs7OztBQUVBLElBQU1DLG9DQUFOOztBQUVPLElBQU1MLG9DQUFjO0FBQ3pCQyxhQUFXSTtBQURjLENBQXBCOztrQkFJUUEsZ0I7Ozs7Ozs7Ozs7Ozs7O0FDUmY7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVU7QUFBQSxTQUNkO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFLDhDQUFNLE1BQUssYUFBWCxFQUF5QixTQUFRLHdDQUFqQztBQUZGLEtBREY7QUFLRTtBQUFBO0FBQUEsUUFBSyxXQUFXLGtCQUFPQyxjQUF2QjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FKRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FMRjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUxGLEdBRGM7QUFBQSxDQUFoQjs7a0JBaUJlRCxPOzs7Ozs7O0FDdkJmO0FBQ0Esa0JBQWtCLDhEOzs7Ozs7Ozs7Ozs7Ozs7QUNEbEI7Ozs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTUUsY0FBYyxTQUFkQSxXQUFjLE9BQXVCO0FBQUEsTUFBcEI3QixNQUFvQixRQUFwQkEsTUFBb0I7QUFBQSxNQUFaSixLQUFZLFFBQVpBLEtBQVk7O0FBQ3pDLFVBQVFJLE1BQVI7QUFDRSxTQUFLLEdBQUw7QUFDRSxhQUFPLEVBQUVKLE9BQU8sOEJBQVQsRUFBUDtBQUNGO0FBQ0UsYUFBTyxFQUFFQSxZQUFGLEVBQVA7QUFKSjtBQU1ELENBUEQ7O0FBU0EsSUFBTWtDLFVBQVUsd0JBQ2QsMEJBQVVELFdBQVYsQ0FEYyxDQUFoQjs7QUFJQSxJQUFNRSxxQkFBcUJELDRCQUEzQjs7QUFFTyxJQUFNVCxvQ0FBYztBQUN6QmhDLFVBQVE7QUFBQSxRQUFHMkMsS0FBSCxTQUFHQSxLQUFIO0FBQUEsV0FBZUEsU0FDckIsOEJBQUMsa0JBQUQ7QUFDRSxjQUFRQyxTQUFTRCxNQUFNRSxNQUFOLENBQWFsQyxNQUF0QixFQUE4QixFQUE5QixDQURWO0FBRUUsYUFBT2dDLE1BQU1HLFFBQU4sQ0FBZWxDLEtBQWYsQ0FBcUJMO0FBRjlCLE1BRE07QUFBQTtBQURpQixDQUFwQjs7a0JBU1FtQyxrQjs7Ozs7Ozs7Ozs7Ozs7QUM3QmY7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7Ozs7QUFFQSxJQUFNSyxZQUFZLFNBQVpBLFNBQVk7QUFBQSxNQUFHcEMsTUFBSCxRQUFHQSxNQUFIO0FBQUEsTUFBV0osS0FBWCxRQUFXQSxLQUFYO0FBQUEsU0FDaEI7QUFBQTtBQUFBLE1BQUssV0FBVyxvQkFBT3lDLFNBQXZCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBY3JDO0FBQWQsT0FERjtBQUVFLDhDQUFNLE1BQUssUUFBWCxFQUFvQixTQUFRLFNBQTVCO0FBRkYsS0FERjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQVdBO0FBQVgsS0FMRjtBQU1FO0FBQUE7QUFBQSxRQUFLLFdBQVcsb0JBQU9KLEtBQXZCO0FBQ0U7QUFBQTtBQUFBO0FBQ0dBO0FBREgsT0FERjtBQUFBO0FBQUE7QUFORixHQURnQjtBQUFBLENBQWxCOztBQWdCQXdDLFVBQVVFLFlBQVYsR0FBeUI7QUFDdkIxQyxTQUFPO0FBRGdCLENBQXpCOztBQUlBd0MsVUFBVWxELFNBQVYsR0FBc0I7QUFDcEJjLFVBQVEsb0JBQVVJLE1BQVYsQ0FBaUJoQixVQURMO0FBRXBCUSxTQUFPLG9CQUFVMkM7QUFGRyxDQUF0Qjs7a0JBS2VILFM7Ozs7Ozs7QUMvQmY7QUFDQSxrQkFBa0IseUc7Ozs7Ozs7Ozs7Ozs7OztBQ0RsQjs7Ozs7O0FBRUEsSUFBTUksZ0RBQU47O0FBRU8sSUFBTW5CLG9DQUFjO0FBQ3pCQyxhQUFXa0I7QUFEYyxDQUFwQjs7a0JBSVFBLHNCOzs7Ozs7Ozs7Ozs7OztBQ1JmOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0I7QUFBQSxNQUNwQnpELFFBRG9CLFFBQ3BCQSxRQURvQjtBQUFBLFNBR3BCO0FBQUE7QUFBQSxNQUE0QixXQUFXLHdCQUFPMEQsYUFBOUM7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFXLHdCQUFPQyxJQUF2QjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVcsd0JBQU9DLElBQXZCO0FBQ0U7QUFBQTtBQUFBLFlBQU0sSUFBRyxHQUFUO0FBQUE7QUFBQSxTQURGO0FBSUc1RDtBQUpIO0FBREYsS0FERjtBQVNFO0FBVEYsR0FIb0I7QUFBQSxDQUF0Qjs7QUFnQkF5RCxjQUFjSCxZQUFkLEdBQTZCO0FBQzNCdEQsWUFBVTtBQURpQixDQUE3Qjs7QUFJQXlELGNBQWN2RCxTQUFkLEdBQTBCO0FBQ3hCRixZQUFVLG9CQUFVRztBQURJLENBQTFCOztrQkFJZXNELGE7Ozs7Ozs7QUNoQ2Y7QUFDQSxrQkFBa0IsNk07Ozs7Ozs7Ozs7Ozs7Ozs7QUNEbEI7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7SUFDTUksMEI7Ozs7Ozs7Ozs7OztBQUNKO0FBQ0E7QUFDQTs2QkFDUztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVyxLQUFLYixLQUFMLENBQVdjLFNBQTNCO0FBQ0csYUFBS2QsS0FBTCxDQUFXaEQ7QUFEZCxPQURGO0FBS0Q7Ozs7RUFWc0MsZ0JBQU1zQyxTOztBQWEvQ3VCLDJCQUEyQlAsWUFBM0IsR0FBMEM7QUFDeENRLGFBQVc7QUFENkIsQ0FBMUM7O0FBSUFELDJCQUEyQjNELFNBQTNCLEdBQXVDO0FBQ3JDO0FBQ0FGLFlBQVUsb0JBQVVHLElBQVYsQ0FBZUMsVUFGWTtBQUdyQzBELGFBQVcsb0JBQVVQO0FBSGdCLENBQXZDOztrQkFNZSwyQ0FFYk0sMEJBRmEsQzs7Ozs7Ozs7Ozs7Ozs7QUM3QmY7Ozs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTUUsU0FBUyxTQUFUQSxNQUFTO0FBQUEsU0FDYjtBQUFBO0FBQUEsTUFBSyxXQUFXLGlCQUFPQyxNQUF2QjtBQUNFO0FBQUE7QUFBQSxRQUFNLElBQUcscUJBQVQ7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBTSxJQUFHLGdCQUFUO0FBQUE7QUFBQSxLQUZGO0FBR0U7QUFBQTtBQUFBLFFBQU0sSUFBRyxVQUFUO0FBQUE7QUFBQTtBQUhGLEdBRGE7QUFBQSxDQUFmOztrQkFRZUQsTTs7Ozs7OztBQ2JmO0FBQ0Esa0JBQWtCLDZDOzs7Ozs7Ozs7Ozs7OztBQ0RsQjs7QUFNQTs7QUFFQSxJQUFNRSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsU0FBRCxFQUFZQyxTQUFaO0FBQUEsU0FDakJDLE1BQU0sVUFBTixFQUFrQjtBQUNoQkMsWUFBUSxNQURRO0FBRWhCQyxpQkFBYSxhQUZHO0FBR2hCQyxhQUFTO0FBQ1BDLGNBQVEsa0JBREQ7QUFFUCxzQkFBZ0I7QUFGVCxLQUhPO0FBT2hCQyxVQUFNQyxLQUFLQyxTQUFMLENBQWU7QUFDbkJDLGFBQU9WLFVBQVVXLElBREU7QUFFbkJWO0FBRm1CLEtBQWY7QUFQVSxHQUFsQixFQVdHVyxJQVhILENBV1E7QUFBQSxXQUFZQyxTQUFTQyxJQUFULEVBQVo7QUFBQSxHQVhSLEVBWUdGLElBWkgsQ0FZUSxVQUFDRSxJQUFELEVBQVU7QUFDZDtBQUNBLFFBQUlBLEtBQUtDLE1BQVQsRUFBaUI7QUFDZixhQUFPQyxRQUFRQyxNQUFSLENBQWVILEtBQUtDLE1BQXBCLENBQVA7QUFDRDs7QUFFRCxXQUFPQyxRQUFRRSxPQUFSLENBQWdCSixJQUFoQixDQUFQO0FBQ0QsR0FuQkgsQ0FEaUI7QUFBQSxDQUFuQjs7QUFzQkEsSUFBTUssVUFBVSxzQkFBUUMsTUFBUixDQUFlckIsVUFBZixDQUFoQjtBQUNBLElBQU1zQixTQUFTLGdDQUFmO0FBQ0EsSUFBTTdFLFFBQVEsd0JBQVU2RSxNQUFWLENBQWQ7QUFDQSxJQUFNQyxjQUFjLDhCQUFnQjtBQUNsQ0gsa0JBRGtDO0FBRWxDM0U7QUFGa0MsQ0FBaEIsQ0FBcEI7O0FBS0EsaUNBQWM4RSxXQUFkOztrQkFFZUEsVzs7Ozs7OztBQ3hDZix5QyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlQ29udGVudC5zY3NzJztcblxuY29uc3QgUGFnZUNvbnRlbnQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUNvbnRlbnR9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5QYWdlQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUNvbnRlbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0ICcuL2FwcC5zY3NzJztcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9hcHBDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSZXNvbHZlciB9IGZyb20gJ2ZvdW5kLXJlbGF5JztcblxuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRpbmcvcm91dGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlL3N0b3JlJztcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50L2Vudmlyb25tZW50JztcblxuY29uc3QgcmVzb2x2ZXIgPSBuZXcgUmVzb2x2ZXIoZW52aXJvbm1lbnQpO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgbWF0Y2hDb250ZXh0PXt7IHN0b3JlIH19IHJlc29sdmVyPXtyZXNvbHZlcn0gLz5cbiAgPC9Qcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL2FwcC5qcyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3JlYXRlQ29ubmVjdGVkUm91dGVyIGZyb20gJ2ZvdW5kL2xpYi9jcmVhdGVDb25uZWN0ZWRSb3V0ZXInO1xuaW1wb3J0IGNyZWF0ZVJlbmRlciBmcm9tICdmb3VuZC9saWIvY3JlYXRlUmVuZGVyJztcblxuY29uc3QgUmVuZGVyRXJyb3IgPSAoeyBlcnJvciwgcm91dGVyIH0pID0+IHtcbiAgcm91dGVyLnJlcGxhY2Uoe1xuICAgIHBhdGhuYW1lOiBgL2Vycm9yLyR7ZXJyb3Iuc3RhdHVzfWAsXG4gICAgc3RhdGU6IHtcbiAgICAgIGVycm9yOiBlcnJvci5kYXRhLFxuICAgIH0sXG4gIH0pO1xufTtcblxuUmVuZGVyRXJyb3IucHJvcFR5cGVzID0ge1xuICBlcnJvcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzdGF0dXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIoe1xuICByZW5kZXI6IGNyZWF0ZVJlbmRlcih7XG4gICAgcmVuZGVyRXJyb3I6IFJlbmRlckVycm9yLFxuICB9KSxcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlci5qcyIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBmb3VuZCBmcm9tICdmb3VuZC9saWIvZm91bmRSZWR1Y2VyJztcbmltcG9ydCBGYXJjZUFjdGlvbnMgZnJvbSAnZmFyY2UvbGliL0FjdGlvbnMnO1xuaW1wb3J0IEJyb3dzZXJQcm90b2NvbCBmcm9tICdmYXJjZS9saWIvQnJvd3NlclByb3RvY29sJztcbmltcG9ydCBjcmVhdGVIaXN0b3J5RW5oYW5jZXIgZnJvbSAnZmFyY2UvbGliL2NyZWF0ZUhpc3RvcnlFbmhhbmNlcic7XG5pbXBvcnQgcXVlcnlNaWRkbGV3YXJlIGZyb20gJ2ZhcmNlL2xpYi9xdWVyeU1pZGRsZXdhcmUnO1xuaW1wb3J0IGNyZWF0ZU1hdGNoRW5oYW5jZXIgZnJvbSAnZm91bmQvbGliL2NyZWF0ZU1hdGNoRW5oYW5jZXInO1xuaW1wb3J0IE1hdGNoZXIgZnJvbSAnZm91bmQvbGliL01hdGNoZXInO1xuXG5pbXBvcnQgcm91dGVDb25maWcgZnJvbSAnLi4vcm91dGluZy9yb3V0ZUNvbmZpZyc7XG5cbmNvbnN0IGhpc3RvcnlFbmhhbmNlciA9IGNyZWF0ZUhpc3RvcnlFbmhhbmNlcih7XG4gIHByb3RvY29sOiBuZXcgQnJvd3NlclByb3RvY29sKCksXG4gIG1pZGRsZXdhcmVzOiBbcXVlcnlNaWRkbGV3YXJlXSxcbn0pO1xuXG5jb25zdCBtYXRjaGVyRW5oYW5jZXIgPSBjcmVhdGVNYXRjaEVuaGFuY2VyKFxuICBuZXcgTWF0Y2hlcihyb3V0ZUNvbmZpZyksXG4pO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIHx8IGNvbXBvc2U7XG5cbmNvbnN0IG1pZGRsZVdhcmUgPSBjb21wb3NlRW5oYW5jZXJzKFxuICBhcHBseU1pZGRsZXdhcmUodGh1bmspLFxuICBoaXN0b3J5RW5oYW5jZXIsXG4gIG1hdGNoZXJFbmhhbmNlcixcbik7XG5cbmNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgZm91bmQsXG4gIGZvcm0sXG59KTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycywge30sIG1pZGRsZVdhcmUpO1xuXG5zdG9yZS5kaXNwYXRjaChGYXJjZUFjdGlvbnMuaW5pdCgpKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9zdG9yZS9zdG9yZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWFrZVJvdXRlQ29uZmlnIGZyb20gJ2ZvdW5kL2xpYi9tYWtlUm91dGVDb25maWcnO1xuaW1wb3J0IFJvdXRlIGZyb20gJ2ZvdW5kL2xpYi9Sb3V0ZSc7XG5cbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIHRlcm1zQW5kQ29uZGl0aW9uc1JvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZm9vdGVyL3Rlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBwcml2YWN5UG9saWN5Um91dGVDb25maWcgfSBmcm9tICcuLi8uLi9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBpbXByaW50Um91dGVDb25maWcgfSBmcm9tICcuLi8uLi9mb290ZXIvaW1wcmludENvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBlcnJvclBhZ2VSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2Vycm9yUGFnZS9lcnJvclBhZ2VDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgcHJpbWFyeUxheW91dFJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRDb250YWluZXInO1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlUm91dGVDb25maWcoXG4gIDxSb3V0ZSBwYXRoPVwiL1wiIHsuLi5wcmltYXJ5TGF5b3V0Um91dGVDb25maWd9PlxuICAgIDxSb3V0ZSBwYXRoPVwiZXJyb3IvOnN0YXR1c1wiIHsuLi5lcnJvclBhZ2VSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cInRlcm1zQW5kQ29uZGl0aW9uc1wiIHsuLi50ZXJtc0FuZENvbmRpdGlvbnNSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cInByaXZhY3lQb2xpY3lcIiB7Li4ucHJpdmFjeVBvbGljeVJvdXRlQ29uZmlnfSAvPlxuICAgIDxSb3V0ZSBwYXRoPVwiaW1wcmludFwiIHsuLi5pbXByaW50Um91dGVDb25maWd9IC8+XG4gIDwvUm91dGU+LFxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVDb25maWcuanMiLCJpbXBvcnQgVGVybXNBbmRDb25kaXRpb25zIGZyb20gJy4vdGVybXNBbmRDb25kaXRpb25zJztcblxuY29uc3QgVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyID0gVGVybXNBbmRDb25kaXRpb25zO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbmltcG9ydCBQYWdlQ29udGVudCBmcm9tICcuLi9zaGFyZWQvcGFnZUNvbnRlbnQnO1xuXG5jb25zdCBUZXJtc0FuZENvbmRpdGlvbnMgPSAoKSA9PiAoXG4gIDxQYWdlQ29udGVudD5cbiAgICA8SGVsbWV0PlxuICAgICAgPHRpdGxlPlRlcm1zIGFuZCBDb25kaXRpb25zPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJPdXIgdGVybXMgYW5kIGNvbmRpdGlvbnMgdGhhdCB5b3UgYWdyZWUgdG8gd2hlbiB1c2luZyBvdXIgc2l0ZS5cIiAvPlxuICAgIDwvSGVsbWV0PlxuICAgIDxoMT5UZXJtcyBhbmQgQ29uZGl0aW9uczwvaDE+XG4gICAgPGgyPkxhc3QgVXBkYXRlZDogSnVuZSAxMXRoIDIwMTg8L2gyPlxuICAgIDxwPlxuICAgICAgJnF1b3Q7WW91JnF1b3Q7IGFuZCAmcXVvdDt5b3VyJnF1b3Q7IHJlZmVyIHRvIHlvdSwgYXMgYSB1c2VyIG9mIHRoZSBTaXRlLlxuICAgICAgQSAmcXVvdDt1c2VyJnF1b3Q7IGlzIHNvbWVvbmUgd2hvIGFjY2Vzc2VzLGJyb3dzZXMsIGNyYXdscywgc2NyYXBlcywgb3IgaW4gYW55XG4gICAgICB3YXkgdXNlcyB0aGUgU2l0ZS4gJnF1b3Q7V2UsJnF1b3Q7ICZxdW90O3VzLCZxdW90OyBhbmQgJnF1b3Q7b3VyJnF1b3Q7IHJlZmVyIHRvIG9uYm9hcmRvci5cbiAgICAgICZxdW90O0NvbnRlbnQmcXVvdDsgbWVhbnMgdGV4dCwgaW1hZ2VzLCBwaG90b3MsIGF1ZGlvLCB2aWRlbywgbG9jYXRpb24gZGF0YSxcbiAgICAgIGFuZCBhbGwgb3RoZXIgZm9ybXMgb2YgZGF0YSBvciBjb21tdW5pY2F0aW9uLlxuICAgICAgJnF1b3Q7WW91ciBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdCB5b3Ugc3VibWl0IG9yIHRyYW5zbWl0IHRvLCB0aHJvdWdoLCBvciBpblxuICAgICAgY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLCBzdWNoIGFzIHJhdGluZ3MsIHJldmlld3MsIGNvbXBsaW1lbnRzLCBpbnZpdGF0aW9ucyxcbiAgICAgIGNoZWNrLWlucywgbWVzc2FnZXMsIGFuZCBpbmZvcm1hdGlvbiB0aGF0IHlvdSBwdWJsaWNseSBkaXNwbGF5IG9yIGRpc3BsYXllZCBpblxuICAgICAgeW91ciBhY2NvdW50IHByb2ZpbGUuXG4gICAgICAmcXVvdDtVc2VyIENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0IHVzZXJzIHN1Ym1pdCBvciB0cmFuc21pdCB0bywgdGhyb3VnaCxcbiAgICAgIG9yIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZS4gJnF1b3Q7b25ib2FyZG9yIENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0XG4gICAgICB3ZSBjcmVhdGUgYW5kIG1ha2UgYXZhaWxhYmxlIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZS5cbiAgICAgICZxdW90O1RoaXJkIFBhcnR5IENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0IG9yaWdpbmF0ZXMgZnJvbSBwYXJ0aWVzIG90aGVyXG4gICAgICB0aGFuIG9uYm9hcmRvciBvciBpdHMgdXNlcnMsIHdoaWNoIGlzIG1hZGUgYXZhaWxhYmxlIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZS5cbiAgICAgICZxdW90O1NpdGUgQ29udGVudCZxdW90OyBtZWFucyBhbGwgb2YgdGhlIENvbnRlbnQgdGhhdCBpcyBtYWRlIGF2YWlsYWJsZSBpbiBjb25uZWN0aW9uXG4gICAgICB3aXRoIHRoZSBTaXRlLCBpbmNsdWRpbmcgWW91ciBDb250ZW50LCBVc2VyIENvbnRlbnQsIFRoaXJkIFBhcnR5IENvbnRlbnQsXG4gICAgICBhbmQgb25ib2FyZG9yIENvbnRlbnQuXG4gICAgPC9wPlxuICAgIDxvbD5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPlRlcm1zPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQnkgYWNjZXNzaW5nIHRoaXMgd2Vic2l0ZSwgeW91IGFyZSBhZ3JlZWluZyB0byBiZSBib3VuZCBieSB0aGVzZSB3ZWJzaXRlIFRlcm1zXG4gICAgICAgICAgYW5kIENvbmRpdGlvbnMgb2YgVXNlLCBhbGwgYXBwbGljYWJsZSBsYXdzIGFuZCByZWd1bGF0aW9ucywgYW5kIGFncmVlIHRoYXQgeW91XG4gICAgICAgICAgYXJlIHJlc3BvbnNpYmxlIGZvciBjb21wbGlhbmNlIHdpdGggYW55IGFwcGxpY2FibGUgbG9jYWwgbGF3cy5cbiAgICAgICAgICBJZiB5b3UgZG8gbm90IGFncmVlIHdpdGggYW55IG9mIHRoZXNlIHRlcm1zLCB5b3UgYXJlIHByb2hpYml0ZWQgZnJvbSB1c2luZyBvclxuICAgICAgICAgIGFjY2Vzc2luZyB0aGlzIHNpdGUuIFRoZSBtYXRlcmlhbHMgY29udGFpbmVkIGluIHRoaXMgd2Vic2l0ZSBhcmUgcHJvdGVjdGVkXG4gICAgICAgICAgYnkgYXBwbGljYWJsZSBjb3B5cmlnaHQgYW5kIHRyYWRlIG1hcmsgbGF3LlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RGlzY2xhaW1lcjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBtYXRlcmlhbHMgb24gdGhlIG9uYm9hcmRvciB3ZWJzaXRlIGFyZSBwcm92aWRlZCAmcXVvdDthcyBzaG93biZxdW90Oy5cbiAgICAgICAgICBvbmJvYXJkb3IgbWFrZXMgbm8gd2FycmFudGllcywgZXhwcmVzc2VkIG9yIGltcGxpZWQsIGFuZCBoZXJlYnkgZGlzY2xhaW1zXG4gICAgICAgICAgYW5kIG5lZ2F0ZXMgYWxsIG90aGVyIHdhcnJhbnRpZXMsIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24sIGltcGxpZWRcbiAgICAgICAgICB3YXJyYW50aWVzIG9yIGNvbmRpdGlvbnMgb2YgbWVyY2hhbnRhYmlsaXR5LCBmaXRuZXNzIGZvciBhIHBhcnRpY3VsYXJcbiAgICAgICAgICBwdXJwb3NlLCBvciBub24taW5mcmluZ2VtZW50IG9mIGludGVsbGVjdHVhbCBwcm9wZXJ0eSBvciBvdGhlciB2aW9sYXRpb24gb2YgcmlnaHRzLlxuICAgICAgICAgIEZ1cnRoZXIsIG9uYm9hcmRvciBkb2VzIG5vdCB3YXJyYW50IG9yIG1ha2UgYW55IHJlcHJlc2VudGF0aW9ucyBjb25jZXJuaW5nIHRoZSBhY2N1cmFjeSxcbiAgICAgICAgICBsaWtlbHkgcmVzdWx0cywgb3IgcmVsaWFiaWxpdHkgb2YgdGhlIHVzZSBvZiB0aGUgbWF0ZXJpYWxzIG9uIGl0cyBpbnRlcm5ldFxuICAgICAgICAgIHdlYnNpdGUgb3Igb3RoZXJ3aXNlIHJlbGF0aW5nIHRvIHN1Y2ggbWF0ZXJpYWxzIG9yIG9uIGFueSBzaXRlcyBsaW5rZWQgdG8gdGhpcyBzaXRlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+TGltaXRhdGlvbnM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJbiBubyBldmVudCBzaGFsbCBvbmJvYXJkb3Igb3IgaXRzIHN1cHBsaWVycyBiZSBsaWFibGUgZm9yIGFueSBkYW1hZ2VzIChpbmNsdWRpbmcsIHdpdGhvdXRcbiAgICAgICAgICBsaW1pdGF0aW9uLCBkYW1hZ2VzIGZvciBsb3NzIG9mIGRhdGEgb3IgcHJvZml0LCBvciBkdWUgdG8gYnVzaW5lc3MgaW50ZXJydXB0aW9uKVxuICAgICAgICAgIGFyaXNpbmcgb3V0IG9mIHRoZSB1c2Ugb3IgaW5hYmlsaXR5IHRvIHVzZSB0aGUgbWF0ZXJpYWxzIG9uIG91ciBpbnRlcm5ldCBzaXRlIG9yXG4gICAgICAgICAgb2ZmZXJlZCBzZXJ2aWNlcywgZXZlbiBpZiB3ZSBvciBhbiBhdXRob3JpemVkIHJlcHJlc2VudGF0aXZlIGhhcyBiZWVuIG5vdGlmaWVkXG4gICAgICAgICAgb3JhbGx5IG9yIGluIHdyaXRpbmcgb2YgdGhlIHBvc3NpYmlsaXR5IG9mIHN1Y2ggZGFtYWdlLiBCZWNhdXNlIHNvbWUganVyaXNkaWN0aW9uc1xuICAgICAgICAgIGRvIG5vdCBhbGxvdyBsaW1pdGF0aW9ucyBvbiBpbXBsaWVkIHdhcnJhbnRpZXMsIG9yIGxpbWl0YXRpb25zIG9mIGxpYWJpbGl0eSBmb3JcbiAgICAgICAgICBjb25zZXF1ZW50aWFsIG9yIGluY2lkZW50YWwgZGFtYWdlcywgdGhlc2UgbGltaXRhdGlvbnMgbWF5IG5vdCBhcHBseSB0byB5b3UuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5SZXZpc2lvbnMgYW5kIEVycm9yczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBtYXRlcmlhbHMgYXBwZWFyaW5nIG9uIG91ciB3ZWJzaXRlIGNvdWxkIGluY2x1ZGUgdGVjaG5pY2FsLCB0eXBvZ3JhcGhpY2FsLFxuICAgICAgICAgIG9yIHBob3RvZ3JhcGhpYyBlcnJvcnMuIG9uYm9hcmRvciBkb2VzIG5vdCB3YXJyYW50IHRoYXQgYW55IG9mIHRoZSBtYXRlcmlhbHMgb25cbiAgICAgICAgICBpdHMgd2Vic2l0ZSBhcmUgYWNjdXJhdGUsIGNvbXBsZXRlLCBvciBjdXJyZW50LiBXZSBtYXkgbWFrZSBjaGFuZ2VzIHRvIHRoZVxuICAgICAgICAgIG1hdGVyaWFscyBjb250YWluZWQgb24gaXRzIHdlYnNpdGUgYXQgYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5MaW5rczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIG9uYm9hcmRvciBoYXMgbm90IHJldmlld2VkIGFsbCBvZiB0aGUgc2l0ZXMgbGlua2VkIHRvIGl0cyBpbnRlcm5ldCB3ZWJzaXRlXG4gICAgICAgICAgYW5kIGlzIG5vdCByZXNwb25zaWJsZSBmb3IgdGhlIGNvbnRlbnRzIG9mIGFueSBzdWNoIGxpbmtlZCBzaXRlLlxuICAgICAgICAgIFRoZSBpbmNsdXNpb24gb2YgYW55IGxpbmsgZG9lcyBub3QgaW1wbHkgZW5kb3JzZW1lbnQgYnkgdXMgb2YgdGhlIHNpdGUuXG4gICAgICAgICAgVXNlIG9mIGFueSBzdWNoIGxpbmtlZCB3ZWJzaXRlIGlzIGF0IHRoZSB1c2VyJnF1b3Q7cyBvd24gcmlzay5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkdvdmVybmluZyBMYXc8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBbnkgY2xhaW0gcmVsYXRpbmcgdG8gdGhlIG9uYm9hcmRvciB3ZWJzaXRlIHNoYWxsIGJlIGdvdmVybmVkIGJ5IHRoZSBsYXdzXG4gICAgICAgICAgb2YgdGhlIGNvdW50cnkgb2Ygbm90ZSB3aXRob3V0IHJlZ2FyZCB0byBpdHMgY29uZmxpY3Qgb2YgbGF3IHByb3Zpc2lvbnMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5FbmdsaXNoIExhbmd1YWdlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSW4gdGhlIGV2ZW50IG9mIGEgY29uZmxpY3QgYmV0d2VlbiB0aGVzZSBUZXJtcyBhbmQgYSBmb3JlaWduIGxhbmd1YWdlIHZlcnNpb25cbiAgICAgICAgICBvZiBvdXIgVGVybXMgb2YgVXNlLCB0aGUgRW5nbGlzaCBsYW5ndWFnZSB2ZXJzaW9uIG9mIHRoZXNlIFRlcm1zIGdvdmVybnMuXG4gICAgICAgICAgQWxsIGRpc3B1dGVzLCBjbGFpbXMgYW5kIGNhdXNlcyBvZiBhY3Rpb24gKGFuZCByZWxhdGVkIHByb2NlZWRpbmdzKSB3aWxsIGJlXG4gICAgICAgICAgY29tbXVuaWNhdGVkIGluIEVuZ2xpc2guXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Db3B5cmlnaHQgcG9saWN5LCBub3RpY2UgYW5kIGNsYWltIGluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQWxsIG1hdGVyaWFscyBvbiB0aGlzIHNpdGUsIHdoZXRoZXIgc2VwYXJhdGUgb3IgY29tcGlsZWQsIGluY2x1ZGluZyxcbiAgICAgICAgICBidXQgbm90IGxpbWl0ZWQgdG8sIHRleHQsIGdyYXBoaWNzLCBhdWRpbyBjbGlwcywgbG9nb3MsIGJ1dHRvbnMsIGltYWdlcyxcbiAgICAgICAgICBkaWdpdGFsIGRvd25sb2FkcywgZGF0YSBjb21waWxhdGlvbnMsIHNvZnR3YXJlLCBpY29ucywgaHRtbCBjb2RlIGFuZCB4bWwgY29kZSxcbiAgICAgICAgICBhcyB3ZWxsIGFzIGFsbCBjb3B5cmlnaHQsIHBhdGVudCwgdHJhZGVtYXJrLCB0cmFkZSBkcmVzcywgYW5kIG90aGVyIHJpZ2h0c1xuICAgICAgICAgIHRoZXJlaW4sIGFyZSBvd25lZCBvciBsaWNlbnNlZCBieSBvbmJvYXJkb3IgYW5kIGl0cyB0aGlyZC1wYXJ0eSBpbmZvcm1hdGlvbiBwcm92aWRlcnMsXG4gICAgICAgICAgYW5kIGFyZSBwcm90ZWN0ZWQgYnkgaW50ZXJuYXRpb25hbCBpbnRlbGxlY3R1YWwgcHJvcGVydHkgbGF3cy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICA8L29sPlxuICA8L1BhZ2VDb250ZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVGVybXNBbmRDb25kaXRpb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicGFnZUNvbnRlbnRcIjpcIkNvbXBvbmVudHMtc2hhcmVkLXBhZ2VDb250ZW50X19wYWdlQ29udGVudFwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BhZ2VDb250ZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUHJpdmFjeVBvbGljeSBmcm9tICcuL3ByaXZhY3lQb2xpY3knO1xuXG5jb25zdCBQcml2YWN5UG9saWN5Q29udGFpbmVyID0gUHJpdmFjeVBvbGljeTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IFByaXZhY3lQb2xpY3lDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcml2YWN5UG9saWN5Q29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG5pbXBvcnQgUGFnZUNvbnRlbnQgZnJvbSAnLi4vc2hhcmVkL3BhZ2VDb250ZW50JztcblxuY29uc3QgUHJpdmFjeVBvbGljeSA9ICgpID0+IChcbiAgPFBhZ2VDb250ZW50PlxuICAgIDxIZWxtZXQ+XG4gICAgICA8dGl0bGU+UHJpdmFjeSBQb2xpY3k8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk91ciBwcml2YWN5IHBvbGljeSBleHBsYWluaW5nIHdoYXQgZGF0YSB3ZSBjb2xsZWN0LlwiIC8+XG4gICAgPC9IZWxtZXQ+XG4gICAgPGgxPlByaXZhY3kgUG9saWN5PC9oMT5cbiAgICA8aDI+TGFzdCBVcGRhdGVkOiBKdW5lIDExdGggMjAxODwvaDI+XG4gICAgPHA+XG4gICAgICBUaGlzIHByaXZhY3kgcG9saWN5IGhhcyBiZWVuIGNvbXBpbGVkIHRvIGJldHRlciBzZXJ2ZSB0aG9zZSB3aG8gYXJlIGNvbmNlcm5lZCB3aXRoIGhvdyB0aGVpclxuICAgICAgJmFwb3M7UGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24mYXBvczsgKFBJSSkgaXMgYmVpbmcgdXNlZCBvbmxpbmUuXG4gICAgICBQSUksIGFzIGRlc2NyaWJlZCBpbiBVUyBwcml2YWN5IGxhdyBhbmQgaW5mb3JtYXRpb24gc2VjdXJpdHksIGlzIGluZm9ybWF0aW9uIHRoYXQgY2FuIGJlIHVzZWRcbiAgICAgIG9uIGl0cyBvd24gb3Igd2l0aCBvdGhlciBpbmZvcm1hdGlvbiB0byBpZGVudGlmeSwgY29udGFjdCwgb3IgbG9jYXRlIGEgc2luZ2xlIHBlcnNvbiwgb3IgdG9cbiAgICAgIGlkZW50aWZ5IGFuIGluZGl2aWR1YWwgaW4gY29udGV4dC4gUGxlYXNlIHJlYWQgb3VyIHByaXZhY3kgcG9saWN5IGNhcmVmdWxseSB0byBnZXQgYSBjbGVhclxuICAgICAgdW5kZXJzdGFuZGluZyBvZiBob3cgd2UgY29sbGVjdCwgdXNlLCBwcm90ZWN0IG9yIG90aGVyd2lzZSBoYW5kbGVcbiAgICAgIHlvdXIgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24gaW4gYWNjb3JkYW5jZSB3aXRoIG91ciB3ZWJzaXRlLlxuICAgIDwvcD5cbiAgICA8b2w+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5XaGF0IHBlcnNvbmFsIGluZm9ybWF0aW9uIGRvIHdlIGNvbGxlY3Q/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2hlbiByZWdpc3RlcmluZyBmb3Igb3VyIG5ld3NsZXR0ZXIsIHlvdSB3aWxsIGJlIGFza2VkIHRvIGVudGVyIHlvdXIgZW1haWwgYWRkcmVzcy5cbiAgICAgICAgICBUaGlzIGlzIHRvIGhlbHAgdXMgaW5kZW50aWZ5IHlvdSBhbmQga2VlcCB5b3UgdXBkYXRlZC5cbiAgICAgICAgICBXZSB3aWxsIG5vdCBzZW5kIHlvdSBhbnkgZW1haWxzIHRoYXQgeW91IGRvIG5vdCByZXF1ZXN0LlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+V2hlbiBkbyB3ZSBjb2xsZWN0IGluZm9ybWF0aW9uPzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGNvbGxlY3QgY2VydGFpbiBpbmZvcm1hdGlvbiBmcm9tIHlvdSB3aGVuIHlvdSByZWdpc3RlciBmb3Igb3VyIG5ld3NsZXR0ZXIuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Ib3cgZG8gd2UgcHJvdGVjdCB5b3VyIGluZm9ybWF0aW9uPzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGRvIG5vdCB1c2UgdnVsbmVyYWJpbGl0eSBzY2FubmluZyBhbmQvb3Igc2Nhbm5pbmcgdG8gUENJIHN0YW5kYXJkcy5cbiAgICAgICAgICBXZSBuZXZlciBhc2sgZm9yIGNyZWRpdCBjYXJkIG51bWJlcnMuIFdlIHVzZSByZWd1bGFyIE1hbHdhcmUgU2Nhbm5pbmcuXG4gICAgICAgICAgWW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBpcyBjb250YWluZWQgYmVoaW5kIHNlY3VyZWQgbmV0d29ya3MgYW5kIGlzIG9ubHkgYWNjZXNzaWJsZVxuICAgICAgICAgIGJ5IGEgbGltaXRlZCBudW1iZXIgb2YgcGVyc29ucyB3aG8gaGF2ZSBzcGVjaWFsIGFjY2VzcyByaWdodHMgdG8gc3VjaCBzeXN0ZW1zLCBhbmQgYXJlXG4gICAgICAgICAgcmVxdWlyZWQgdG8ga2VlcCB0aGUgaW5mb3JtYXRpb24gY29uZmlkZW50aWFsLiBJbiBhZGRpdGlvbiwgYWxsIHNlbnNpdGl2ZSBpbmZvcm1hdGlvblxuICAgICAgICAgIHlvdSBzdXBwbHkgaXMgZW5jcnlwdGVkIHZpYSBTZWN1cmUgU29ja2V0IExheWVyIChTU0wpIHRlY2hub2xvZ3kuXG4gICAgICAgICAgV2UgaW1wbGVtZW50IGEgdmFyaWV0eSBvZiBzZWN1cml0eSBtZWFzdXJlcyB3aGVuIGEgdXNlciBlbnRlcnMsIHN1Ym1pdHMsIG9yIGFjY2Vzc2VzIHRoZWlyXG4gICAgICAgICAgaW5mb3JtYXRpb24gdG8gbWFpbnRhaW4gdGhlIHNhZmV0eSBvZiB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RG8gd2UgdXNlICZhcG9zO2Nvb2tpZXMmYXBvczs/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgWWVzLiBDb29raWVzIGFyZSBzbWFsbCBmaWxlcyB0aGF0IGEgc2l0ZSBvciBpdHMgc2VydmljZSBwcm92aWRlciB0cmFuc2ZlcnMgdG8geW91clxuICAgICAgICAgIGNvbXB1dGVyJmFwb3M7cyBoYXJkIGRyaXZlIHRocm91Z2ggeW91ciBXZWIgYnJvd3NlciB0aGF0IGVuYWJsZXMgdGhlXG4gICAgICAgICAgc2l0ZSZhcG9zO3Mgb3Igc2VydmljZSBwcm92aWRlciZhcG9zO3Mgc3lzdGVtcyB0byByZWNvZ25pemUgeW91ciBicm93c2VyIGFuZCBjYXB0dXJlXG4gICAgICAgICAgYW5kIHJlbWVtYmVyIGNlcnRhaW4gaW5mb3JtYXRpb24uIFRoZXkgYXJlIHVzZWQgdG8gaGVscCB1cyB1bmRlcnN0YW5kIHlvdXIgcHJlZmVyZW5jZXNcbiAgICAgICAgICBiYXNlZCBvbiBwcmV2aW91cyBvciBjdXJyZW50IHNpdGUgYWN0aXZpdHksIHdoaWNoIGVuYWJsZXMgdXMgdG8gcHJvdmlkZVxuICAgICAgICAgIHlvdSB3aXRoIGltcHJvdmVkIHNlcnZpY2VzLiBXZSBhbHNvIHVzZSBjb29raWVzIHRvIGhlbHAgdXMgY29tcGlsZSBhZ2dyZWdhdGUgZGF0YSBhYm91dFxuICAgICAgICAgIHNpdGUgdHJhZmZpYyBhbmQgc2l0ZSBpbnRlcmFjdGlvbiBzbyB0aGF0IHdlIGNhbiBvZmZlciBiZXR0ZXIgc2l0ZVxuICAgICAgICAgIGV4cGVyaWVuY2VzIGFuZCB0b29scyBpbiB0aGUgZnV0dXJlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+V2UgdXNlIGNvb2tpZXMgdG86PC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5VbmRlcnN0YW5kIGFuZCBzYXZlIHVzZXImYXBvcztzIHByZWZlcmVuY2VzIGZvciBmdXR1cmUgdmlzaXRzLjwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgQ29tcGlsZSBhZ2dyZWdhdGUgZGF0YSBhYm91dCBzaXRlIHRyYWZmaWMgYW5kIHNpdGUgaW50ZXJhY3Rpb25zXG4gICAgICAgICAgICBpbiBvcmRlciB0byBvZmZlciBiZXR0ZXIgc2l0ZSBleHBlcmllbmNlcyBhbmQgdG9vbHMgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIFdlIG1heSBhbHNvIHVzZSB0cnVzdGVkIHRoaXJkLXBhcnR5IHNlcnZpY2VzIHRoYXQgdHJhY2sgdGhpc1xuICAgICAgICAgICAgaW5mb3JtYXRpb24gb24gb3VyIGJlaGFsZlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxwPlxuICAgICAgICAgIENvb2tpZXMgYXJlIGFuIGltcG9ydGFudCBwYXJ0IG9mIG91ciB3ZWJzaXRlIGFuZCB0aGUgd2Vic2l0ZSB3aWxsIG5vdCB3b3JrXG4gICAgICAgICAgd2l0aG91dCBoYXZpbmcgdGhlbSBlbmFibGVkLiBCeSB1c2luZyBvdXIgc2l0ZSB5b3UgYWxsb3cgdXMgdG8gdXNlIGNvb2tpZXMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5UaGlyZC1wYXJ0eSBkaXNjbG9zdXJlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2UgZG8gbm90IHNlbGwsIHRyYWRlLCBvciBvdGhlcndpc2UgdHJhbnNmZXIgdG8gb3V0c2lkZVxuICAgICAgICAgIHBhcnRpZXMgeW91ciBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbi5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPlRoaXJkLXBhcnR5IGxpbmtzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlcmUgbWF5IGJlIHRoaXJkLXBhcnR5IGxpbmtzIHRvIHJhZGlvIHN0YXRpb24gd2Vic2l0ZXMgdGhyb3VnaG91dCBvdXJcbiAgICAgICAgICB3ZWJzaXRlLiBUaGVzZSB0aGlyZC1wYXJ0eSBzaXRlcyBoYXZlIHNlcGFyYXRlIGFuZCBpbmRlcGVuZGVudCBwcml2YWN5IHBvbGljaWVzLlxuICAgICAgICAgIFdlIHRoZXJlZm9yZSBoYXZlIG5vIHJlc3BvbnNpYmlsaXR5IG9yIGxpYWJpbGl0eSBmb3IgdGhlIGNvbnRlbnQgYW5kXG4gICAgICAgICAgYWN0aXZpdGllcyBvZiB0aGVzZSBsaW5rZWQgc2l0ZXMuIE5vbmV0aGVsZXNzLCB3ZSBzZWVrIHRvIHByb3RlY3RcbiAgICAgICAgICB0aGUgaW50ZWdyaXR5IG9mIG91ciBzaXRlIGFuZCB3ZWxjb21lIGFueSBmZWVkYmFjayBhYm91dCB0aGVzZSBzaXRlcy5cbiAgICAgICAgICBBbnkgbGluayBvbiBvdXIgc2l0ZSB0byBhIHRoaXJkIHBhcnQgd2Vic2l0ZSB0aGF0IGlzIG5vdCByZWxldmFudFxuICAgICAgICAgIG9yIGlmIHdlIGRlZW0gaXQgaW5hcHByb3ByaWF0ZSwgbWF5IGJlIHJlbW92ZWQuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Hb29nbGU8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBHb29nbGUmYXBvcztzIGFkdmVydGlzaW5nIHJlcXVpcmVtZW50cyBjYW4gYmUgc3VtbWVkIHVwIGJ5XG4gICAgICAgICAgR29vZ2xlJmFwb3M7cyBBZHZlcnRpc2luZyBQcmluY2lwbGVzLiBUaGV5IGFyZSBwdXQgaW4gcGxhY2UgdG9cbiAgICAgICAgICBwcm92aWRlIGEgcG9zaXRpdmUgZXhwZXJpZW5jZSBmb3IgdXNlcnMuIGh0dHBzOi8vc3VwcG9ydC5nb29nbGUuY29tL2Fkd29yZHNwb2xpY3kvYW5zd2VyLzEzMTY1NDg/aGw9ZW5cblxuICAgICAgICAgIFdlIGhhdmUgbm90IGVuYWJsZWQgR29vZ2xlIEFkU2Vuc2Ugb24gb3VyIHNpdGUuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5DYWxpZm9ybmlhIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQ2FsT1BQQSBpcyB0aGUgZmlyc3Qgc3RhdGUgbGF3IGluIHRoZSBuYXRpb24gdG8gcmVxdWlyZSBjb21tZXJjaWFsXG4gICAgICAgICAgd2Vic2l0ZXMgYW5kIG9ubGluZSBzZXJ2aWNlcyB0byBwb3N0IGEgcHJpdmFjeSBwb2xpY3kuXG4gICAgICAgICAgVGhlIGxhdyZhcG9zO3MgcmVhY2ggc3RyZXRjaGVzIHdlbGwgYmV5b25kIENhbGlmb3JuaWEgdG8gcmVxdWlyZSBhbnkgcGVyc29uIG9yIGNvbXBhbnlcbiAgICAgICAgICBpbiB0aGUgVW5pdGVkIFN0YXRlcyAoYW5kIGNvbmNlaXZhYmx5IHRoZSB3b3JsZCkgdGhhdCBvcGVyYXRlcyB3ZWJzaXRlcyBjb2xsZWN0aW5nXG4gICAgICAgICAgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24gZnJvbSBDYWxpZm9ybmlhIGNvbnN1bWVycyB0byBwb3N0IGEgY29uc3BpY3VvdXNcbiAgICAgICAgICBwcml2YWN5IHBvbGljeSBvbiBpdHMgd2Vic2l0ZSBzdGF0aW5nIGV4YWN0bHkgdGhlIGluZm9ybWF0aW9uIGJlaW5nIGNvbGxlY3RlZCBhbmRcbiAgICAgICAgICB0aG9zZSBpbmRpdmlkdWFscyBvciBjb21wYW5pZXMgd2l0aCB3aG9tIGl0IGlzIGJlaW5nIHNoYXJlZC4gLSBTZWUgbW9yZSBhdDpcbiAgICAgICAgICBodHRwOi8vY29uc3VtZXJjYWwub3JnL2NhbGlmb3JuaWEtb25saW5lLXByaXZhY3ktcHJvdGVjdGlvbi1hY3QtY2Fsb3BwYS8jc3RoYXNoLjBGZFJiVDUxLmRwdWZcbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkFjY29yZGluZyB0byBDYWxPUFBBLCB3ZSBhZ3JlZSB0byB0aGUgZm9sbG93aW5nOjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFVzZXJzIGNhbiB2aXNpdCBvdXIgc2l0ZSBhbm9ueW1vdXNseS5cbiAgICAgICAgICBUaGlzIHByaXZhY3kgcG9saWN5IGhhcyBhIGxpbmsgdG8gaXQgZnJvbSBvdXIgaG9tZSBwYWdlIGluIHRoZSBoZWFkZXIuXG4gICAgICAgICAgT3VyIFByaXZhY3kgUG9saWN5IGxpbmsgaW5jbHVkZXMgdGhlIHdvcmQgJmFwb3M7UHJpdmFjeSZhcG9zOyBhbmQgY2FuIGVhc2lseVxuICAgICAgICAgIGJlIGZvdW5kIG9uIHRoZSBwYWdlIHNwZWNpZmllZCBhYm92ZS5cblxuICAgICAgICAgIFlvdSB3aWxsIGJlIG5vdGlmaWVkIG9mIGFueSBQcml2YWN5IFBvbGljeSBjaGFuZ2VzOlxuICAgICAgICAgICAgICAgIOKAoiBPbiBvdXIgUHJpdmFjeSBQb2xpY3kgUGFnZVxuICAgICAgICAgIENhbiBjaGFuZ2UgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbjpcbiAgICAgICAgICAgICAgICDigKIgVGhyb3VnaCBvdXIgd2Vic2l0ZVxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RG9lcyBvdXIgc2l0ZSBhbGxvdyB0aGlyZC1wYXJ0eSBiZWhhdmlvcmFsIHRyYWNraW5nPzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEl0JmFwb3M7cyBpbXBvcnRhbnQgdG8gbm90ZSB0aGF0IHdlIGFsbG93IHRoaXJkLXBhcnR5IGJlaGF2aW9yYWwgdHJhY2tpbmdcbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkNPUFBBIChDaGlsZHJlbiBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdCk8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXaGVuIGl0IGNvbWVzIHRvIHRoZSBjb2xsZWN0aW9uIG9mIHBlcnNvbmFsIGluZm9ybWF0aW9uIGZyb20gY2hpbGRyZW5cbiAgICAgICAgICB1bmRlciB0aGUgYWdlIG9mIDEzIHllYXJzIG9sZCwgdGhlIENoaWxkcmVuJmFwb3M7cyBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uXG4gICAgICAgICAgQWN0IChDT1BQQSkgcHV0cyBwYXJlbnRzIGluIGNvbnRyb2wuIFRoZSBGZWRlcmFsIFRyYWRlIENvbW1pc3Npb24sIFVuaXRlZCBTdGF0ZXMmYXBvcztcbiAgICAgICAgICBjb25zdW1lciBwcm90ZWN0aW9uIGFnZW5jeSwgZW5mb3JjZXMgdGhlIENPUFBBIFJ1bGUsIHdoaWNoIHNwZWxscyBvdXQgd2hhdFxuICAgICAgICAgIG9wZXJhdG9ycyBvZiB3ZWJzaXRlcyBhbmQgb25saW5lIHNlcnZpY2VzIG11c3QgZG8gdG8gcHJvdGVjdCBjaGlsZHJlbiZhcG9zO3NcbiAgICAgICAgICBwcml2YWN5IGFuZCBzYWZldHkgb25saW5lLlxuXG4gICAgICAgICAgV2UgZG8gbm90IHNwZWNpZmljYWxseSBtYXJrZXQgdG8gY2hpbGRyZW4gdW5kZXIgdGhlIGFnZSBvZiAxMyB5ZWFycyBvbGQuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5GYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBGYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlcyBQcmluY2lwbGVzIGZvcm0gdGhlIGJhY2tib25lIG9mIHByaXZhY3lcbiAgICAgICAgICBsYXcgaW4gdGhlIFVuaXRlZCBTdGF0ZXMgYW5kIHRoZSBjb25jZXB0cyB0aGV5IGluY2x1ZGUgaGF2ZSBwbGF5ZWQgYSBzaWduaWZpY2FudFxuICAgICAgICAgIHJvbGUgaW4gdGhlIGRldmVsb3BtZW50IG9mIGRhdGEgcHJvdGVjdGlvbiBsYXdzIGFyb3VuZCB0aGUgZ2xvYmUuIFVuZGVyc3RhbmRpbmdcbiAgICAgICAgICB0aGUgRmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZSBQcmluY2lwbGVzIGFuZCBob3cgdGhleSBzaG91bGQgYmUgaW1wbGVtZW50ZWQgaXNcbiAgICAgICAgICBjcml0aWNhbCB0byBjb21wbHkgd2l0aCB0aGUgdmFyaW91cyBwcml2YWN5IGxhd3MgdGhhdCBwcm90ZWN0IHBlcnNvbmFsIGluZm9ybWF0aW9uLlxuXG4gICAgICAgICAgSW4gb3JkZXIgdG8gYmUgaW4gbGluZSB3aXRoIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2VzIHdlIHdpbGwgdGFrZSB0aGVcbiAgICAgICAgICBmb2xsb3dpbmcgcmVzcG9uc2l2ZSBhY3Rpb24sIHNob3VsZCBhIGRhdGEgYnJlYWNoIG9jY3VyOlxuXG4gICAgICAgICAgV2Ugd2lsbCBub3RpZnkgeW91IHZpYSBlbWFpbCB3aXRoaW4gNyBidXNpbmVzcyBkYXlzLiBXZSB3aWxsIGFsc29cbiAgICAgICAgICBub3RpZnkgdXNlcnMgdmlhIGFuIGluLXNpdGUgbm90aWZpY2F0aW9uIG9uIHRoZSBob21lIHBhZ2Ugd2l0aGluIDcgYnVzaW5lc3MgZGF5cy5cblxuICAgICAgICAgIFdlIGFsc28gYWdyZWUgdG8gdGhlIEluZGl2aWR1YWwgUmVkcmVzcyBQcmluY2lwbGUgd2hpY2ggcmVxdWlyZXMgdGhhdCBpbmRpdmlkdWFsc1xuICAgICAgICAgIGhhdmUgdGhlIHJpZ2h0IHRvIGxlZ2FsbHkgcHVyc3VlIGVuZm9yY2VhYmxlIHJpZ2h0cyBhZ2FpbnN0IGRhdGEgY29sbGVjdG9yc1xuICAgICAgICAgIGFuZCBwcm9jZXNzb3JzIHdobyBmYWlsIHRvIGFkaGVyZSB0byB0aGUgbGF3LiBUaGlzIHByaW5jaXBsZSByZXF1aXJlcyBub3Qgb25seVxuICAgICAgICAgIHRoYXQgaW5kaXZpZHVhbHMgaGF2ZSBlbmZvcmNlYWJsZSByaWdodHMgYWdhaW5zdCBkYXRhIHVzZXJzLCBidXQgYWxzbyB0aGF0XG4gICAgICAgICAgaW5kaXZpZHVhbHMgaGF2ZSByZWNvdXJzZSB0byBjb3VydHMgb3IgZ292ZXJubWVudCBhZ2VuY2llcyB0byBpbnZlc3RpZ2F0ZVxuICAgICAgICAgIGFuZC9vciBwcm9zZWN1dGUgbm9uLWNvbXBsaWFuY2UgYnkgZGF0YSBwcm9jZXNzb3JzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgIDwvb2w+XG4gIDwvUGFnZUNvbnRlbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcml2YWN5UG9saWN5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeS5qcyIsImltcG9ydCBJbXByaW50IGZyb20gJy4vaW1wcmludCc7XG5cbmNvbnN0IEltcHJpbnRDb250YWluZXIgPSBJbXByaW50O1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogSW1wcmludENvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltcHJpbnRDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbmltcG9ydCBQYWdlQ29udGVudCBmcm9tICcuLi9zaGFyZWQvcGFnZUNvbnRlbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltcHJpbnQuc2Nzcyc7XG5cbmNvbnN0IEltcHJpbnQgPSAoKSA9PiAoXG4gIDxQYWdlQ29udGVudD5cbiAgICA8SGVsbWV0PlxuICAgICAgPHRpdGxlPkltcHJpbnQ8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNvbnRhY3QgaW5mb3JtYXRpb24gZm9yIG9uYm9hcmRvci5jb20uXCIgLz5cbiAgICA8L0hlbG1ldD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltcHJpbnRDb250ZW50fT5cbiAgICAgIDxoMT5JbXByaW50PC9oMT5cbiAgICAgIDxkaXY+Q29tcGFueSBOYW1lOiBWQVNUIE5FVFdPUksgTFREPC9kaXY+XG4gICAgICA8ZGl2PkNFTzogTWFydGluIERhd3NvbjwvZGl2PlxuICAgICAgPGRpdj5BZGRyZXNzOiAyNiBDYWxkZXJWaWV3LCBSYXN0cmljaywgQnJpZ2hvdXNlLCBIRDYzRFEgVW5pdGVkIEtpbmdkb208L2Rpdj5cbiAgICAgIDxkaXY+VGVsZXBob25lOiArKDQ0KTc0NzM1OTEwOTc8L2Rpdj5cbiAgICAgIDxkaXY+RW1haWwgYWRkcmVzczogdTEzNTY3NzBAZ21haWwuY29tPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvUGFnZUNvbnRlbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbXByaW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImltcHJpbnRDb250ZW50XCI6XCJDb21wb25lbnRzLWZvb3Rlci1pbXByaW50X19pbXByaW50Q29udGVudFwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoUHJvcHMgfSBmcm9tICdyZWNvbXBvc2UnO1xuXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJy4vZXJyb3JQYWdlJztcblxuY29uc3QgY3JlYXRlUHJvcHMgPSAoeyBzdGF0dXMsIGVycm9yIH0pID0+IHtcbiAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICBjYXNlIDQwNDpcbiAgICAgIHJldHVybiB7IGVycm9yOiAnVGhlIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kLicgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxufTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHdpdGhQcm9wcyhjcmVhdGVQcm9wcyksXG4pO1xuXG5jb25zdCBFcnJvclBhZ2VDb250YWluZXIgPSBlbmhhbmNlKEVycm9yUGFnZSk7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgcmVuZGVyOiAoeyBwcm9wcyB9KSA9PiBwcm9wcyAmJiAoXG4gICAgPEVycm9yUGFnZUNvbnRhaW5lclxuICAgICAgc3RhdHVzPXtwYXJzZUludChwcm9wcy5wYXJhbXMuc3RhdHVzLCAxMCl9XG4gICAgICBlcnJvcj17cHJvcHMubG9jYXRpb24uc3RhdGUuZXJyb3J9XG4gICAgLz5cbiAgKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yUGFnZUNvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZUNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Vycm9yUGFnZS5zY3NzJztcblxuY29uc3QgRXJyb3JQYWdlID0gKHsgc3RhdHVzLCBlcnJvciB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JQYWdlfT5cbiAgICA8SGVsbWV0PlxuICAgICAgPHRpdGxlPkVycm9yIHtzdGF0dXN9PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleFwiIC8+XG4gICAgPC9IZWxtZXQ+XG4gICAgPGgxPkVycm9yIHtzdGF0dXN9PC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtlcnJvcn1cbiAgICAgIDwvZGl2PlxuICAgICAgV2UgaGF2ZSBiZWVuIG5vdGlmaWVkIG9mIHRoZSBlcnJvciDCr1xcXyjjg4QpXy/Cry4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5FcnJvclBhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBlcnJvcjogJ0FuIHVua25vd24gZXJyb3IgaGFzIG9jY3VyZWQuJyxcbn07XG5cbkVycm9yUGFnZS5wcm9wVHlwZXMgPSB7XG4gIHN0YXR1czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yUGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImVycm9yUGFnZVwiOlwiQ29tcG9uZW50cy1lcnJvclBhZ2UtZXJyb3JQYWdlX19lcnJvclBhZ2VcIixcImVycm9yXCI6XCJDb21wb25lbnRzLWVycm9yUGFnZS1lcnJvclBhZ2VfX2Vycm9yXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUHJpbWFyeUxheW91dCBmcm9tICcuL3ByaW1hcnlMYXlvdXQnO1xuXG5jb25zdCBQcmltYXJ5TGF5b3V0Q29udGFpbmVyID0gUHJpbWFyeUxheW91dDtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IFByaW1hcnlMYXlvdXRDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmltYXJ5TGF5b3V0Q29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dENvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2ZvdW5kJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3ByaW1hcnlMYXlvdXQuc2Nzcyc7XG5pbXBvcnQgUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkgZnJvbSAnLi9wcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2Zvb3Rlci9mb290ZXInO1xuXG5jb25zdCBQcmltYXJ5TGF5b3V0ID0gKHtcbiAgY2hpbGRyZW4sXG59KSA9PiAoXG4gIDxQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSBjbGFzc05hbWU9e3N0eWxlcy5wcmltYXJ5TGF5b3V0fT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgT25ib2FyZG9yXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPEZvb3RlciAvPlxuICA8L1ByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5PlxuKTtcblxuUHJpbWFyeUxheW91dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxufTtcblxuUHJpbWFyeUxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1hcnlMYXlvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicHJpbWFyeUxheW91dFwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fcHJpbWFyeUxheW91dFwiLFwid3JhcFwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fd3JhcFwiLFwibWFpblwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fbWFpblwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnZm91bmQnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcmVmZXItc3RhdGVsZXNzLWZ1bmN0aW9uICovXG5jbGFzcyBQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vIGNvbXBvbmVudERpZENhdGNoKCkge1xuICAvLyAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy9lcnJvci81MDAnKTtcbiAgLy8gfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5QcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogbnVsbCxcbn07XG5cblByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5LnByb3BUeXBlcyA9IHtcbiAgLy8gcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoUm91dGVyLFxuKShQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnZm91bmQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZm9vdGVyLnNjc3MnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICA8TGluayB0bz1cIi90ZXJtc0FuZENvbmRpdGlvbnNcIj50ZXJtcyBhbmQgY29uZGl0aW9uczwvTGluaz5cbiAgICA8TGluayB0bz1cIi9wcml2YWN5UG9saWN5XCI+cHJpdmFjeSBwb2xpY3k8L0xpbms+XG4gICAgPExpbmsgdG89XCIvaW1wcmludFwiPmltcHJpbnQ8L0xpbms+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZm9vdGVyXCI6XCJDb21wb25lbnRzLWZvb3Rlci1mb290ZXJfX2Zvb3RlclwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2Nzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtcbiAgRW52aXJvbm1lbnQsXG4gIE5ldHdvcmssXG4gIFJlY29yZFNvdXJjZSxcbiAgU3RvcmUsXG59IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuaW1wb3J0IHsgc2V0RW52aXJvbWVudCB9IGZyb20gJ3JlbGF5LWNvbXBvc2UnO1xuXG5jb25zdCBmZXRjaFF1ZXJ5ID0gKG9wZXJhdGlvbiwgdmFyaWFibGVzKSA9PlxuICBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgcXVlcnk6IG9wZXJhdGlvbi50ZXh0LFxuICAgICAgdmFyaWFibGVzLFxuICAgIH0pLFxuICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlbGF5L2lzc3Vlcy8xODE2XG4gICAgICBpZiAoanNvbi5lcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGpzb24uZXJyb3JzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShqc29uKTtcbiAgICB9KTtcblxuY29uc3QgbmV0d29yayA9IE5ldHdvcmsuY3JlYXRlKGZldGNoUXVlcnkpO1xuY29uc3Qgc291cmNlID0gbmV3IFJlY29yZFNvdXJjZSgpO1xuY29uc3Qgc3RvcmUgPSBuZXcgU3RvcmUoc291cmNlKTtcbmNvbnN0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHtcbiAgbmV0d29yayxcbiAgc3RvcmUsXG59KTtcblxuc2V0RW52aXJvbWVudChlbnZpcm9ubWVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IGVudmlyb25tZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9hcHAvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9hcHAvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDczMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9