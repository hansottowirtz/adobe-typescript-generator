/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The DrawingLayer object is accessible from Javascript as a 
		 * child of the flash object. The drawingLayer is used for 
		 * tools when they want to do some temporary drawing while 
		 * dragging. For example, a selection style marquee.
		 */
		class DrawingLayer extends Adobe.Csawlib.CSHostObject {
			/**
			 * Puts Flash into drawing mode. The drawing mode is used when 
			 * you want to do some temporary drawing while the mouse is 
			 * down. Typically used only when creating extensible tools.
			 * @param {boolean} persistentDraw A value of true indicates 
			 * that the drawing displayed in the last frame will remain on 
			 * the Stage until a new beginDraw or beginFrame call is made. 
			 * A frame is how you define where you start and where you end 
			 * drawing. It does not reference timeline frames. For example, 
			 * when the user draws a rectangle the outline of the shape is 
			 * previewed while they drag. If you want that preview shape to 
			 * remain after they release the mouse button, set 
			 * persistentDraw to true. 
			 * @returns {void}
			 */
			public beginDraw(persistentDraw: boolean): void;
			/**
			 * This call should preceed any other drawinglayer calls. 
			 * Everything drawn between a beginFrame and an endFrame 
			 * remains on the Stage until you call the next 
			 * beginFrame/endFrame. 
			 * A frame is how you define where you start and where you end 
			 * drawing. It does not reference timeline frames. Typically 
			 * used only when creating extensible tools.
			 * @returns {void}
			 */
			public beginFrame(): void;
			/**
			 * Draws a cubic curve from the current pen location using the 
			 * arguments as the coordinates of the cubic segment. Typically 
			 * used only when creating extensible tools.
			 * @param {number} x1Ctrl x location of first control point.
			 * @param {number} y1Ctrl y location of first control point
			 * @param {number} x2Ctl x position of the middle control point
			 * @param {number} y2Ctl y position of the middle control point
			 * @param {number} xEnd x position of the end control point
			 * @param {number} yEnd y position of third control point.
			 * @returns {void}
			 */
			public cubicCurveTo(x1Ctrl: number, y1Ctrl: number, x2Ctl: number, y2Ctl: number, xEnd: number, yEnd: number): void;
			/**
			 * Draws a quadratic curve segment starting at the current 
			 * drawing position and ending at the point (xEnd, yEnd), using 
			 * (x1Ctl, y1Ctl) as the control point. Typically used only 
			 * when creating extensible tools.
			 * @param {number} x1Clt x position of the first control point.
			 * @param {number} y1Clt y position of the first control point.
			 * @param {number} xEnd x position of the end point.
			 * @param {number} yEnd y position of the end point.
			 * @returns {void}
			 */
			public curveTo(x1Clt: number, y1Clt: number, xEnd: number, yEnd: number): void;
			/**
			 * Draws the path secified by the path argument. Typically used 
			 * only when creating extensible tools.
			 * @param {Path} path a Path object to draw.
			 * @returns {void}
			 */
			public drawPath(path: Path): void;
			/**
			 * Exits the drawing mode. The drawing mode is used when you 
			 * want to do some temporary drawing while the mouse is down. 
			 * Typically used only when creating extensible tools.
			 * @returns {void}
			 */
			public endDraw(): void;
			/**
			 * Everything drawn between a beginFrame and an endFrame 
			 * remains on the Stage until you call the next 
			 * beginFrame/endFrame. A frame is how you define where you 
			 * start and where you end drawing. It does not reference 
			 * timeline frames. Typically used only when creating 
			 * extensible tools.
			 * @returns {void}
			 */
			public endFrame(): void;
			/**
			 * Draws a line from the current drawing position to the point 
			 * (x, y). Typically used only when creating extensible tools.
			 * @param {number} x x position of the endpoint of the line to 
			 * draw.
			 * @param {number} y y position of the endpoint of the line to 
			 * draw.
			 * @returns {void}
			 */
			public lineTo(x: number, y: number): void;
			/**
			 * Sets the current drawing position. Typically used only when 
			 * creating extensible tools.
			 * @param {number} x x position to start drawing at.
			 * @param {number} y y position to start drawing at.
			 * @returns {void}
			 */
			public moveTo(x: number, y: number): void;
			/**
			 * Returns a new path object. Refer to path object for more 
			 * information. Typically used only when creating extensible 
			 * tools.
			 * @returns {Adobe.Flashpro.Path}
			 */
			public newPath(): Adobe.Flashpro.Path;
			/**
			 * Sets the color of subsequently drawn data.  Only applies to 
			 * persistent data. In order to use this, the argument to 
			 * beginDraw must be set to true. Typically used only when 
			 * creating extensible tools.
			 * @param {string} color The argument is a color string, 
			 * integer, or hexadecimal.
			 * @returns {void}
			 */
			public setColor(color: string): void;
			/**
			 * Set the fill color for the drawing layer
			 * @param {any} fillObject a fill object
			 * @returns {boolean}
			 */
			public setFill(fillObject: any): boolean;
			/**
			 * Set the stroke color for the drawing layer
			 * @param {any} strokeObject Stroke Object
			 * @returns {boolean}
			 */
			public setStroke(strokeObject: any): boolean;
		}
	}
}