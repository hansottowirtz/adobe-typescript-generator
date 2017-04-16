/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The Tools object is an object accessable from the flash 
		 * object that provides information relevant to the tools. 
		 * Contains an array of tools. Used only when creating 
		 * extensible tools.
		 */
		class Tools extends Adobe.Csawlib.CSHostObject {
			/**
			 * Returns the ToolObj object for the currently active tool.
			 * @type {Adobe.Flashpro.ToolObj}
			 * @readonly
			 */
			public readonly activeTool: Adobe.Flashpro.ToolObj;
			/**
			 * Has the value boolean value true if the alt key is down, 
			 * false otherwise.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly altIsDown: boolean;
			/**
			 * Has the value boolean value true if the control key is down, 
			 * false otherwise.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly ctlIsDown: boolean;
			/**
			 * Has the boolean value true if the left mouse button is 
			 * currently down, false if the mouse button is up.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly mouseIsDown: boolean;
			/**
			 * The position of the last mouse down event on the Stage. 
			 * penDownLoc has 2 properties, x and y.
			 * @type {any}
			 * @readonly
			 */
			public readonly penDownLoc: any;
			/**
			 * The current location of the mouse. penLoc has 2 properties, 
			 * x and y.
			 * @type {any}
			 * @readonly
			 */
			public readonly penLoc: any;
			/**
			 * Has the boolean value true if the shift key is down, false 
			 * otherwise.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly shiftIsDown: boolean;
			/**
			 * An array of ToolObj objects.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly toolObjs: any[];
			/**
			 * This property takes two points and returns a new adjusted or 
			 * "constrained" point. The two points are the starting click 
			 * point and the drag to point. If the shift key is depressed, 
			 * then the returned point is constrained to follow either a 45 
			 * degree constrain (useful for something like the line with an 
			 * arrow head) or to constrain an object to maintain its aspect 
			 * ratio (like pulling out a perfect square with the rectangle 
			 * tool).
			 * @param {any} pt1 The starting click point
			 * @param {any} p2 the drag to point
			 * @returns {any}
			 */
			public constrainPoint(pt1: any, p2: any): any;
			/**
			 * Returns the last key pressed. Used only when creating 
			 * extensible tools.
			 * @returns {number}
			 */
			public getKeyDown(): number;
			/**
			 * Sets the cursor to the one specified. The id is an integer 
			 * between 0 and 7 inclusive. Used only when creating 
			 * extensible tools.
			 * The cursors are defined as: 
			 * 0 - plus cursor '+' 
			 * 1 - black arrow 
			 * 2 - white arrow 
			 * 3 - 4 way arrow 
			 * 4 - 2 way horizontal arrow 
			 * 5 - 2 way vertical arrow 
			 * 6 - 'X' 
			 * 7 - hand cursor
			 * @param {number} cursor The cursor to set.
			 * @returns {void}
			 */
			public setCursor(cursor: number): void;
			/**
			 * This takes a point as input and returns a new point which 
			 * may be adjusted or "snapped" to the nearest geometric 
			 * object. If snapping is "off" via View > Snap Settings, then 
			 * the point returned is the original point.
			 * @param {any} pt1 point for input
			 * @returns {any}
			 */
			public snapPoint(pt1: any): any;
		}
	}
}