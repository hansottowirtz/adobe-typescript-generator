/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The Shape object is a subclass of Element. It is defined in 
		 * the Shape spec.The Shape object provides for more precise 
		 * control over manipulating or creating geometry on the stage 
		 * than the Drawing APIs do. This finer control is necessary so 
		 * that scripts can script useful effects, and other drawing 
		 * commands.An object that encompasses the shape. A movie clip 
		 * that contains a shape.Important note: all shape methods and 
		 * properties must be placed in between shape.beginEdit(); and 
		 * shape.endEdit(); in order to function correctly
		 */
		class Shape extends Adobe.Flashpro.Element {
			/**
			 * a float value that sets the radius of the bottom-left corner 
			 * of the Rectangle object.
			 * @type {number}
			 * @readonly
			 */
			public readonly bottomLeftRadius: number;
			/**
			 * a float value that sets the radius of the bottom-right 
			 * corner of the Rectangle object.
			 * @type {number}
			 * @readonly
			 */
			public readonly bottomRightRadius: number;
			/**
			 * a Boolean value that specifies whether the Close Path check 
			 * box in the Property inspector is selected.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly closePath: boolean;
			/**
			 * an array of contours for the shape.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly contours: any[];
			/**
			 * An array of edge objects
			 * @type {any[]}
			 * @readonly
			 */
			public readonly edges: any[];
			/**
			 * a float value that specifies the end angle of the Oval 
			 * object.
			 * @type {number}
			 * @readonly
			 */
			public readonly endAngle: number;
			/**
			 * A way to convert a shape object to a string of FXG content. 
			 * Does not work if the shape is a group. Returns an empty 
			 * string on failure.
			 * @type {string}
			 * @readonly
			 */
			public readonly fxg: string;
			/**
			 * a float value that specifies the inner radius of the Oval 
			 * object as a percentage.
			 * @type {number}
			 * @readonly
			 */
			public readonly innerRadius: number;
			/**
			 * If true the shape is a Drawing Object, false otherwise.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isDrawingObject: boolean;
			/**
			 * Determines if a shape is floating above the parent frame's 
			 * (or group's) shape. In other words, is the the shape 
			 * selected. If true, this type of shape will have it's own 
			 * matrix, like a drawing object does.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isFloating: boolean;
			/**
			 * If true the shape is a group, false otherwise.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isGroup: boolean;
			/**
			 * returns a value of true if the object is a primitive oval 
			 * object.
			 * @type {boolean}
			 */
			public isOvalObject: boolean;
			/**
			 * Returns a value of true if the object is a primitive 
			 * Rectangle object.
			 * @type {boolean}
			 */
			public isRectangleObject: boolean;
			/**
			 * a Boolean value that determines whether different corners of 
			 * the rectangle can have different radius values.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly lockFlag: boolean;
			/**
			 * An array of objects contained in the group. Note: All the 
			 * raw shapes get merged into this single shape object. Any 
			 * drawing objects (non-raw shapes) will be objects in the 
			 * members property.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly members: any[];
			/**
			 * Provides the number of cubic segments in a given Shape 
			 * object
			 * @type {number}
			 * @readonly
			 */
			public readonly numCubicSegments: number;
			/**
			 * a float value that specifies the start angle of the Oval 
			 * object.
			 * @type {number}
			 * @readonly
			 */
			public readonly startAngle: number;
			/**
			 * a float value that sets the radius of all corners of the 
			 * rectangle or that sets only the radius of the top-left 
			 * corner of the Rectangle object.
			 * @type {number}
			 * @readonly
			 */
			public readonly topLeftRadius: number;
			/**
			 * a float value that sets the radius of the top-right corner 
			 * of the Rectangle object.
			 * @type {number}
			 * @readonly
			 */
			public readonly topRightRadius: number;
			/**
			 * An array of vertex objects.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly vertices: any[];
			/**
			 * Defines the start of an edit session. Any changes to the 
			 * shape object or any of it's subordinate parts must be 
			 * bracketed by beginEdit and endEdit calls.
			 * @returns {void}
			 */
			public beginEdit(): void;
			/**
			 * Deletes the specified edge. This call will only succeed 
			 * within the context of a beginEdit() and endEdit() pair of 
			 * calls.
			 * @param {number} index index
			 * @returns {void}
			 */
			public deleteEdge(index: number): void;
			/**
			 * Defines the end of an edit session for the shape. All 
			 * changes made to the Shape object or any of its subordinate 
			 * parts will be applied to the shape.
			 * @returns {void}
			 */
			public endEdit(): void;
			/**
			 * returns an array of points which define a cubic curve for 
			 * the Edge object that corresponds to the cubicSegmentIndex.
			 * @param {number} cubicSegmentIndex this corresponds to the 
			 * Edge.cubicSegmentIndex property
			 * @returns {any[]}
			 */
			public getCubicSegmentPoints(cubicSegmentIndex: number): any[];
			/**
			 * Returns the fill object of the shape.
			 * @returns {any}
			 */
			public getCustomFill(): any;
			/**
			 * Returns the stroke object of the element.
			 * @returns {any}
			 */
			public getCustomStroke(): any;
			/**
			 * Sets the fill object of the shape.
			 * @param {any} fill fill object
			 * @returns {void}
			 */
			public setCustomFill(fill: any): void;
			/**
			 * Sets the stroke object of the shape.
			 * @param {any} stroke the stroke object
			 * @returns {void}
			 */
			public setCustomStroke(stroke: any): void;
		}
	}
}