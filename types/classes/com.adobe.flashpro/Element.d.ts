/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * Everything that appears on the Stage is of the type Element.
		 */
		class Element extends Adobe.Csawlib.CSHostObject {
			/**
			 * has a value >= 0 for the depth (ala arrange) of the object 
			 * in the view. The drawing order of objects on the stage. 
			 * Specifies which one is on top of the others.
			 * @type {number}
			 * @readonly
			 */
			public readonly depth: number;
			/**
			 * Type of element. Acceptable values are: "shape", "text", 
			 * "tlfText", "instance" , "shapeObj". NOTE: A "shapeObj" is 
			 * created with an extensible tool.
			 * @type {string}
			 * @readonly
			 */
			public readonly elementType: string;
			/**
			 * Height of the Element.
			 * @type {number}
			 */
			public height: number;
			/**
			 * the value of the layer property is the layer object the 
			 * element is on.
			 * @type {any}
			 * @readonly
			 */
			public readonly layer: any;
			/**
			 * Left side of Element.
			 * @type {number}
			 * @readonly
			 */
			public readonly left: number;
			/**
			 * True if the Element is locked, false otherwise. If type is 
			 * shape, locked is ignored.
			 * @type {boolean}
			 */
			public locked: boolean;
			/**
			 * the matrix has properties a, b, c, d, tx, and ty.  a, b, c, 
			 * d are floating point, tx, and ty are coordinates.
			 * @type {any}
			 */
			public matrix: any;
			/**
			 * Name of Element, normally referred to as the Instance name. 
			 * If type is shape, name is ignored.
			 * @type {string}
			 */
			public name: string;
			/**
			 * rotation of symbols, drawing objects, primitives and texts
			 * @type {number}
			 */
			public rotation: number;
			/**
			 * x scale of symbols, drawing object, primitive
			 * @type {number}
			 */
			public scaleX: number;
			/**
			 * y scale of symbols, drawing object, primitive
			 * @type {number}
			 */
			public scaleY: number;
			/**
			 * get/set the selection state of the element
			 * @type {boolean}
			 */
			public selected: boolean;
			/**
			 * x skew value of symbols, drawing object, primitive
			 * @type {number}
			 */
			public skewX: number;
			/**
			 * y skew of symbols, drawing object, primitive
			 * @type {number}
			 */
			public skewY: number;
			/**
			 * Top side of Element.
			 * @type {number}
			 * @readonly
			 */
			public readonly top: number;
			/**
			 * x position of symbols, drawing object, primitive transform 
			 * point
			 * @type {any}
			 */
			public transformX: any;
			/**
			 * y position of symbols, drawing object, primitive transform 
			 * point
			 * @type {any}
			 */
			public transformY: any;
			/**
			 * Width of the Element.
			 * @type {number}
			 */
			public width: number;
			/**
			 * x position of symbol's registration point
			 * @type {number}
			 */
			public x: number;
			/**
			 * y position of symbol's registration point
			 * @type {number}
			 */
			public y: number;
			/**
			 * Add a filter to the element.
			 * @param {string} filterName "glowFilter", "dropShadowFilter", 
			 * "blurFilter", "bevelFilter", "gradientBevelFilter", 
			 * "gradientGlowFilter", "adjustColorFilter"
			 * @returns {void}
			 */
			public addFilter(filterName: string): void;
			/**
			 * Return the array of filter objects for the element.
			 * @returns {any[]}
			 */
			public getFilters(): any[];
			/**
			 * Returns the value of the specified data. The type returned 
			 * depends on the type of data that was stored.
			 * @param {string} name The name of the data to be returned.  
			 * If no data with that name has been stored with the element 
			 * undefined is returned.
			 * @returns {any}
			 */
			public getPersistentData(name: string): any;
			/**
			 * A point object containing the floating-point number 
			 * properties x and y. Specifies the position of the 
			 * transformation point within the element's own coordinate 
			 * system. For symbols, it is relative to the registration 
			 * point. For text fields, relative to the upper left corner. 
			 * For drawing objects, primitives, and groups, relative to the 
			 * center of the element.
			 * @returns {any}
			 */
			public getTransformationPoint(): any;
			/**
			 * Returns true if data with the specified name has been 
			 * attached to the object, false otherwise.
			 * @param {string} name the name of the data item to test for.
			 * @returns {boolean}
			 */
			public hasPersistentData(name: string): boolean;
			/**
			 * remove all the filters on the element
			 * @returns {void}
			 */
			public removeAllFilters(): void;
			/**
			 * Remove the filter at the specified index in the filter list 
			 * of the elemetn.
			 * @param {number} index Index of the filter in the filter list
			 * @returns {void}
			 */
			public removeFilter(index: number): void;
			/**
			 * Removes any persistent data that has been attached to the 
			 * object with the given name.
			 * @param {string} name the name of the data to remove.
			 * @returns {void}
			 */
			public removePersistentData(name: string): void;
			/**
			 * Set the array of filter objects applied to the element.
			 * @param {any} filters array of filter objects
			 * @returns {boolean}
			 */
			public setFilters(filters: any): boolean;
			/**
			 * Stores data with an object.  Data is written to .fla file 
			 * and available to JavaScript when the file is re-opened.
			 * @param {string} name The name to associate with the data.  
			 * This name is used to retrieve the data.
			 * @param {string} _type this argument defines the type of 
			 * data.  allowable types are "integer", "integerArray", 
			 * "double", "doubleArray", "string", and "byteArray".
			 * @param {any} value the value depends on the value of 
			 * argument 2.  The logical rules apply.
			 * @returns {void}
			 */
			public setPersistentData(name: string, _type: string, value: any): void;
			/**
			 * setter for the symbol transformation point
			 * @param {any} transformationPoint A point object containing 
			 * the floating-point number properties x and y. Specifies the 
			 * position of the transformation point within the element's 
			 * own coordinate system. For symbols, it is relative to the 
			 * registration point. For text fields, relative to the upper 
			 * left corner. For drawing objects, primitives, and groups, 
			 * relative to the center of the element.
			 * @returns {void}
			 */
			public setTransformationPoint(transformationPoint: any): void;
		}
	}
}