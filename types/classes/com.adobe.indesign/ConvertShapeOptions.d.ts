/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ConvertShapeOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Converts the object to a rectangle with beveled corners.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly CONVERT_TO_BEVELED_RECTANGLE: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Converts the object to a closed path.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly CONVERT_TO_CLOSED_PATH: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Converts the object to a rectangle with inverse rounded 
			 * corners.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly CONVERT_TO_INVERSE_ROUNDED_RECTANGLE: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Converts the object to a line that connects the upper left 
			 * and lower right corners of the object's bounding box.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly CONVERT_TO_LINE: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Converts the object to an open path.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly CONVERT_TO_OPEN_PATH: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Converts the object to an ellipse.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly CONVERT_TO_OVAL: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Converts the object to a polygon.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly CONVERT_TO_POLYGON: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Converts the object to a rectangle.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly CONVERT_TO_RECTANGLE: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Converts the object to a rectangle with rounded corners.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly CONVERT_TO_ROUNDED_RECTANGLE: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Converts the object to straight line. If the object is a 
			 * square, circle, or its bounding box is wider than it is 
			 * tall, the line is horizontal and connects the center points 
			 * on the vertical sides of the bounding box. If the object's 
			 * bounding box is taller than it is wide, the line connects 
			 * the center points of the horizontal sides of the bounding 
			 * box.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly CONVERT_TO_STRAIGHT_LINE: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Converts the object to a triangle.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly CONVERT_TO_TRIANGLE: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_BEVELED_RECTANGLE. Converts the object 
			 * to a rectangle with beveled corners.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly convertToBeveledRectangle: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_CLOSED_PATH. Converts the object to a 
			 * closed path.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly convertToClosedPath: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_INVERSE_ROUNDED_RECTANGLE. Converts the 
			 * object to a rectangle with inverse rounded corners.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly convertToInverseRoundedRectangle: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_LINE. Converts the object to a line 
			 * that connects the upper left and lower right corners of the 
			 * object's bounding box.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly convertToLine: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_OPEN_PATH. Converts the object to an 
			 * open path.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly convertToOpenPath: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_OVAL. Converts the object to an 
			 * ellipse.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly convertToOval: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_POLYGON. Converts the object to a 
			 * polygon.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly convertToPolygon: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_RECTANGLE. Converts the object to a 
			 * rectangle.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly convertToRectangle: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_ROUNDED_RECTANGLE. Converts the object 
			 * to a rectangle with rounded corners.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly convertToRoundedRectangle: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_STRAIGHT_LINE. Converts the object to 
			 * straight line. If the object is a square, circle, or its 
			 * bounding box is wider than it is tall, the line is 
			 * horizontal and connects the center points on the vertical 
			 * sides of the bounding box. If the object's bounding box is 
			 * taller than it is wide, the line connects the center points 
			 * of the horizontal sides of the bounding box.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly convertToStraightLine: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * Alias for CONVERT_TO_TRIANGLE. Converts the object to a 
			 * triangle.
			 * @type {Adobe.Indesign.ConvertShapeOptions}
			 * @readonly
			 */
			public static readonly convertToTriangle: Adobe.Indesign.ConvertShapeOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}