(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"ion-padding\">\n    \n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-12 text-center\">\n            <h1>Convertisseur de monnaie</h1>\n        </div>\n      </div>\n    </div>\n          <form>\n            <div class=\"form-row\">\n              <div class=\"col-md-12 mb-3 text-center\">\n                <label for=\"euro\">Montant en EUR</label><br>\n                <input type=\"number\" name=\"euro\" id=\"euro\" (keyup)=\"convertEuro()\" [(ngModel)]=\"euro\">\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"col-md-12 mb-3 text-center\">\n                  <label for=\"btc\">Montant en BTC</label> <br>           \n                  <input type=\"number\" name=\"btc\" id=\"btc\" [(ngModel)]=\"btc\" (keyup)=\"convertBtc()\">\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"col-md-12 mb-3 text-center\">\n                <label for=\"eth\">Montant en ETH</label><br>\n                <input type=\"number\" name=\"eth\" id=\"eth\" [(ngModel)]=\"eth\" (keyup)=\"convertEth()\">\n              </div>\n            </div>\n          </form>\n\n          <div class=\"container mt-3\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 col-md-12 col-lg-12 text-center\">\n                <a class=\"thebutton\" href=\"https://dl3c01n.github.io\"><i class=\"fab fa-github fa-2x\"></i></a>\n                <a class=\"thebutton\" href=\"https://www.linkedin.com/in/dlecoin/\"><i class=\"fab fa-linkedin fa-2x\"></i></a>\n              </div>\n            \n            </div>\n          </div>\n          </div>\n          \n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #FB4866 !important; }\n\nlabel {\n  color: white;\n  padding: 5px;\n  font-family: 'Kanit', sans-serif; }\n\ninput {\n  color: white;\n  text-align: center;\n  background: transparent;\n  border: 2px solid white;\n  border-radius: 30px; }\n\ntextarea:focus,\ntextarea.form-control:focus,\ninput.form-control:focus,\ninput[type=text]:focus,\ninput[type=password]:focus,\ninput[type=email]:focus,\ninput[type=number]:focus,\n[type=text].form-control:focus,\n[type=password].form-control:focus,\n[type=email].form-control:focus,\n[type=tel].form-control:focus,\n[contenteditable].form-control:focus {\n  box-shadow: inset 0 -1px 0 #ddd; }\n\ninput[type=\"number\"]::-webkit-outer-spin-button, input[type=\"number\"]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n\ninput[type=\"number\"] {\n  -moz-appearance: textfield; }\n\nh1 {\n  font-family: 'Kanit', sans-serif;\n  text-transform: uppercase;\n  color: white;\n  margin-bottom: 20px; }\n\n.thebutton {\n  padding: 5px; }\n\n.thebutton i {\n  background: transparent;\n  color: white; }\n\ntextarea:focus, input:focus {\n  outline: none;\n  border-bottom: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxccHJvamV0LWJ0Yy9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0NBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUd2Qjs7Ozs7Ozs7Ozs7O0VBWUUsK0JBQStCLEVBQUE7O0FBR2pDO0VBQ0ksd0JBQXdCO0VBQ3hCLFNBQVMsRUFBQTs7QUFHYjtFQUNJLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLGdDQUFnQztFQUNoQyx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx1QkFBdUI7RUFDdkIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNGQjQ4NjYgIWltcG9ydGFudDtcbn1cblxubGFiZWx7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcbn1cblxuaW5wdXR7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG50ZXh0YXJlYTpmb2N1cywgXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2w6Zm9jdXMsIFxuaW5wdXQuZm9ybS1jb250cm9sOmZvY3VzLCBcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIFxuaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMsIFxuaW5wdXRbdHlwZT1lbWFpbF06Zm9jdXMsIFxuaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzLCBcblt0eXBlPXRleHRdLmZvcm0tY29udHJvbDpmb2N1cywgXG5bdHlwZT1wYXNzd29yZF0uZm9ybS1jb250cm9sOmZvY3VzLCBcblt0eXBlPWVtYWlsXS5mb3JtLWNvbnRyb2w6Zm9jdXMsIFxuW3R5cGU9dGVsXS5mb3JtLWNvbnRyb2w6Zm9jdXMsIFxuW2NvbnRlbnRlZGl0YWJsZV0uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgI2RkZDtcbn1cblxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiwgaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbn1cbiBcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG5oMXtcbiAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGhlYnV0dG9ue1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnRoZWJ1dHRvbiBpIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbnRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.convertEuro = function () {
        this.btc = (this.euro / 7204.8001);
        this.eth = (this.euro / 225.61);
    };
    HomePage.prototype.convertBtc = function () {
        this.euro = (this.btc / 0.00013879635605712362);
        this.eth = (this.btc / 0.031);
    };
    HomePage.prototype.convertEth = function () {
        this.euro = (this.eth / 0.004433410179109771);
        this.btc = (this.eth / 0.03129890453834116);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map