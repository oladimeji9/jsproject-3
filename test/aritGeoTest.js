﻿

var myApp = require('../app/aritGeo');


(function () {
    'use strict';

	
describe("Determine the sequence of an array of numbers: ", function () {

        describe("Case for an empty array", function () {

            it("should return 0 for an empty array", function () {
                expect(myApp.aritGeo([])).toBe(0);
            });

        });

        describe("Case for an arithmetic sequence", function () {

            it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function () {
                expect(myApp.aritGeo([2, 4, 6, 8, 10])).toEqual('Arithmetic');
            });

            it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function () {
                expect(myApp.aritGeo([5, 11, 17, 23, 29, 35, 41])).toEqual('Arithmetic');
            });

            it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function () {
                expect(myApp.aritGeo([15, 10, 5, 0, -5, -10])).toEqual('Arithmetic');
            });

        });

        describe("Case for a geometric sequence", function () {

            it("should return `Geometric` for [2, 6, 18, 54, 162]", function () {
                expect(myApp.aritGeo([2, 6, 18, 54, 162])).toEqual('Geometric');
            });

            it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function () {
                expect(myApp.aritGeo([0.5, 3.5, 24.5, 171.5])).toEqual('Geometric');
            });

            it("should return `Geometric` for [−128, 64, −32, 16, −8]", function () {
                expect(myApp.aritGeo([-128, 64, -32, 16, -8])).toEqual('Geometric');
            });

        });

        
	describe("Case for neither arithmetic nor geometric sequence", function () {

            it("should return -1 for [1, 2, 3, 5, 8]", function () {
                expect(myApp.aritGeo([1, 2, 3, 5, 8])).toEqual(-1);
            });

            it("should return -1 for [1, 3, 6, 10, 15]", function () {
                expect(myApp.aritGeo([1, 3, 6, 10, 15])).toEqual(-1);
            });

            it("should return -1 for [1, 8, 27, 64, 125]", function () {
                expect(myApp.aritGeo([1, 8, 27, 64, 125])).toEqual(-1);
            });

        });	describe("Case for an arithmetic sequence", function () {

            it("should return `Arithmetic` for [20, 40, 60, 80, 100]", function () {
                expect(myApp.aritGeo([20, 40, 60, 80, 100])).toEqual('Arithmetic');
            });

            it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function () {
                expect(myApp.aritGeo([5, 11, 17, 23, 29, 35, 41])).toEqual('Arithmetic');
            });

            it("should return `Arithmetic` for [8, 16, 24, 32, 40]", function () {
                expect(myApp.aritGeo([8, 16, 24, 32, 40])).toEqual('Arithmetic');
            });
	});	describe("Case for neither arithmetic nor geometric sequence", function () {

            it("should return -1 for [1, 4, 5, 9, 18]", function () {
                expect(myApp.aritGeo([1, 4, 5, 9, 18])).toEqual(-1);
            });

            it("should return -1 for [2, 3, 5, 11, 14]", function () {
                expect(myApp.aritGeo([2, 3, 5, 11, 14])).toEqual(-1);
            });

            it("should return -1 for [-3, 8, 27, 46, 215]", function () {
                expect(myApp.aritGeo([-3, 8, 27, 46, 215])).toEqual(-1);
            });

        });
    });
})();