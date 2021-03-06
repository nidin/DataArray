System.register([], function(exports_1, context_1) {
    "use strict";
    let __moduleName = context_1 && context_1.id;
    let __extends = (this && this.__extends) || function (d, b) {
        for (let p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    let Test, TestContext, TestClass, FakeFunction, Fake, TestDefintion, TestError, TestDescription, TestResult;
    return {
        setters:[],
        execute: function() {
            Test = (function () {
                function Test() {
                    this.tests = [];
                    this.testClass = new TestClass();
                }
                Test.prototype.addTestClass = function (testClass, name) {
                    if (name === void 0) { name = 'Tests'; }
                    this.tests.push(new TestDefintion(testClass, name));
                };
                Test.prototype.isReservedFunctionName = function (functionName) {
                    for (let prop in this.testClass) {
                        if (prop === functionName) {
                            return true;
                        }
                    }
                    return false;
                };
                Test.prototype.run = function () {
                    let testContext = new TestContext();
                    let testResult = new TestResult();
                    for (let i = 0; i < this.tests.length; ++i) {
                        let testClass = this.tests[i].testClass;
                        let testName = this.tests[i].name;
                        for (let prop in testClass) {
                            if (!this.isReservedFunctionName(prop)) {
                                if (typeof testClass[prop] === 'function') {
                                    if (typeof testClass['setUp'] === 'function') {
                                        testClass['setUp']();
                                    }
                                    try {
                                        testClass[prop](testContext);
                                        testResult.passes.push(new TestDescription(testName, prop, 'OK'));
                                    }
                                    catch (err) {
                                        testResult.errors.push(new TestDescription(testName, prop, err));
                                    }
                                    if (typeof testClass['tearDown'] === 'function') {
                                        testClass['tearDown']();
                                    }
                                }
                            }
                        }
                    }
                    return testResult;
                };
                Test.prototype.showResults = function (target, result) {
                    let template = '<article>' +
                        '<h1>' + this.getTestResult(result) + '</h1>' +
                        '<p>' + this.getTestSummary(result) + '</p>' +
                        '<section id="tsFail">' +
                        '<h2>Errors</h2>' +
                        '<ul class="bad">' + this.getTestResultList(result.errors) + '</ul>' +
                        '</section>' +
                        '<section id="tsOkay">' +
                        '<h2>Passing Tests</h2>' +
                        '<ul class="good">' + this.getTestResultList(result.passes) + '</ul>' +
                        '</section>' +
                        '</article>';
                    target.innerHTML = template;
                };
                Test.prototype.getTestResult = function (result) {
                    return result.errors.length === 0 ? 'Test Passed' : 'Test Failed';
                };
                Test.prototype.getTestSummary = function (result) {
                    return 'Total tests: <span id="tsUnitTotalCout">' + (result.passes.length + result.errors.length).toString() + '</span>. ' +
                        'Passed tests: <span id="tsUnitPassCount" class="good">' + result.passes.length + '</span>. ' +
                        'Failed tests: <span id="tsUnitFailCount" class="bad">' + result.errors.length + '</span>.';
                };
                Test.prototype.getTestResultList = function (testResults) {
                    let list = '';
                    let group = '';
                    let isFirst = true;
                    for (let i = 0; i < testResults.length; ++i) {
                        let result = testResults[i];
                        if (result.testName !== group) {
                            group = result.testName;
                            if (isFirst) {
                                isFirst = false;
                            }
                            else {
                                list += '</li></ul>';
                            }
                            list += '<li>' + result.testName + '<ul>';
                        }
                        list += '<li>' + result.funcName + '(): ' + this.encodeHtmlEntities(result.message) + '</li>';
                    }
                    return list + '</ul>';
                };
                Test.prototype.encodeHtmlEntities = function (input) {
                    let entitiesToReplace = { '&': '&amp;', '<': '&lt;', '>': '&gt;' };
                    input.replace(/[&<>]/g, function (entity) {
                        return entitiesToReplace[entity] || entity;
                    });
                    return input;
                };
                return Test;
            }());
            exports_1("Test", Test);
            TestContext = (function () {
                function TestContext() {
                }
                TestContext.prototype.setUp = function () {
                };
                TestContext.prototype.tearDown = function () {
                };
                TestContext.prototype.areIdentical = function (a, b) {
                    if (a !== b) {
                        throw 'areIdentical failed when passed ' +
                            '{' + (typeof a) + '} "' + a + '" and ' +
                            '{' + (typeof b) + '} "' + b + '"';
                    }
                };
                TestContext.prototype.areIdenticalArray = function (a, b) {
                    let r;
                    r = a.length === b.length;
                    if (r) {
                        for (let i = 0; i < a.length; i++) {
                            if (a[i] !== b[i]) {
                                r = false;
                                break;
                            }
                        }
                    }
                    if (!r) {
                        throw 'areIdentical failed when passed ' +
                            '{' + (typeof a) + '} "' + a + '" and ' +
                            '{' + (typeof b) + '} "' + b + '"';
                    }
                };
                TestContext.prototype.areNotIdentical = function (a, b) {
                    if (a === b) {
                        throw 'areNotIdentical failed when passed ' +
                            '{' + (typeof a) + '} "' + a + '" and ' +
                            '{' + (typeof b) + '} "' + b + '"';
                    }
                };
                TestContext.prototype.isTrue = function (a) {
                    if (!a) {
                        throw 'isTrue failed when passed ' +
                            '{' + (typeof a) + '} "' + a + '"';
                    }
                };
                TestContext.prototype.isFalse = function (a) {
                    if (a) {
                        throw 'isFalse failed when passed ' +
                            '{' + (typeof a) + '} "' + a + '"';
                    }
                };
                TestContext.prototype.isTruthy = function (a) {
                    if (!a) {
                        throw 'isTrue failed when passed ' +
                            '{' + (typeof a) + '} "' + a + '"';
                    }
                };
                TestContext.prototype.isFalsey = function (a) {
                    if (a) {
                        throw 'isFalse failed when passed ' +
                            '{' + (typeof a) + '} "' + a + '"';
                    }
                };
                TestContext.prototype.throws = function (a) {
                    let isThrown = false;
                    try {
                        a();
                    }
                    catch (ex) {
                        isThrown = true;
                    }
                    if (!isThrown) {
                        throw 'did not throw an error';
                    }
                };
                TestContext.prototype.fail = function () {
                    throw 'fail';
                };
                return TestContext;
            }());
            exports_1("TestContext", TestContext);
            TestClass = (function (_super) {
                __extends(TestClass, _super);
                function TestClass() {
                    _super.apply(this, arguments);
                }
                return TestClass;
            }(TestContext));
            exports_1("TestClass", TestClass);
            FakeFunction = (function () {
                function FakeFunction(name, delgate) {
                    this.name = name;
                    this.delgate = delgate;
                }
                return FakeFunction;
            }());
            exports_1("FakeFunction", FakeFunction);
            Fake = (function () {
                function Fake(obj) {
                    for (let prop in obj) {
                        if (typeof obj[prop] === 'function') {
                            this[prop] = function () {
                            };
                        }
                        else {
                            this[prop] = null;
                        }
                    }
                }
                Fake.prototype.create = function () {
                    return this;
                };
                Fake.prototype.addFunction = function (name, delegate) {
                    this[name] = delegate;
                };
                Fake.prototype.addProperty = function (name, value) {
                    this[name] = value;
                };
                return Fake;
            }());
            exports_1("Fake", Fake);
            TestDefintion = (function () {
                function TestDefintion(testClass, name) {
                    this.testClass = testClass;
                    this.name = name;
                }
                return TestDefintion;
            }());
            TestError = (function () {
                function TestError(name, message) {
                    this.name = name;
                    this.message = message;
                }
                return TestError;
            }());
            TestDescription = (function () {
                function TestDescription(testName, funcName, message) {
                    this.testName = testName;
                    this.funcName = funcName;
                    this.message = message;
                }
                return TestDescription;
            }());
            exports_1("TestDescription", TestDescription);
            TestResult = (function () {
                function TestResult() {
                    this.passes = [];
                    this.errors = [];
                }
                return TestResult;
            }());
            exports_1("TestResult", TestResult);
        }
    }
});
//# sourceMappingURL=tsUnit.js.map